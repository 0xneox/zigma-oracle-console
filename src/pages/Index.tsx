import Hero from "@/components/Hero";
import OracleLogic from "@/components/OracleLogic";
import SignalPhilosophy from "@/components/SignalPhilosophy";
import SampleSignal from "@/components/SampleSignal";
import Differentiators from "@/components/Differentiators";
import TokenUtility from "@/components/TokenUtility";
import Footer from "@/components/Footer";
import { LogsDisplay } from "@/components/LogsDisplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* CRT Effects */}
      <div className="crt-glow" />
      <div className="crt-vignette" />
      <div className="crt-flicker" />
      <div className="scanline" />

      {/* Glitch Effects */}
      <div className="glitch-container">
        <div className="glitch-effect" />
        <div className="glitch-rgb" />
        <div className="glitch-lines" />
        <div className="glitch-noise" />
      </div>

      <Hero />
      <OracleLogic />
      <SignalPhilosophy />
      <SampleSignal />
      <Differentiators />
      <TokenUtility />

      {/* Console Section */}
      <section id="console" className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <LogsDisplay />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
