import { getDashboard } from "../_data-access/dashboard/get-dashboard";
import Header, {
  HeaderLeft,
  HeaderSubTitle,
  HeaderTitle,
} from "../_components/header";
import RevenueChart from "./_components/revenue-chart";
import MostSoldProductItem from "./_components/most-sold-product-item";
import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";
import { Skeleton } from "../_components/ui/skeleton";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-in-stock-card";
import TotalProductsCard from "./_components/total-products-card";

const Home = async () => {
  const { totalLast14DaysRevenue, mostSoldProducts } = await getDashboard();

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
        <div className="flex h-[340px] flex-col overflow-hidden rounded-xl bg-white p-6">
          <p className="text-lg font-semibold text-blue-700">Receita</p>
          <p className="mb-1 text-sm font-semibold text-blue-300">
            Últimos 14 dias
          </p>

          <RevenueChart data={totalLast14DaysRevenue} />
        </div>

        <div className="flex h-[340px] flex-col overflow-hidden rounded-xl bg-white py-6">
          <p className="px-4 py-6 text-xl font-semibold text-blue-700">
            Produtos Mais Vendidos
          </p>

          <div className="mt-1 space-y-6 overflow-y-auto px-4 pb-2">
            {mostSoldProducts.map((product) => (
              <MostSoldProductItem key={product.productId} product={product} />
            ))}
          </div>
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
        <Skeleton className="ml-5 mt-2 h-6 w-6 rounded-lg bg-blue-100" />
        <Skeleton className="ml-5 h-4 w-32 bg-blue-100" />
        <Skeleton className="mb-4 ml-5 h-6 w-48 bg-blue-100" />
      </div>
    </Skeleton>
  );
};
