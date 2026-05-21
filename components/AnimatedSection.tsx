import type { ElementType, ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delayClassName?: string;
  as?: ElementType;
};

export default function AnimatedSection({
  children,
  className = "",
  delayClassName = "",
  as = "section",
}: AnimatedSectionProps) {
  const Component = as;

  return (
    <Component className={`animate-fade-up opacity-0 [animation-fill-mode:forwards] ${delayClassName} ${className}`}>
      {children}
    </Component>
  );
}
