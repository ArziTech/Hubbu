"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function LoadingAnimation({
  className,
}: {
  className?: string;
}) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={cn("text-lg font-semibold text-gray-700", className)}>
      Loading{dots}
    </p>
  );
}
