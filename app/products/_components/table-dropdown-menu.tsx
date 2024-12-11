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
import { Button } from "@/app/_components/ui/button";
import DeleteProductDialogContent from "./delete-dialog-content";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import UpsertProductDialogContent from "./upsert-dialog-content";
import { useState } from "react";
import { Product } from "@prisma/client";

interface ProductTableDropdownMenuProps {
  product: Product;
}

const ProductTableDropdownMenu = ({
  product,
}: ProductTableDropdownMenuProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  return (
    <>
      <AlertDialog>
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
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
              <DialogTrigger asChild>
                <DropdownMenuItem className="gap-1.5">
                  <EditIcon size={16} />
                  Editar
                </DropdownMenuItem>
              </DialogTrigger>
              <AlertDialogTrigger asChild >
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
            onSuccess={() => setEditDialogOpen(false)}
          />
          <DeleteProductDialogContent productId={product.id} />
        </Dialog>
      </AlertDialog>
    </>
  );
};

export default ProductTableDropdownMenu;
