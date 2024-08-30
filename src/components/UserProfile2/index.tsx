import { Heading, Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userEmailLabel?: React.ReactNode;
  userEmail?: React.ReactNode;
}

export default function UserProfile2({
  userEmailLabel = "Email",
  userEmail = "memorylane.admin@gmail.com",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-6 flex-1`}>
      <Img src="images/img_warning.svg" alt="Email" className="h-[70px] w-[24%] object-contain" />
      <div className="flex flex-1 flex-col items-start">
        <Text size="text2xl" as="p" className="!font-playfairdisplay !text-pink-900_01">
          {userEmailLabel}
        </Text>
        <Heading size="textmd" as="p">
          {userEmail}
        </Heading>
      </div>
    </div>
  );
}
