import { Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  userLocation?: React.ReactNode;
  userPrice?: React.ReactNode;
  userItemsCount?: React.ReactNode;
  userDetailsText?: React.ReactNode;
}

export default function UserProfile1({
  userName = "Mr. & Mrs. Jones",
  userLocation = "Ludhiana",
  userPrice = "₹600",
  userItemsCount = "2 Items",
  userDetailsText = "Details",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col justify-center items-center flex-1`}>
      <Text as="p" className="!text-[4.95px] !font-medium">
        {userName}
      </Text>
      <Text as="p" className="ml-[94px] !text-[4.95px]">
        {userLocation}
      </Text>
      <div className="flex flex-1 items-center justify-end">
        <Text as="p" className="!text-[4.95px]">
          {userPrice}
        </Text>
        <div className="ml-16 h-[0.35px] w-[4%] self-end bg-blue_gray-700" />
        <Text as="p" className="ml-16 !text-[4.95px]">
          {userItemsCount}
        </Text>
        <div className="flex items-center">
          <Text as="p" className="!text-[4.95px]">
            {userDetailsText}
          </Text>
          <Img src="images/img_group_blue_gray_700.svg" alt="Details" className="h-[4px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}
