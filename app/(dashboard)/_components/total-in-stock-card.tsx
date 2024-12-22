import { PackageCheckIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-cards";
import { getTotalInStock } from "@/app/_data-access/dashboard/get-total-in-stock";

const TotalInStockCard = async () => {
  const totalInStock = await getTotalInStock();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <PackageCheckIcon />
      </SummaryCardIcon>
      <SummaryCardTitle>Total em estoque</SummaryCardTitle>
      <SummaryCardValue>{totalInStock}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalInStockCard;
