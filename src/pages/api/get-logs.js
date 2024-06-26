export const runtime = 'edge';

if (typeof global.log === 'undefined') {
  global.log = [];
}

// Add some test logs
global.log.push({ type: 'test', query: { message: 'This is a test log' } });

export default async function handler(req) {
  return new Response(JSON.stringify({ logs: global.log }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Allow all origins
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Allow these methods
      'Access-Control-Allow-Headers': 'Content-Type', // Allow these headers
    },
  });
}
