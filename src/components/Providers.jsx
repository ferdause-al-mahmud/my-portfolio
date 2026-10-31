"use client";

import { MotionConfig } from "framer-motion";
import { Toaster } from "react-hot-toast";

// Client-side context shared by every page
export default function Providers({ children }) {
  return (
    // Respect the visitor's "reduce motion" OS setting for all animations
    <MotionConfig reducedMotion="user">
      {children}
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#111a29",
            color: "#e2e8f0",
            border: "1px solid rgb(255 255 255 / 0.1)",
          },
        }}
      />
    </MotionConfig>
  );
}
