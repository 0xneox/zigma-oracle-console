import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Footer = () => {
  const [statusOpen, setStatusOpen] = useState(false);
  const links = [
    { label: "X", href: "https://x.com/agentzigma" },
    { label: "Telegram", href: "https://t.me/agentzigma" },
    { label: "Status", href: "#" },
  ];

  return (
    <>
      <footer className="py-16 px-4 border-t border-border">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <p className="text-primary font-bold mb-1">ZIGMA.PRO</p>
            <p className="text-muted-foreground text-sm">
              An independent market oracle.
            </p>
          </div>

          <div className="mb-8 text-sm text-muted-foreground space-y-1">
            <p>DO NOT TRADE BASED ON HYPE.</p>
            <p>VERIFY EVERYTHING.</p>
          </div>

          <div className="flex gap-6 text-sm">
            {links.filter(link => link.label !== "Status").map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="terminal-link"
              >
                {link.label}
              </a>
            ))}
            <button onClick={() => setStatusOpen(true)} className="terminal-link">
              Status
            </button>
            <Link to="/docs" className="terminal-link">
              Docs
            </Link>
          </div>

        </div>
      </footer>

      <Dialog open={statusOpen} onOpenChange={setStatusOpen}>
        <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto bg-black border-green-400 text-green-400">
          <DialogHeader>
            <DialogTitle className="text-green-400">System Status</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">No recent issues</p>
              <p className="text-muted-foreground">Updated less than 1 minute ago</p>
            </div>

            <section>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Service History</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-green-400">
                  <thead>
                    <tr className="border-b border-green-400">
                      <th className="p-2 text-left">Service</th>
                      <th className="p-2">Today</th>
                      <th className="p-2">29 Dec</th>
                      <th className="p-2">28 Dec</th>
                      <th className="p-2">27 Dec</th>
                      <th className="p-2">26 Dec</th>
                      <th className="p-2">25 Dec</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-400">
                      <td className="p-2">Oracle Core</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                    </tr>
                    <tr className="border-b border-green-400">
                      <td className="p-2">API Gateway</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                    </tr>
                    <tr className="border-b border-green-400">
                      <td className="p-2">Logs Processor</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                    </tr>
                    <tr>
                      <td className="p-2">Signal Engine</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                      <td className="p-2 text-center text-green-400">●</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">● Operational</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Recent Events</h3>
              <ul className="space-y-2">
                <li className="border-l-2 border-green-400 pl-4">
                  <p className="text-sm">2025-12-31 12:00 UTC - Oracle Core cycle completed successfully</p>
                </li>
                <li className="border-l-2 border-green-400 pl-4">
                  <p className="text-sm">2025-12-31 11:45 UTC - API Gateway operational</p>
                </li>
                <li className="border-l-2 border-green-400 pl-4">
                  <p className="text-sm">2025-12-31 11:30 UTC - Logs processed without issues</p>
                </li>
                <li className="border-l-2 border-green-400 pl-4">
                  <p className="text-sm">2025-12-31 11:15 UTC - Signal engine analysis completed</p>
                </li>
              </ul>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
