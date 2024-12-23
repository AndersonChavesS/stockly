import Header, {
  HeaderLeft,
  HeaderSubTitle,
  HeaderTitle,
} from "../_components/header";
import MostSoldProductItem from "./_components/most-sold-product-item";
import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";
import { Skeleton } from "../_components/ui/skeleton";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-in-stock-card";
import TotalProductsCard from "./_components/total-products-card";
import TotalLast14DaysRevenueCard from "./_components/total-last-14-days-revenue-card";
import MostSoldProductsCard from "./_components/most-sold-products";

const Home = async () => {
  return (
    <div className="mx-5 mt-5 w-full space-y-2 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderSubTitle>Visão Geral dos Dados</HeaderSubTitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>

      <div className="grid grid-cols-2 gap-2">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenueCard />
        </Suspense>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalSalesCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalInStockCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalProductsCard />
        </Suspense>
      </div>
      <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-2">
        <Suspense
          fallback={
            <Skeleton className="h-[333px] w-full rounded-xl bg-white bg-opacity-75">
              <div className="mt-6 w-full space-y-2">
                <Skeleton className="ml-5 mt-2 h-6 w-[55px] rounded-lg bg-blue-100" />
                <Skeleton className="ml-5 h-4 w-32 bg-blue-100" />
                <Skeleton className="ml-16 h-[265px] w-[698px] bg-blue-100" />
              </div>
            </Skeleton>
          }
        >
          <TotalLast14DaysRevenueCard />
        </Suspense>

        <div>
          <Suspense
            fallback={
              <Skeleton className="h-[333px] w-full space-y-2 rounded-xl bg-white pt-10">
                <Skeleton className="ml-4 h-8 w-60 bg-blue-100" />

                <MostProductCardSkeleton />
                <MostProductCardSkeleton />
                <MostProductCardSkeleton />
              </Skeleton>
            }
          >
            <MostSoldProductsCard />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;

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

export const MostProductCardSkeleton = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Skeleton className="ml-4 mt-5 h-5 w-28 rounded-full bg-blue-100" />
        <Skeleton className="ml-4 mt-3 h-6 w-16 bg-blue-100" />
        <Skeleton className="ml-4 mt-3 h-6 w-24 bg-blue-100" />
      </div>
      <div>
        <Skeleton className="mr-8 mt-6 h-6 w-24 bg-blue-100" />
      </div>
    </div>
  );
};
