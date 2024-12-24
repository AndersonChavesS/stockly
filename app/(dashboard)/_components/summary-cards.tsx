import { Skeleton } from "@/app/_components/ui/skeleton";
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


export const SummaryCardSkeleton = () => {
  return (
    <Skeleton className="h-full w-full rounded-xl bg-white bg-opacity-75">
      <div className="w-full space-y-2 pb-4 pt-4">
        <Skeleton className="ml-5 mt-2 h-6 w-32 rounded-lg bg-blue-100" />
        <Skeleton className="ml-5 h-4 w-40 bg-blue-100" />
        <Skeleton className="mb-4 ml-5 h-6 w-48 bg-blue-100" />
      </div>
    </Skeleton>
  );
};
