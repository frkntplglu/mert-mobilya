import { Briefcase, ChefHat, DoorOpen, Hammer, PenTool, Shirt } from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/lib/data";

const icons = {
  kitchen: ChefHat,
  wardrobe: Shirt,
  door: DoorOpen,
  office: Briefcase,
  design: PenTool,
  restore: Hammer,
} satisfies Record<ServiceIconName, unknown>;

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden strokeWidth={1.4} className={className} />;
}
