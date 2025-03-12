"use client";

import dynamic from "next/dynamic";

// Export the dynamic component that will trigger the Turbopack issue
export const DynamicComponent = dynamic(
  () => import("../components/DynamicComponent"),
  {
    ssr: false
  }
);
