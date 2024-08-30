import React from "react";

const sizes = {
  textxs: "text-[4px] font-normal not-italic",
  textlg: "text-[17px] font-normal not-italic",
  text2xl: "text-[20px] font-normal not-italic",
  text3xl: "text-[24px] font-normal not-italic md:text-[22px]",
  text4xl: "text-[35px] font-normal not-italic md:text-[33px] sm:text-[31px]",
  text5xl: "text-[36px] font-normal not-italic md:text-[34px] sm:text-[32px]",
  text6xl: "text-[48px] font-normal not-italic md:text-[44px] sm:text-[38px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-700 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
