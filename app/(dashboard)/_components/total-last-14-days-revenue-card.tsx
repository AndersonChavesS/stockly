import RevenueChart from "./revenue-chart";
import { getLast14DaysRevenue } from "@/app/_data-access/dashboard/get-last-14-days-revenue";

const TotalLast14DaysRevenueCard = async () => {
  const totalLast14DaysRevenue = await getLast14DaysRevenue();
  return (
    <div className="flex h-[333px] flex-col overflow-hidden rounded-xl bg-white p-6">
      <p className="text-lg font-semibold text-blue-700">Receita</p>
      <p className="mb-1 text-sm font-semibold text-blue-300">
        Últimos 14 dias
      </p>

      <RevenueChart data={totalLast14DaysRevenue} />
    </div>
  );
};

export default TotalLast14DaysRevenueCard;
