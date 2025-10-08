"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "./utils";

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  progressColor: string; // sua nova propriedade opcional
};

function Progress({
  className,
  value,
  progressColor,
  ...props
}: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-gray-700 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 transition-all"
        style={{ 
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor: progressColor
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
