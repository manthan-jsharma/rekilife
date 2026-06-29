"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        background: "#0a0a0f",
      }}
    >
      {!loaderDone && <Loader onComplete={() => setLoaderDone(true)} />}
      <UnderConstruction visible={loaderDone} />
    </main>
  );
}
