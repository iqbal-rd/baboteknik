import ErrorBoundary from "./ErrorBoundary";
import { cn } from "@/lib/utils";
import { ReactNode, Ref } from "react";

interface SectionProps {
  id: string;
  children?: ReactNode;
  className?: string;
  padding?: boolean;
  minHeightScreen?: boolean;
  ref?: Ref<HTMLElement>;
}

export default function Section({
  id,
  children = null,
  className = "",
  padding = true,
  ref,
}: SectionProps) {
  return (
    <ErrorBoundary>
      <section id={id} ref={ref} className={cn("w-full", padding && "px-4 md:px-8 lg:px-12" )}>
        <div
          className={cn(
            "mx-auto flex w-full max-w-[1196px] flex-col gap-5",
            className
          )}
        >
          {children}
        </div>
      </section>
    </ErrorBoundary>
  );
}
