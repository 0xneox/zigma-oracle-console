import Hero from "@/components/Hero";
import Manifesto from "@/components/OracleLogic";
import LatestSignal from "@/components/LatestSignal";
import AntiAIManifesto from "@/components/SignalPhilosophy";
import TokenUtility from "@/components/TokenUtility";
import Footer from "@/components/Footer";
import { LogsDisplay } from "@/components/LogsDisplay";
import { useState, useEffect } from 'react';

interface SystemStatus {
  status?: string;
  uptime?: number;
  lastRun?: string;
  marketsMonitored?: number;
  posts?: number;
}

const Index = () => {
  const [showLogs, setShowLogs] = useState(false);
  const [showOperationalLogs, setShowOperationalLogs] = useState(false);
  const [liveStatus, setLiveStatus] = useState<SystemStatus>({});
  const [liveLogs, setLiveLogs] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('http://localhost:3001/status');
        const data = await res.json();
        setLiveStatus(data);
      } catch (e) {
        console.error('Failed to fetch status');
      }
    };

    const fetchLogs = async () => {
      try {
        const res = await fetch('http://localhost:3001/logs');
        const data = await res.json();
        setLiveLogs(data.logs);
      } catch (e) {
        console.error('Failed to fetch logs');
      }
    };

    fetchStatus();
    fetchLogs();

    const interval = setInterval(() => {
      fetchStatus();
      fetchLogs();
    }, 30000); // Refresh every 30s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      {/* Subtle CRT Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel: Oracle Core (Static) */}
        <div className="space-y-8">
          <div className="text-center border-b border-green-400 pb-4">
            <h1 className="text-2xl font-bold">──────── ORACLE CORE ────────</h1>
          </div>
          <Hero />
          <Manifesto />
          <div className="text-center space-y-2">
            <p>MANIFESTO: /manifesto</p>
            <p>EXECUTION LOG: /signals</p>
          </div>
          <AntiAIManifesto />
          <TokenUtility />
        </div>

        {/* Right Panel: Execution Console (Live) */}
        <div className="space-y-8">
          <div className="text-center border-b border-green-400 pb-4">
            <h1 className="text-2xl font-bold">──────── EXECUTION SNAPSHOT ────────</h1>
          </div>
          <div className="bg-gray-900 border border-green-400 p-4">
            <h2 className="text-lg mb-2">SYSTEM STATUS: {liveStatus.status?.toUpperCase()}</h2>
            <p>Uptime: {liveStatus.uptime === 0 ? '<current session>' : `${liveStatus.uptime}s`}</p>
            <p>Last Cycle: {liveStatus.lastRun ? new Date(liveStatus.lastRun).toLocaleDateString() + ' · ' + new Date(liveStatus.lastRun).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) + ' UTC' : '—'}</p>
            <p>Markets deeply evaluated this cycle: {liveStatus.marketsMonitored}</p>
            <p>Signals generated: {liveStatus.posts}</p>
          </div>
          <LatestSignal />
          <div className="text-center mt-4">
            <button
              onClick={() => setShowOperationalLogs(!showOperationalLogs)}
              className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-500 transition-colors"
            >
              {showOperationalLogs ? '▼ OPERATIONAL LOGS (audit)' : '▶ VIEW OPERATIONAL LOGS (audit only)'}
            </button>
          </div>
          {showOperationalLogs && (
            <section className="mt-4 border-t border-green-400 pt-4">
              <p className="text-xs text-muted-foreground mb-4">Zigma may evaluate a market multiple times before allowing a trade.</p>
              <div className="text-center border-b border-green-400 pb-4 mb-4">
                <h1 className="text-xl font-bold">──────── OPERATIONAL LOGS ────────</h1>
              </div>
              <LogsDisplay logs={liveLogs} />
            </section>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
