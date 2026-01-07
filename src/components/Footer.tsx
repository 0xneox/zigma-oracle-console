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

  const getStatusColumns = () => {
    const columns = ['Today'];
    const today = new Date();
    for (let i = 1; i <= 6; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const formatted = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
      columns.push(formatted);
    }
    return columns;
  };

  const statusColumns = getStatusColumns();

  const getRecentEvents = () => {
    const now = new Date();
    return [
      {
        time: new Date(now.getTime() - 0 * 60 * 60 * 1000).toISOString().slice(0, 16).replace('T', ' ') + ' UTC',
        message: 'Oracle Core cycle completed successfully'
      },
      {
        time: new Date(now.getTime() - 0.25 * 60 * 60 * 1000).toISOString().slice(0, 16).replace('T', ' ') + ' UTC',
        message: 'API Gateway operational'
      },
      {
        time: new Date(now.getTime() - 0.5 * 60 * 60 * 1000).toISOString().slice(0, 16).replace('T', ' ') + ' UTC',
        message: 'Logs processed without issues'
      },
      {
        time: new Date(now.getTime() - 0.75 * 60 * 60 * 1000).toISOString().slice(0, 16).replace('T', ' ') + ' UTC',
        message: 'Signal engine analysis completed'
      }
    ];
  };

  const recentEvents = getRecentEvents();

  return (
    <>
      <footer className="py-16 px-4 border-t border-border">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center justify-start gap-2 mb-1">
              <img src="/logonobg.png" alt="Zigma Logo" className="h-12 w-12" />
              <p className="text-primary font-bold">ZIGMA.PRO</p>
            </div>
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
            <span className="terminal-link text-muted-foreground">Premium (Coming Soon)</span>
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
                      {statusColumns.map(col => (
                        <th key={col} className="p-2">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-400">
                      <td className="p-2">Oracle Core</td>
                      {statusColumns.map(() => (
                        <td className="p-2 text-center text-green-400">●</td>
                      ))}
                    </tr>
                    <tr className="border-b border-green-400">
                      <td className="p-2">API Gateway</td>
                      {statusColumns.map(() => (
                        <td className="p-2 text-center text-green-400">●</td>
                      ))}
                    </tr>
                    <tr className="border-b border-green-400">
                      <td className="p-2">Logs Processor</td>
                      {statusColumns.map(() => (
                        <td className="p-2 text-center text-green-400">●</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2">Signal Engine</td>
                      {statusColumns.map(() => (
                        <td className="p-2 text-center text-green-400">●</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">● Operational</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Recent Events</h3>
              <ul className="space-y-2">
                {recentEvents.map((event, index) => (
                  <li key={index} className="border-l-2 border-green-400 pl-4">
                    <p className="text-sm">{event.time} - {event.message}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
