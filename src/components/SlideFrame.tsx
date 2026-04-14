import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SlideFrame({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-center px-6 py-10 md:px-10 md:py-12 ${className}`}
    >
      {children}
    </div>
  );
}
