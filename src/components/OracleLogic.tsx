import { useState } from "react";

const OracleLogic = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="logic" className="py-20 px-4">
      <div className="container max-w-4xl">
        {/* Core Logic Block */}
        <div className="terminal-box mb-8">
          <div className="terminal-header">[ ZIGMA CORE LOGIC ]</div>
          <div className="space-y-2 text-sm md:text-base mb-4">
            <p>• Outputs delta only</p>
            <p>• Defaults to NO_TRADE</p>
            <p>• Consumes evidence, not opinions</p>
          </div>

          {/* Expandable Tier 2 */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary hover:underline text-sm mb-2"
          >
            {expanded ? '▼' : '▶'} Deterministic Logic (Advanced)
          </button>
          {expanded && (
            <div className="space-y-2 text-sm md:text-base text-muted-foreground border-t border-border pt-4">
              <p>• Canonical probabilities</p>
              <p>• Rejects noise</p>
              <p>• Market scanning mechanics</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OracleLogic;
