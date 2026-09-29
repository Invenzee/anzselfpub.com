"use client";

import { useEffect } from "react";
import { capturePpc } from "@/lib/ppc";

export function PpcCapture() {
  useEffect(() => {
    capturePpc();
  }, []);

  return null;
}
