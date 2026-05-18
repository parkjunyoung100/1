export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  try {
    const { source_code, input } = await req.json();
    if (!source_code || source_code.length > 10000) {
      return new Response(JSON.stringify({
        status: 'error',
        message: '코드가 너무 길거나 비어있습니다 (최대 10,000자)'
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    const res = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: 'c',
        version: '10.2.0',
        files: [{ content: source_code }],
        stdin: input || '',
        compile_timeout: 5000,
        run_timeout: 5000,
      }),
    });
    if (!res.ok) {
      return new Response(JSON.stringify({
        status: 'error',
        message: `컴파일 서버 오류 (${res.status})`
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    const data = await res.json();
    const run = data.run || {};
    return new Response(JSON.stringify({
      status: run.code === null && (run.stderr || '').includes('timeout') ? 'timeout' : 'completed',
      stdout: run.stdout || '',
      stderr: run.stderr || '',
      exit_code: run.code ?? -1,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({
      status: 'error',
      message: `서버 오류: ${err.message}`
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
