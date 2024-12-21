import { ReactNode } from "react";

export const SummaryCardIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-5 items-center justify-center rounded-md bg-opacity-10 text-blue-700">
      {children}
    </div>
  );
};

export const SummaryCardTitle = ({ children }: { children: ReactNode }) => {
  return <p className="text-sm font-medium text-slate-500">{children}</p>;
};

export const SummaryCardValue = ({ children }: { children: ReactNode }) => {
  return <p className="text-xl font-semibold text-slate-900">{children}</p>;
};

export const SummaryCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-auto w-full rounded-xl bg-slate-100 p-5">{children}</div>
  );
};
