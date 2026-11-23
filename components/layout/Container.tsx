import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 xl:px-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}
