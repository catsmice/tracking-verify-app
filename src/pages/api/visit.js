import path from 'path';

export default function handler(req, res) {
  const { query } = req;
  global.log = global.log || [];
  global.log.push({ type: 'visit', query });

  const filePath = path.resolve('.', 'public/1x1-pixel.jpg');
  res.setHeader('Content-Type', 'image/jpeg');
  res.sendFile(filePath);
}