import { useState } from "react";

const Differentiators = () => {
  const [expanded, setExpanded] = useState(false);

  const blocks = [
    {
      title: "NO BLACK BOX",
      items: ["Deterministic", "Auditable", "Replayable"],
    },
    {
      title: "NO CONFIDENCE THEATER",
      items: ["No % confidence", "No vibes", "Only edge"],
    },
    {
      title: "NO FORCED TRADES",
      items: ["Silence > Bad Trades"],
    },
  ];

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="container max-w-4xl">
        <div className="terminal-header mb-6">[ ANTI-AI MANIFESTO ]</div>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary hover:underline text-sm mb-4"
        >
          {expanded ? '▼' : '▶'} Expand Manifesto
        </button>

        {expanded && (
          <div className="grid md:grid-cols-3 gap-4">
            {blocks.map((block) => (
              <div key={block.title} className="terminal-box">
                <h3 className="text-primary font-bold mb-3 text-sm">
                  {block.title}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {block.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Differentiators;
