import { Img, Heading, Button, Text } from "../../components";
import React from "react";

export default function HomepagestaticRowThree() {
  return (
    <div className="flex">
      <div className="container-xs flex md:px-5">
        <div className="w-full rounded-[12px] border border-solid border-blue_gray-50 bg-white-a700 shadow-sm">
          <div className="h-[792px] rounded-[12px] bg-[url(/public/images/img_group_22.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="relative h-[792px] rounded-[12px] bg-[url(/public/images/img_group_23.png)] bg-cover bg-no-repeat">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[792px] flex-1 content-center md:h-auto">
                <div className="mx-auto flex flex-1 flex-col gap-10">
                  <div className="mx-[38px] flex items-center md:mx-0 md:flex-col">
                    <div className="flex w-[24%] items-start justify-center self-end md:w-full md:self-auto">
                      <Img
                        src="images/img_ph_heart_fill.svg"
                        alt="Phheartfill"
                        className="mt-[100px] h-[22px] w-[22px]"
                      />
                      <div className="flex-1 self-center px-2.5">
                        <div className="flex flex-col items-start">
                          <div className="relative z-[1] mr-7 flex rotate-[-7deg] flex-col items-end self-stretch bg-white-a700 px-[18px] py-5 shadow-3xl md:mr-0">
                            <div className="mt-4 self-stretch rounded-[1px]">
                              <Img
                                src="images/img_unsplash_7o422yg_b80.png"
                                alt="Unsplash"
                                className="h-[230px] w-full rounded-[1px] object-cover md:h-auto"
                              />
                            </div>
                            <Heading
                              size="textmd"
                              as="h1"
                              className="relative mr-[18px] mt-[-6px] !font-playfairdisplay !text-[16.14px] capitalize !text-pink-900_01 md:mr-0"
                            >
                              Celebration of union
                            </Heading>
                          </div>
                          <Img
                            src="images/img_elements_organi.png"
                            alt="Elementsorgani"
                            className="relative mr-[100px] mt-[-22px] h-[108px] w-[30%] self-end object-contain md:mr-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col px-[38px] md:self-stretch sm:px-5">
                      <Img
                        src="images/img_elements_organi_red_200.svg"
                        alt="Elementsorgani"
                        className="ml-[68px] h-[118px] w-[18%] object-contain md:ml-0"
                      />
                      <Img src="images/img_union.svg" alt="Union" className="ml-[268px] mt-[100px] h-[24px] md:ml-0" />
                      <Heading
                        size="heading6xl"
                        as="h2"
                        className="mt-6 w-[62%] text-center capitalize leading-[27px] md:w-full"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      </Heading>
                      <div className="relative mt-4 h-[112px] content-center md:h-auto">
                        <Img
                          src="images/img_settings.svg"
                          alt="Settings"
                          className="ml-[248px] h-[14px] w-[10%] object-contain md:ml-0"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start">
                          <Text
                            size="text6xl"
                            as="p"
                            className="ml-3.5 !font-playfairdisplay capitalize !text-gray-900 md:ml-0"
                          >
                            Celebrate love, share joy
                          </Text>
                          <Heading
                            size="textmd"
                            as="h3"
                            className="relative mt-[-2px] w-[62%] text-center capitalize leading-[21px] md:w-full"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end md:flex-col">
                    <Img
                      src="images/img_close_orange_a200_66x88.png"
                      alt="Close"
                      className="h-[66px] w-[6%] object-contain md:w-full"
                    />
                    <div className="flex w-[34%] items-start justify-center px-12 md:w-full md:px-5">
                      <div className="flex flex-1 rotate-[3deg] flex-col items-center gap-2 self-center px-[50px] md:px-5">
                        <div className="ml-3.5 h-[248px] self-stretch bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-4 md:ml-0 md:h-auto">
                          <Img
                            src="images/img_image_26.png"
                            alt="Imagetwentysix"
                            className="mt-9 h-[212px] w-full object-cover md:h-auto"
                          />
                        </div>
                        <Heading
                          size="textmd"
                          as="h4"
                          className="!font-playfairdisplay !text-[16.07px] capitalize !text-pink-900_01"
                        >
                          blissful journey
                        </Heading>
                      </div>
                      <Img src="images/img_close.svg" alt="Close" className="mt-[84px] h-[26px]" />
                    </div>
                    <div className="mb-[30px] flex flex-1 items-start gap-[162px] self-start px-12 md:self-stretch md:px-5 sm:self-auto">
                      <Button
                        rightIcon={
                          <Img src="images/img_arrowright.svg" alt="Arrow Right" className="my-0.5 h-[18px] w-[18px]" />
                        }
                        className="mb-52 flex h-[46px] min-w-[150px] flex-row items-center justify-center gap-1.5 rounded-[12px] bg-gradient pl-[22px] pr-3 text-center text-[16.1px] font-medium capitalize text-white-a700 sm:pl-5"
                      >
                        get started
                      </Button>
                      <Img src="images/img_user.svg" alt="User" className="h-[36px] w-[36px] self-end" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[5px] left-0 right-0 mx-[114px] my-auto flex flex-1 flex-col items-end md:mx-0">
                  <Img
                    src="images/img_leaf_2_1.png"
                    alt="Leaf2one"
                    className="mr-24 h-[160px] w-[10%] object-contain md:mr-0"
                  />
                  <div className="relative mt-[-32px] flex rotate-[-8deg] flex-col items-end gap-1 self-stretch">
                    <div className="flex h-[260px] items-end bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-5 md:h-auto">
                      <Img
                        src="images/img_image_24.png"
                        alt="Imagetwentyfour"
                        className="mt-[38px] h-[222px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <Heading
                      size="textmd"
                      as="h5"
                      className="mr-[30px] !font-playfairdisplay !text-[16.66px] capitalize !text-pink-900_01 md:mr-0"
                    >
                      the journey of forever
                    </Heading>
                  </div>
                </div>
                <div className="absolute left-0 right-0 top-0 z-[2] mx-[38px] my-auto flex flex-1 items-start justify-end md:mx-0 sm:relative sm:flex-col">
                  <div className="w-[20%] rotate-[7deg] self-center bg-white-a700 px-[18px] py-[22px] shadow-2xl sm:w-full sm:py-5">
                    <div className="flex flex-col items-start">
                      <Img
                        src="images/img_image_23.png"
                        alt="Imagetwentythre"
                        className="h-[236px] w-full object-cover md:h-auto"
                      />
                      <Heading
                        size="textmd"
                        as="h6"
                        className="relative ml-[26px] mt-[-6px] !font-playfairdisplay !text-[16.65px] capitalize !text-pink-900_01 md:ml-0"
                      >
                        cherish memories
                      </Heading>
                    </div>
                  </div>
                  <Img
                    src="images/img_close_orange_a200.svg"
                    alt="Close"
                    className="ml-1 mt-[86px] h-[48px] w-[48px] sm:ml-0 sm:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
