export default async (req, context) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { source_code, language, input, api_key } = await req.json();

    const paizaRes = await fetch('https://api.paiza.io:/runners/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source_code,
        language,
        input: input || '',
        api_key: api_key || 'guest',
      }),
    });

    const { id, status } = await paizaRes.json();

    if (status === 'error') {
      return new Response(JSON.stringify({ status: 'error', message: 'Compile error' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let done = false;
    let result = null;

    for (let i = 0; i < 30 && !done; i++) {
      await new Promise(r => setTimeout(r, 1000));

      const detailRes = await fetch(`https://api.paiza.io:/runners/get_details?id=${id}&api_key=guest`);
      result = await detailRes.json();

      if (result.status === 'completed') {
        done = true;
      } else if (result.status === 'error') {
        done = true;
      } else if (result.status === 'timeout') {
        done = true;
      }
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 'error', message: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
