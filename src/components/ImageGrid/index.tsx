import { Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function ImageGrid({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[4%] mt-3.5 gap-3`}>
      <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Grid Eleven" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Grid Thirteen" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Grid Fifteen" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Gridteen" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Gridteen" className="h-[14px] w-full" />
      <Img src="images/img_grid.svg" alt="Grid Twentyone" className="h-[14px] w-full" />
    </div>
  );
}
