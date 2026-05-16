import { useEffect, useState } from "react";
import { HeartPulse } from "lucide-react";
import logo from "@/assets/ctn-logo.png";

export function InitialLoader() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), 1300);
    const removeTimer = window.setTimeout(() => setShow(false), 1800);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-hero transition-opacity duration-500 ${leaving ? "opacity-0" : "opacity-100"}`}
      aria-label="Loading Care Touch Nursing"
      role="status"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_31px,oklch(0.62_0.14_240_/_0.08)_32px),linear-gradient(180deg,transparent_0,transparent_31px,oklch(0.62_0.14_240_/_0.08)_32px)] bg-[length:32px_32px]" />
      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative">
          <span className="absolute inset-0 rounded-3xl bg-brand/20 blur-2xl animate-loader-glow" />
          <div className="relative rounded-3xl border border-white/70 bg-white/80 p-5 shadow-card backdrop-blur">
            <img src={logo} alt="Care Touch Nursing logo" className="h-28 w-auto object-contain" />
          </div>
        </div>

        <div className="mt-7 flex items-center gap-3 text-brand-deep">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card">
            <span className="absolute h-full w-full rounded-full bg-leaf/40 animate-pulse-ring" />
            <HeartPulse className="relative h-5 w-5 text-brand" />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold">Preparing care at your doorstep</p>
            <p className="text-xs text-muted-foreground">Nursing, elder care and medical support</p>
          </div>
        </div>

        <div className="mt-7 h-1.5 w-64 max-w-[70vw] overflow-hidden rounded-full bg-white/80 shadow-card">
          <div className="h-full rounded-full bg-gradient-brand animate-loader-progress" />
        </div>
      </div>
    </div>
  );
}
