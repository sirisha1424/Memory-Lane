import { Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  userLocation?: React.ReactNode;
  userPrice?: React.ReactNode;
  itemsCount?: React.ReactNode;
  detailsText?: React.ReactNode;
}

export default function UserProfile({
  userName = "Mr. Avinash",
  userLocation = "Noida",
  userPrice = "₹3000",
  itemsCount = "4 Items",
  detailsText = "Details",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center flex-1`}>
      <Text as="p" className="!text-[4.95px] !font-medium">
        {userName}
      </Text>
      <Text as="p" className="ml-[104px] !text-[4.95px]">
        {userLocation}
      </Text>
      <Text as="p" className="ml-[84px] !text-[4.95px]">
        {userPrice}
      </Text>
      <div className="flex flex-1 justify-end">
        <Text as="p" className="!text-[4.95px]">
          {itemsCount}
        </Text>
        <div className="flex items-center">
          <Text as="p" className="!text-[4.95px]">
            {detailsText}
          </Text>
          <Img src="images/img_group_blue_gray_700.svg" alt="Details" className="h-[4px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}
