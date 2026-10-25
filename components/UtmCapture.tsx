"use client";

import { useEffect } from "react";
import { captureVisitSource } from "@/lib/leads";

/** Records where the visitor came from (UTM tags, outside referrer) so enquiries can say so. Renders nothing. */
export default function UtmCapture() {
  useEffect(() => {
    captureVisitSource();
  }, []);
  return null;
}
