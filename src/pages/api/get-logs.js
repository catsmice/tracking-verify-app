export const runtime = 'edge';

export default async function handler(req) {
  const logs = global.log || [];
  return new Response(JSON.stringify({ logs }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
