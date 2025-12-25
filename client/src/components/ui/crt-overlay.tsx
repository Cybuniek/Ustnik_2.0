import React from "react";

export function CRTOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-full w-full">
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
      {/* Scanline Bar */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(32,255,77,0.05)_50%,transparent_100%)] h-[20%] w-full animate-[scanline_8s_linear_infinite] pointer-events-none opacity-20" />
    </div>
  );
}
