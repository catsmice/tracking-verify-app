import { useEffect, useState } from 'react';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch('/api/get-logs');
      const data = await res.json();
      setLogs(data.logs);
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h1>Tracking Logs</h1>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.type}</strong>: {JSON.stringify(log.query)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
