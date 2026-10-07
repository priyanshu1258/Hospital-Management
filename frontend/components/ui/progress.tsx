import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function Progress({
  value = 0,
  max = 100,
  className,
  ...props
}: {
  value?: number;
  max?: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-slate-100",
        className
      )}
      {...props}
    >
      <div
        className="h-full bg-blue-600 transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "shrink-0 bg-slate-200",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  );
}
