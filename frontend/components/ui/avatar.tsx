import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function Avatar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100 items-center justify-center font-semibold text-slate-700 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarFallback({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-slate-100 font-medium text-slate-600",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
