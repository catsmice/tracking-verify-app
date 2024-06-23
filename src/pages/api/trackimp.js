export const runtime = 'edge';

export default async function handler(req) {
  const { query } = req;
  global.log = global.log || [];
  global.log.push({ type: 'trackimp', query });
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
