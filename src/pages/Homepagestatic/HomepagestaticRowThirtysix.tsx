import { Img, Button, TextArea, Input, Text, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React from "react";

export default function HomepagestaticRowThirtysix() {
  return (
    <div className="flex">
      <div className="container-xs flex md:px-5">
        <div className="h-[832px] w-full rounded-[12px] border border-solid border-blue_gray-50 bg-white-a700 bg-[url(/public/images/img_frame_6.png)] bg-cover bg-no-repeat py-8 shadow-sm md:h-auto sm:py-5">
          <div className="mb-20">
            <div className="flex flex-col gap-[94px] md:gap-[70px] sm:gap-[47px]">
              <div>
                <div className="flex items-center md:flex-col">
                  <Img
                    src="images/img_elements_organi_gray_500.png"
                    alt="Elementsorgani"
                    className="mb-2 h-[132px] w-[10%] object-contain md:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-3 self-end pl-[316px] pr-14 md:self-stretch md:px-5 sm:self-auto">
                    <div className="flex items-end gap-7 sm:flex-col">
                      <Img
                        src="images/img_union_gray_200_26x120.svg"
                        alt="Union"
                        className="mb-1.5 h-[26px] w-[20%] object-contain sm:mb-0 sm:w-full"
                      />
                      <a href="#" className="self-center">
                        <Text size="text5xl" as="p" className="!font-playfairdisplay capitalize">
                          Contact us
                        </Text>
                      </a>
                      <Img
                        src="images/img_union_gray_200.svg"
                        alt="Union"
                        className="mb-1.5 h-[26px] w-[20%] object-contain sm:mb-0 sm:w-full"
                      />
                    </div>
                    <Heading size="textxl" as="h2" className="ml-7 capitalize !text-lime-700 md:ml-0">
                      Keep in touch in case you need more information
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="mx-[22px] flex items-start gap-[22px] md:mx-0 md:flex-col">
                <div className="mb-[46px] flex flex-1 items-center justify-between gap-5 md:flex-col md:self-stretch">
                  <div className="ml-[84px] flex w-[30%] flex-col gap-[60px] rounded-[12px] md:ml-0 md:w-full">
                    <UserProfile2 className="mr-3.5 md:mr-0" />
                    <UserProfile2 />
                  </div>
                  <div className="flex w-[60%] flex-col items-start gap-6 rounded-[12px] bg-white-a700 px-9 py-6 shadow-xs md:w-full sm:p-5">
                    <Text size="text2xl" as="p" className="!font-playfairdisplay capitalize !text-pink-900_01">
                      Write to us
                    </Text>
                    <div className="flex flex-col items-start gap-10 self-stretch">
                      <div className="flex flex-col gap-5 self-stretch">
                        <div className="flex gap-10 md:flex-col">
                          <Input
                            type="text"
                            name="name"
                            placeholder={`name`}
                            className="flex h-[52px] w-full items-center justify-center rounded-[12px] border border-solid border-blue_gray-50 bg-gray-50_01 px-4 text-[14px] capitalize text-blue_gray-200 shadow-4xl"
                          />
                          <Input
                            type="email"
                            name="email"
                            placeholder={`email`}
                            className="flex h-[52px] w-full items-center justify-center rounded-[12px] border border-solid border-blue_gray-50 bg-gray-50_01 px-4 text-[14px] capitalize text-blue_gray-200 shadow-4xl"
                          />
                        </div>
                        <TextArea
                          name="textbox"
                          placeholder={`your message…`}
                          className="h-[150px] rounded-[12px] border border-solid border-blue_gray-50 bg-gray-50_01 px-[18px] py-3.5 text-[14px] capitalize text-blue_gray-200 shadow-4xl"
                        />
                      </div>
                      <Button
                        rightIcon={
                          <Img src="images/img_arrowright.svg" alt="Arrow Right" className="my-0.5 h-[16px] w-[16px]" />
                        }
                        className="flex h-[40px] min-w-[150px] flex-row items-center justify-center gap-1.5 rounded-[12px] bg-gray-300 pl-5 pr-3 text-center text-[14px] font-medium capitalize text-white-a700"
                      >
                        send message
                      </Button>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_user_gray_500_02.svg"
                  alt="User"
                  className="h-[62px] w-[62px] self-end md:w-full md:self-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
