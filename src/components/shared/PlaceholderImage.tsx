import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label: string;
  icon?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "3:2" | "2:3";
  className?: string;
  color?: "blue" | "gold" | "gray" | "navy";
}

export default function PlaceholderImage({
  label,
  icon,
  aspectRatio = "16:9",
  className,
  color = "gray"
}: PlaceholderImageProps) {
  const aspectClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "3:2": "aspect-[3/2]",
    "2:3": "aspect-[2/3]"
  };

  const colorClasses = {
    blue: "from-primary/10 to-primary/5",
    gold: "from-accent/10 to-accent/5",
    gray: "from-muted to-muted/50",
    navy: "from-navy/10 to-navy/5"
  };

  return (
    <div
      className={cn(
        "w-full bg-gradient-to-br flex items-center justify-center border border-border/30 relative overflow-hidden",
        aspectClasses[aspectRatio],
        colorClasses[color],
        className
      )}
    >
      {icon && <span className="text-3xl opacity-30 absolute top-2 left-2">{icon}</span>}
      <div className="text-center p-3 z-10">
        {icon && !className?.includes('absolute') && (
          <span className="text-4xl mb-2 block opacity-40">{icon}</span>
        )}
        <span className="text-xs font-medium text-foreground/60 uppercase tracking-wider block">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/5 pointer-events-none" />
    </div>
  );
}
