import {
  ClipboardCopyIcon,
  EditIcon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import DeleteProductDialogContent from "./delete-dialog-content";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import UpsertProductDialogContent from "./upsert-dialog-content";
import { useState } from "react";
import { Product } from "@prisma/client";
import { toast } from "sonner";

interface ProductTableDropdownMenuProps {
  product: Product;
}

const ProductTableDropdownMenu = ({
  product,
}: ProductTableDropdownMenuProps) => {
  const handleCopyToClipboardClick = () => {
    navigator.clipboard.writeText(product.id);
    toast.success("ID copiado para a area de transferência.");
  };
  const [editDialogIsOpen, setEditDialogIsOpen] = useState(false);
  return (
    <>
      <AlertDialog>
        <Dialog open={editDialogIsOpen} onOpenChange={setEditDialogIsOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontalIcon size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="gap-1.5"
                onClick={handleCopyToClipboardClick}
              >
                <ClipboardCopyIcon size={16} />
                Copiar ID
              </DropdownMenuItem>
              <DialogTrigger asChild>
                <DropdownMenuItem className="gap-1.5">
                  <EditIcon size={16} />
                  Editar
                </DropdownMenuItem>
              </DialogTrigger>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem className="gap-1.5">
                  <TrashIcon size={16} />
                  Deletar
                </DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <UpsertProductDialogContent
            defaultValues={{
              id: product.id,
              name: product.name,
              price: Number(product.price),
              stock: product.stock,
            }}
            setDialogIsOpen={setEditDialogIsOpen}
          />
          <DeleteProductDialogContent productId={product.id} />
        </Dialog>
      </AlertDialog>
    </>
  );
};

export default ProductTableDropdownMenu;
