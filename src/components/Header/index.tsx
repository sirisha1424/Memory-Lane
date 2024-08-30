import { Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex items-center p-7 sm:p-5 border-gray-200 border border-solid bg-white-a700 shadow-xs rounded-[12px]`}
    >
      <div className="mx-auto flex w-full max-w-[1334px] items-center justify-between gap-5 sm:flex-col">
        <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[22px] w-[156px] object-contain" />
        <ul className="flex flex-wrap gap-10">
          <li>
            <a href="#">
              <Heading size="heading2xl" as="p" className="!text-gray-900">
                Get Started
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading size="heading2xl" as="p" className="!text-gray-900">
                About Us
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading size="heading2xl" as="p" className="!text-gray-900">
                Plans & Pricing
              </Heading>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
