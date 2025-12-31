import { Link } from "react-router-dom";

const Manifesto = () => {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="terminal-link">&lt; BACK TO ORACLE CORE</Link>
        </div>
        <h1 className="text-3xl font-bold text-green-400 mb-8 glow-text">ZIGMA MANIFESTO</h1>
        <div className="space-y-6">
          <p>
            Zigma is an oracle for prediction markets, specifically designed to detect and output structural edges in Polymarket contracts where they exist. It does not generate opinions, probabilities on demand, or signals for the sake of activity. It remains silent by default, outputting only when a clear, survivable edge passes all internal gates. This is not a tool for casual traders, gamblers, or those seeking constant action—most markets do not deserve a trade, and Zigma enforces that reality.
          </p>
          <h2 className="text-2xl font-bold text-green-400">Core Principles</h2>
          <div className="space-y-4">
            <p>
              <strong className="text-green-400">Evidence Over Everything:</strong> Zigma consumes verifiable data: market prices, liquidity metrics, volume trends, news deltas, structural factors, behavioral patterns, and time decay. It ignores hype, sentiment, and unsubstantiated claims. Outputs are deltas only—changes driven by evidence, not speculation.
            </p>
            <p>
              <strong className="text-green-400">Silence as Default:</strong> NO_TRADE is the baseline. Signals emerge only if an edge survives uncertainty modeling, real liquidity checks, acceptable time decay, and entropy discounting. Rejection is explicit: EDGE INSUFFICIENT, LIQUIDITY FAIL, VOLATILITY LOCK. This prevents false positives and over-trading.
            </p>
            <p>
              <strong className="text-green-400">Determinism with AI Augmentation:</strong> Core logic is deterministic, using fixed thresholds for survivability (short-term and long-term edge tests). AI (via LLMs like GPT or Grok) enhances analysis for news/structure/behavior/time deltas, but outputs are cached for reproducibility and bounded by confidence (base 70%, adjustable down).
            </p>
            <p>
              <strong className="text-green-400">No Hype, No Promises:</strong> Zigma is not a trading bot, signal spammer, or yield farm. It won't make you rich overnight. It's built for serious participants who understand that true edges are rare, and most "opportunities" evaporate under scrutiny. DYOR—verify every signal independently.
            </p>
            <p>
              <strong className="text-green-400">Independence and Rationing:</strong> Zigma can function without a token. The token exists solely to ration access in a usage-aligned way: burn for premium feeds, audits, API expansions, or analytics. No staking, no yields, no governance theater. If demand exceeds supply, burns ensure only committed users benefit.
            </p>
            <p>
              <strong className="text-green-400">Truth in Markets:</strong> Prediction markets are efficient until they're not. Zigma exploits structural inefficiencies without emotion. It speaks only when the math holds, and even then, edges are normalized for liquidity impact and entropy. Conviction does not equal tradable edge—market outlooks are non-executable views for context only.
            </p>
          </div>
          <p>
            Zigma exists to cut through the noise in prediction markets. In a world flooded with signals, it chooses restraint. If you're here for quick wins or entertainment, look elsewhere. If you're building positions on evidence, Zigma might occasionally have something to say.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Manifesto;
