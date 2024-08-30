import { Img, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col p-7 sm:p-5 bg-gray-900 shadow-sm rounded-[12px]`}>
      <div className="mx-auto mt-8 flex w-full max-w-[1320px] flex-col items-center self-stretch">
        <Img src="images/img_footer_logo.png" alt="Footerlogo" className="h-[28px] w-[198px] object-contain" />
        <ul className="!mx-[318px] !mt-[60px] flex flex-wrap justify-center gap-10 self-stretch md:mx-0">
          <li>
            <a href="#">
              <Heading as="p" className="!text-white-a700">
                Get Started
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="p" className="!text-white-a700">
                About Us
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="p" className="!text-white-a700">
                Plans & Pricing
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="p" className="!text-white-a700">
                Contact Us
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="p" className="!text-white-a700">
                Privacy Policy
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="p" className="!text-white-a700">
                Terms of Use
              </Heading>
            </a>
          </li>
        </ul>
        <div className="mt-10 flex w-[12%] flex-col items-center gap-6 md:w-full">
          <Heading as="p" className="!text-white-a700">
            Follow us on social media
          </Heading>
          <div className="mx-1.5 flex justify-between gap-5 self-stretch md:mx-0">
            <Img src="images/img_ant_design_x_outlined.svg" alt="Antdesignx" className="h-[24px] w-[24px]" />
            <Img src="images/img_ic_baseline_facebook.svg" alt="Icbaseline" className="h-[24px] w-[24px]" />
            <Img src="images/img_mdi_instagram.svg" alt="Mdiinstagram" className="h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="mt-10 h-px w-full self-stretch bg-gray-200_7f" />
        <div className="mt-[26px] flex items-center gap-3">
          <Heading size="textmd" as="p" className="!text-white-a700">
            A solution by
          </Heading>
          <Img src="images/img_frame.svg" alt="Image" className="h-[32px] w-[52%] object-contain" />
        </div>
      </div>
    </footer>
  );
}
