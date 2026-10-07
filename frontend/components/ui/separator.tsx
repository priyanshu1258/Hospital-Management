import * as React from "react";
import { cn } from "@/lib/utils/cn";

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
