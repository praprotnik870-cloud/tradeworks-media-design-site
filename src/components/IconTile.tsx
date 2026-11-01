import type { LucideIcon } from 'lucide-react';

interface IconTileProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
}

const dims = {
  sm: { box: 'h-11 w-11', icon: 20 },
  md: { box: 'h-12 w-12', icon: 22 },
  lg: { box: 'h-16 w-16', icon: 30 },
};

export default function IconTile({ icon: Icon, size = 'md' }: IconTileProps) {
  const d = dims[size];
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border border-brand-cyan/30 bg-brand-cyan/[0.06] text-brand-cyan ${d.box}`}
    >
      <Icon size={d.icon} strokeWidth={1.75} />
    </span>
  );
}
