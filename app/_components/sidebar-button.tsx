import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarButtonProps {
  icon: React.ReactNode;
  href: string;
  value: string;
}

const SidebarButton = ({ icon, href, value }: SidebarButtonProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className="flex h-10 flex-1">
      <Button
        variant={pathname === `${href}` ? "secondary" : "outline"}
        className="flex-1 items-center justify-start text-base"
      >
        {icon}
        {value}
      </Button>
    </Link>
  );
};

export default SidebarButton;
