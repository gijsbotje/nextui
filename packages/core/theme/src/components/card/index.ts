import {tv, type VariantProps} from "tailwind-variants";

import {focusVisibleClasses} from "../../utils";

/**
 * Card **Tailwind Variants** component
 *
 * @example
 * <div className={card()}>A basic card</div>
 */
const card = tv({
  slots: {
    base: [
      ...focusVisibleClasses,
      "flex flex-col m-0 p-0 relative overflow-hidden w-full height-auto bg-white text-foreground rounded-xl box-border dark:bg-neutral-900 dark:text-foreground-dark",
    ],
    body: "",
    footer: "",
    header: "",
  },
  variants: {
    variant: {
      shadow: "drop-shadow-lg",
      bordered: "border-border dark:border-border-dark",
      flat: "bg-neutral-100",
    },
    borderWeight: {
      light: "",
      normal: "",
      bold: "",
      extrabold: "",
      black: "",
    },
    isHoverable: {
      true: "hover:drop-shadow-lg",
    },
    isPressable: {
      true: "cursor-pointer",
    },
    disableAnimation: {
      true: "",
      false: "!transition motion-reduce:transition-none",
    },
  },
  compoundVariants: [
    {
      isHoverable: true,
      disableAnimation: false,
      class: "hover:-translate-y-0.5",
    },
    {
      isPressable: true,
      disableAnimation: false,
      class: "active:scale-95",
    },
    {
      variant: "bordered",
      borderWeight: "light",
      class: "border",
    },
    {
      variant: "bordered",
      borderWeight: "normal",
      class: "border-2",
    },
    {
      variant: "bordered",
      borderWeight: "bold",
      class: "border-3",
    },
    {
      variant: "bordered",
      borderWeight: "extrabold",
      class: "border-4",
    },
    {
      variant: "bordered",
      borderWeight: "black",
      class: "border-5",
    },
  ],
  defaultVariants: {
    variant: "shadow",
    isHoverable: false,
  },
});

export type CardVariantProps = VariantProps<typeof card>;
export type CardSlots = keyof ReturnType<typeof card>;

export {card};
