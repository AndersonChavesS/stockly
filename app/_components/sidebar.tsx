"use client";
import { LayoutGridIcon, ShoppingBasketIcon, PackageIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <div className="flex w-64 flex-col bg-blue-200">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold uppercase text-blue-800">stockly</h1>
      </div>
      <div className="flex flex-col space-y-2 p-2">
        <SidebarButton icon={<LayoutGridIcon />} href="/" value="Dashboard" />
        <SidebarButton
          icon={<PackageIcon />}
          href="/products"
          value="Produtos"
        />
        <SidebarButton
          icon={<ShoppingBasketIcon />}
          href="/sales"
          value="Vendas"
        />
      </div>
    </div>
  );
};

export default Sidebar;
