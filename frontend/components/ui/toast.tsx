"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export interface ToastItem {
  id: string;
  title?: string;
  description: string;
  variant?: "default" | "success" | "error" | "warning";
}

interface ToastContextValue {
  toast: (item: Omit<ToastItem, "id">) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    return {
      toast: (item: Omit<ToastItem, "id">) => {
        console.log("Toast:", item);
      },
    };
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const toast = React.useCallback((item: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...item, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg transition-all animate-in slide-in-from-top-2",
              t.variant === "success" && "bg-white border-emerald-200 text-slate-900",
              t.variant === "error" && "bg-white border-red-200 text-slate-900",
              t.variant === "warning" && "bg-white border-amber-200 text-slate-900",
              (!t.variant || t.variant === "default") && "bg-white border-slate-200 text-slate-900"
            )}
          >
            {t.variant === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
            {t.variant === "error" && <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />}
            {t.variant === "warning" && <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
            {(!t.variant || t.variant === "default") && <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />}
            <div className="flex-1">
              {t.title && <div className="font-semibold text-sm">{t.title}</div>}
              <div className="text-sm text-slate-600">{t.description}</div>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
