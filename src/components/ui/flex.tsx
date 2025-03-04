import { tv } from "tailwind-variants";
import { ReactNode } from "react";

type FlexProps = {
  children?: ReactNode;
  direction?: "row" | "column";
  justify?: "start" | "center" | "end" | "between";
  align?: "start" | "center" | "end";
  className?: string;
};

const flexVariants = tv({
  base: "flex",
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
  },
});

export function Flex({ children, direction = "row", justify, align, className }: FlexProps) {
  return (
    <div className={`${flexVariants({ direction, justify, align })} ${className}`}>
      {children}
    </div>
  );
}

export function Row({ children, justify, align, className }: Omit<FlexProps, "direction"> & { className?: string }) {
  return (
    <Flex direction="row" justify={justify} align={align} className={className}>
      {children}
    </Flex>
  );
}

export function Column({ children, justify, align, className }: Omit<FlexProps, "direction"> & { className?: string }) {
  return (
    <Flex direction="column" justify={justify} align={align} className={className}>
      {children}
    </Flex>
  );
}
