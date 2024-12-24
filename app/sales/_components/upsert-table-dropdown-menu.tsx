import { Button } from "@/app/_components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Product } from "@prisma/client";

import {
  MoreHorizontalIcon,
  ClipboardCopyIcon,
  EditIcon,
  TrashIcon,
} from "lucide-react";

interface UpsertSaleTableDropdowMenuProps {
  product: Pick<Product, "id">;
  onDelete: (productId: string) => void;
}

const UpsertSaleTableDropdowMenu = ({
  product,
  onDelete,
}: UpsertSaleTableDropdowMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontalIcon size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="gap-1.5"
          onClick={() => navigator.clipboard.writeText(product.id)}
        >
          <Button variant="ghost">
            <ClipboardCopyIcon size={16} />
            Copiar ID
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-1.5">
          <EditIcon size={16} />
          Editar
        </DropdownMenuItem>

        <DropdownMenuItem
          className="gap-1.5"
          onClick={() => onDelete(product.id)}
        >
          <TrashIcon size={16} />
          Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UpsertSaleTableDropdowMenu;
