import { Link } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from 'react';

const LogsDisplay = lazy(() => import("@/components/LogsDisplay").then(module => ({ default: module.LogsDisplay })));

const Logs = () => {
  const [liveLogs, setLiveLogs] = useState('');
  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const logsRes = await fetch(API_BASE + '/logs');
        const logsData = await logsRes.json();
        setLiveLogs(logsData.logs);
      } catch (e) {
        console.error('Failed to fetch logs');
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="terminal-link">&lt; BACK TO ORACLE CORE</Link>
        </div>
        <h1 className="text-3xl font-bold text-green-400 mb-8 glow-text">LIVE SIGNAL LOG</h1>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Real-time execution logs and signal processing. Updated every 30 seconds.</p>
          <Suspense fallback={<div>Loading logs...</div>}>
            <LogsDisplay logs={liveLogs} />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Logs;
