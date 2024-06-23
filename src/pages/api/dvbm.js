export default function handler(req, res) {
    const { query } = req;
    global.log = global.log || [];
    global.log.push({ type: 'dvbm', query });
    res.status(200).json({ success: true });
}