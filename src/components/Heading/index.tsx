import React from "react";

const sizes = {
  texts: "text-[14px] font-medium",
  textmd: "text-[16px] font-medium",
  textxl: "text-[18px] font-medium",
  headingxs: "text-[4px] font-semibold",
  headings: "text-[5px] font-semibold",
  headingmd: "text-[6px] font-semibold",
  headinglg: "text-[7px] font-semibold",
  headingxl: "text-[12px] font-semibold",
  heading2xl: "text-[14px] font-semibold",
  heading3xl: "text-[16px] font-semibold",
  heading4xl: "text-[18px] font-semibold",
  heading5xl: "text-[19px] font-bold",
  heading6xl: "text-[20px] font-semibold",
  heading7xl: "text-[22px] font-bold",
  heading8xl: "text-[36px] font-extrabold md:text-[34px] sm:text-[32px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "texts",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-700 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
