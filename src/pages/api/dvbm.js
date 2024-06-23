export const runtime = 'edge';

export default async function handler(req) {
  const { query } = req;
  global.log = global.log || [];
  global.log.push({ type: 'dvbm', query });
  return new Response(response, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // Allow all origins
    },
  });
}
