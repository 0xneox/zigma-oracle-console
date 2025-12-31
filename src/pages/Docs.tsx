import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="terminal-link">&lt; BACK TO ORACLE CORE</Link>
        </div>
        <h1 className="text-3xl font-bold text-green-400 mb-8 glow-text">ZIGMA DOCUMENTATION</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">User Guide</h2>
          <p className="mb-4">
            How to use Zigma without illusions: It's an oracle, not an advisor. Outputs are tools—your responsibility to act (or not).
          </p>

          <h3 className="text-xl font-semibold text-green-400 mb-2">Getting Started</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Visit www.zigma.pro.</li>
            <li>View dashboard: System status, executable trades, outlooks, rejects.</li>
            <li>Check /logs for live signal logs.</li>
            <li>For premium: Hold/burn ZIGMA (wallet connect coming Q1).</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-400 mb-2">Understanding Outputs</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li><strong>Executable Trades:</strong> Rare. Includes action (BUY YES/NO), confidence (50-100%), max exposure (0-3%), effective edge (post-adjustments).</li>
            <li><strong>Market Outlooks:</strong> Non-tradable. Model leans (YES/NO), conviction only. For context, not positions.</li>
            <li><strong>Rejected Signals:</strong> Why NO_TRADE (e.g., no edge). Evaluations count shows depth.</li>
            <li><strong>Operational Logs:</strong> Audit trail—cycles, evals, times. Transparency, not advice.</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-400 mb-2">Analysis Breakdown</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li><strong>Probability Chain:</strong> Market odds → Prior + Deltas (news/struct/behavior/time) → Zigma odds → Edge.</li>
            <li><strong>Effective Edge:</strong> Raw edge * confidence * (1-entropy) * liqFactor. Must &gt; threshold for signal.</li>
            <li><strong>Survivability:</strong> Edge holds short-term (immediate) and long-term (horizon).</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-400 mb-2">Best Practices</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li><strong>DYOR:</strong> Cross-check with Polymarket directly. News sources via Tavily are snapshots—verify.</li>
            <li><strong>Risk Management:</strong> Even with edge, losses happen. Use suggested exposure as max, not min.</li>
            <li><strong>Frequency:</strong> Cycles every ~15min. Refresh for updates.</li>
            <li><strong>Limits:</strong> Free tier: Dashboard only. Premium for APIs/audits.</li>
            <li><strong>Troubleshooting:</strong> If no signals, markets lack edges—that's normal. Report bugs via Telegram.</li>
          </ul>
          <p>No hand-holding: If this confuses you, Zigma isn't for you.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-400 mb-4">Zigma FAQ</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-400">Q: Is Zigma financial advice?</h3>
              <p>A: No. Educational tool only. Trading risks capital loss. Consult professionals.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400">Q: Why so many NO_TRADE?</h3>
              <p>A: Because most markets lack survivable edges. Forcing signals leads to junk—Zigma avoids that.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400">Q: How accurate are signals?</h3>
              <p>A: Backtests pending, but edges are normalized conservatively. Past performance irrelevant. Test yourself.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400">Q: Token required?</h3>
              <p>A: No for basics. Yes for premiums. Burns ensure committed users.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400">Q: Supported markets?</h3>
              <p>A: Polymarket only now. Expansions planned if viable.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400">Q: Why launch on Dec 31, 2025?</h3>
              <p>A: Core ready. No need for delays. Site live, signals generating.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400">Q: Bugs or issues?</h3>
              <p>A: Expected in v1. SAFE_MODE prevents mishaps. Report to improve.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400">Q: Future of Zigma?</h3>
              <p>A: Stays focused. If no value, it fades. No endless pivots.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-400 mb-4">Roadmap</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Phase 0: Launch (Today, Dec 31, 2025)</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Core Engine Live: Fetching 500+ Polymarket markets, filtering (active, liquid, non-expired), volume spike detection (10-1000% in 10min windows).</li>
                <li>Analysis Pipeline: AI-enhanced probability chains (P_market → P_prior + deltas → P_zigma → effective edge). Survivability tests for short/long-term.</li>
                <li>Signal Output: Executable trades (with exposure caps 0-3%), market outlooks (non-tradable), rejected signals, operational logs.</li>
                <li>Distribution: Website dashboard at www.zigma.pro. Simulated X posts in SAFE_MODE (real posting disabled until vetted).</li>
                <li>Persistence: SQLite for caches, analyses, signals. No data loss on restarts.</li>
                <li>Known Limits: Tavily/LLM timeouts handled with fallbacks. No user auth yet—public access.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-400">Phase 1: Stability & Polish (Q1 2026, 1-3 months post-launch)</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Fix 404s & Content: Deploy /manifesto, /signals as static pages or dynamic endpoints. Mirror dashboard logs to these for easy access.</li>
                <li>User Feedback Loop: Add contact form or Telegram for reports. Prioritize bug fixes (e.g., recursive hangs already resolved).</li>
                <li>Enhanced Filtering: Refine low-liquidity cutoff ($10k+ volume threshold). Add more rejection reasons (e.g., SPREAD_TOO_WIDE).</li>
                <li>API Exposure: Basic public API for signal feeds (rate-limited). Token burn for higher limits.</li>
                <li>Monitoring: Uptime dashboard, error alerts. Target 99% availability.</li>
                <li>Metrics Goal: Analyze 200+ markets per cycle, generate 1-5 signals avg (mostly NO_TRADE).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-400">Phase 2: Scalability & Premium Features (Q2 2026)</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Token Integration: Launch ZIGMA token (ERC-20, details in Tokenomics doc). Implement burn mechanics for: Premium signals (real-time vs. delayed). Historical audits (full eval chains). API expansions (higher rates, custom queries). Advanced analytics (edge backtests, portfolio sims).</li>
                <li>Multi-Market Support: Expand beyond Polymarket to Kalshi/Manifold if APIs stabilize. Cross-market arbitrage detection.</li>
                <li>AI Upgrades: Switchable LLMs (Grok default for xAI alignment). Fine-tune prompts for better delta accuracy.</li>
                <li>Social Automation: Enable real X/Telegram posts (post-SAFE_MODE). Thread signals with audit links.</li>
                <li>Performance: Reduce cycle time to &lt;10min. Handle 1000+ markets.</li>
                <li>Risk: If token demand is low, delay to avoid overhead. No forced hype.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-400">Phase 3: Advanced Intelligence (Q3-Q4 2026)</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>ML Integration: Beyond LLMs, add simple models for entropy/volatility forecasting. Backtest edges on historical data.</li>
                <li>User Tools: Dashboard for custom market watches. Alert subscriptions (burn-based).</li>
                <li>Resilience++: WebSockets for real-time Polymarket updates. Multi-provider news (beyond Tavily).</li>
                <li>Community: Open-source select components (e.g., fetch/filter logic). No governance—feedback only.</li>
                <li>Expansion Risks: If Polymarket volumes drop, pivot to other platforms. No guarantees on adoption.</li>
                <li><strong>V3 Enhancement:</strong> Agent will public trade in basket and yield is given to token holders perpetually, capital is given from the creator fee earned while deploying token.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-400">Long-term</h3>
              <p>Zigma stays lean. If it doesn't find edges consistently, it won't pretend to. No endless feature creep—core is edge detection, period. Budget: Self-funded via burns if token succeeds; otherwise, maintain as is.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-400">V4: Multi-Market Expansion</h3>
              <p>We will have Kalshi, opinion trade, and other prediction markets integrated.</p>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-green-400 text-center">
          <p className="text-muted-foreground">For more details, check the <Link to="/manifesto" className="terminal-link">Manifesto</Link> or <Link to="/logs" className="terminal-link">Live Logs</Link>.</p>
        </div>
      </div>
    </main>
  );
};

export default Docs;
