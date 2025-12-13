import ErrorBoundary from "./ErrorBoundary";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MainProps {
  id: string;
  children?: ReactNode;
  className?: string;
}

export default function Main({
  id,
  children = null,
  className = "",
}: MainProps) {
  return (
    <ErrorBoundary>
      <main
        id={id}
        className={cn(
          "bg-white flex flex-col gap-[50px] md:gap-[75px] lg:gap-[100px]",
          className,
        )}
      >
        {children}
      </main>
    </ErrorBoundary>
  );
}