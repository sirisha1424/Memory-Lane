import { Button, Img, Text } from "../../components";
import React from "react";

export default function HomepagestaticRowThirtyone() {
  return (
    <div className="flex">
      <div className="container-xs flex md:px-5">
        <div className="w-full rounded-[12px] bg-gradient shadow-sm">
          <div className="flex items-center md:flex-col">
            <div className="flex w-[32%] items-center justify-center gap-3.5 px-[34px] md:w-full sm:flex-col sm:px-5">
              <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-[24px] bg-white-a700_1e px-2.5">
                <Img src="images/img_arrow_down.svg" />
              </Button>
              <Text size="text3xl" as="p" className="!font-playfairdisplay leading-[31px] !text-white-a700">
                <>
                  Make the day memorable…
                  <br />
                  Capture Memories & Gift Joy.
                </>
              </Text>
            </div>
            <div className="flex flex-1 md:flex-col md:self-stretch">
              <div className="relative h-[136px] flex-1 content-center px-[34px] md:h-auto md:w-full md:flex-none md:self-stretch sm:px-5">
                <div className="mx-auto flex flex-1 flex-col items-end">
                  <Img
                    src="images/img_linkedin.png"
                    alt="Linkedin"
                    className="relative z-[35] mr-[234px] h-[14px] object-cover md:mr-0"
                  />
                  <div className="relative mt-[-14px] flex flex-col items-end self-stretch">
                    <Img
                      src="images/img_close_white_a700.png"
                      alt="Close Eleven"
                      className="relative z-[34] mr-[114px] h-[72px] w-[20%] object-contain md:mr-0"
                    />
                    <div className="relative mt-[-72px] self-stretch">
                      <div className="mx-3 flex items-start md:mx-0">
                        <Button className="relative z-[29] mt-[22px] flex h-[42px] w-[42px] rotate-[-20deg] items-center justify-center rounded-[16px] bg-lime-700 px-3 shadow-md">
                          <Img src="images/img_settings_white_a700.svg" />
                        </Button>
                        <div className="relative ml-[-36px] flex w-[38%] self-center rounded-[118px] border-[1.6px] border-dashed border-lime-700 py-1 pl-[66px] pr-14 md:px-5">
                          <Img src="images/img_user_lime_700.svg" alt="User" className="mb-[46px] h-[46px] w-[46px]" />
                        </div>
                      </div>
                      <div className="relative z-30 mt-[-96px] flex items-center md:flex-col">
                        <Img
                          src="images/img_settings_white_a700_78x98.png"
                          alt="Settings Eleven"
                          className="relative z-[33] h-[78px] w-[16%] self-end object-contain md:w-full md:self-auto"
                        />
                        <div className="relative ml-[-38px] flex flex-1 items-center justify-center md:ml-0 md:self-stretch sm:flex-col">
                          <div className="relative z-[32] flex rotate-[-9deg] self-end bg-white-a700 px-2 shadow-md sm:self-auto">
                            <Img
                              src="images/img_image_39.png"
                              alt="Imagethirtynine"
                              className="mt-4 h-[98px] w-[98%] object-contain"
                            />
                          </div>
                          <div className="relative ml-[-2px] flex flex-1 items-center sm:ml-0 sm:self-stretch">
                            <div className="relative z-[31] w-[26%] bg-white-a700 px-2 shadow-md">
                              <Img
                                src="images/img_image_38.png"
                                alt="Imagethirtyeigh"
                                className="mt-[18px] h-[108px] w-[108px] object-cover"
                              />
                            </div>
                            <div className="relative ml-[-36px] flex w-[52%] justify-end self-end rounded-[118px] border-[1.6px] border-dashed border-lime-700 px-[18px]">
                              <Button className="mb-3.5 flex h-[50px] w-[50px] rotate-[8deg] items-center justify-center rounded-[24px] bg-lime-700 px-2 shadow-md">
                                <Img src="images/img_mdi_gold_white_a700_50x50.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-px right-[30%] z-[36] m-auto flex h-[116px] rotate-[12deg] items-end bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-2.5 md:h-auto">
                  <Img
                    src="images/img_image_40.png"
                    alt="Imageforty"
                    className="mt-5 h-[96px] w-[98%] object-contain"
                  />
                </div>
              </div>
              <div className="flex h-[136px] w-[28%] items-center justify-end bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat px-10 py-12 md:h-auto md:w-full md:py-5 sm:p-5">
                <Button
                  rightIcon={
                    <Img
                      src="images/img_arrow_right_gray_900.svg"
                      alt="Arrow Right"
                      className="my-0.5 h-[16px] w-[16px]"
                    />
                  }
                  className="flex h-[40px] min-w-[130px] flex-row items-center justify-center gap-1.5 rounded-[12px] border border-solid border-gray-200 bg-white-a700 pl-[19px] pr-[11px] text-center text-[14px] font-medium capitalize text-gray-900"
                >
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
