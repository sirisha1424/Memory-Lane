import { Img, Heading, Text } from "../../components";
import React from "react";

export default function HomepagestaticRowTwentyone() {
  return (
    <div className="flex">
      <div className="container-xs flex md:px-5">
        <div className="h-[988px] w-full rounded-[12px] border border-solid border-blue_gray-50 bg-white-a700 bg-[url(/public/images/img_frame_3.png)] bg-cover bg-no-repeat py-20 shadow-sm md:h-auto md:py-5">
          <div className="mb-20">
            <div className="flex flex-col items-center gap-2.5">
              <div className="flex w-[40%] justify-center md:w-full">
                <div className="flex w-full flex-col items-center gap-2.5">
                  <Img src="images/img_settings_red_400.svg" alt="Settings" className="h-[46px] w-[46px]" />
                  <div className="mx-8 flex items-center justify-center gap-[26px] self-stretch md:mx-0 sm:flex-col">
                    <Img
                      src="images/img_union_gray_200.svg"
                      alt="Union"
                      className="h-[26px] w-[26%] object-contain sm:w-full"
                    />
                    <Text size="text5xl" as="p" className="!font-playfairdisplay capitalize">
                      How it works
                    </Text>
                    <Img
                      src="images/img_union_gray_200_26x120.svg"
                      alt="Union"
                      className="h-[26px] w-[26%] object-contain sm:w-full"
                    />
                  </div>
                  <Text size="text2xl" as="p" className="self-stretch text-center !font-medium leading-[27px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dol.
                  </Text>
                </div>
              </div>
              <div className="flex items-start self-stretch md:flex-col">
                <Img
                  src="images/img_group_gray_300.png"
                  alt="Image"
                  className="h-[132px] w-[8%] object-contain md:w-full"
                />
                <div className="mt-[84px] flex flex-1 items-center justify-center self-end px-14 md:flex-col md:self-stretch md:px-5 sm:self-auto">
                  <div className="relative z-[22] flex w-[72%] items-start justify-center md:w-full md:flex-col">
                    <Img
                      src="images/img_vector_460_stroke.svg"
                      alt="Vector460"
                      className="relative z-[23] mt-[58px] h-[78px] w-[18%] object-contain md:w-full"
                    />
                    <div className="relative ml-[-164px] flex flex-1 self-center md:ml-0 md:flex-col md:self-stretch">
                      <Img
                        src="images/img_subtract.svg"
                        alt="Subtract"
                        className="mt-7 h-[444px] w-[36%] object-contain md:w-full"
                      />
                      <div className="mb-[42px] mt-[122px] flex w-[26%] flex-col items-center justify-center gap-[26px] md:w-full">
                        <Img
                          src="images/img_frame_1973342310.png"
                          alt="Circleimage"
                          className="mr-[34px] h-[138px] w-[138px] self-end rounded-[50%] md:mr-0"
                        />
                        <div className="ml-2 mr-2.5 h-px self-stretch bg-gray-200 md:mx-0" />
                        <div className="flex flex-col items-start gap-1 self-stretch">
                          <Heading
                            as="h2"
                            className="mt-1.5 flex h-[28px] w-[28px] items-center justify-center self-center rounded-[14px] bg-lime-700 text-center !text-white-a700"
                          >
                            1
                          </Heading>
                          <Heading size="heading3xl" as="h3" className="self-stretch text-center leading-[21px]">
                            Set up and publish your event
                          </Heading>
                        </div>
                      </div>
                      <Img
                        src="images/img_vector_461.svg"
                        alt="Vector"
                        className="mb-[348px] mt-[76px] h-[46px] w-[30%] rounded-[22px] object-contain md:w-full"
                      />
                      <div className="flex w-[32%] flex-col md:w-full">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center">
                            <Img
                              src="images/img_settings_lime_700.svg"
                              alt="Settings"
                              className="h-[96px] w-[54%] rounded-[14px] object-contain"
                            />
                            <Img
                              src="images/img_settings_lime_700_82x40.svg"
                              alt="Settings"
                              className="relative ml-[-16px] h-[82px] w-[44%] object-contain"
                            />
                          </div>
                          <div className="relative mt-[-50px] h-[426px] self-stretch bg-[url(/public/images/img_subtract.svg)] bg-cover bg-no-repeat p-9 md:h-auto sm:p-5">
                            <div className="mt-[54px] flex flex-col gap-[38px]">
                              <div className="mx-[34px] flex flex-col items-center rounded-[64px] bg-gradient shadow-lg md:mx-0">
                                <div className="mt-[18px] flex w-[86%] flex-col items-center rounded-[54px] bg-pink-900_01 p-3 md:w-full">
                                  <Img
                                    src="images/img_qr_code_line.svg"
                                    alt="Qrcodeline"
                                    className="mb-[18px] h-[64px] w-[64px]"
                                  />
                                </div>
                              </div>
                              <div className="h-px bg-gray-200" />
                              <div className="flex flex-col items-center gap-3">
                                <Heading
                                  as="h4"
                                  className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-lime-700 text-center !text-white-a700"
                                >
                                  2
                                </Heading>
                                <Heading size="heading3xl" as="h5" className="self-stretch text-center leading-6">
                                  Receive wishes and gifts from guests
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_vector_461.svg"
                        alt="Vector"
                        className="mb-[348px] mt-[70px] h-[52px] w-[28%] rounded-[14px] object-contain md:w-full"
                      />
                      <div className="mb-1.5 flex w-[38%] flex-col items-end md:w-full">
                        <Img
                          src="images/img_vector_465_stroke.svg"
                          alt="Vector465"
                          className="mr-2.5 h-[72px] w-[56%] object-contain md:mr-0"
                        />
                        <div className="relative mt-[-58px] h-[452px] self-stretch bg-[url(/public/images/img_subtract.svg)] bg-cover bg-no-repeat px-[46px] py-[62px] md:h-auto md:p-5">
                          <div className="mt-[30px] flex flex-col items-center justify-center gap-5">
                            <div className="ml-[34px] flex w-[74%] flex-col items-end self-start rounded-[70px] bg-gradient shadow-lg md:ml-0 md:w-full">
                              <div className="mt-4 flex w-[86%] flex-col items-start rounded-[58px] bg-pink-900_01 px-3.5 py-4 md:w-full">
                                <Img src="images/img_eye_fill.svg" alt="Eyefill" className="mb-4 h-[70px] w-[70px]" />
                              </div>
                            </div>
                            <div className="ml-4 mr-2.5 h-px self-stretch bg-gray-200 md:mx-0" />
                            <div className="flex flex-col items-end self-stretch">
                              <Heading
                                as="h6"
                                className="mr-[88px] mt-2 flex h-[30px] w-[30px] items-center justify-center rounded-[14px] bg-lime-700 text-center !text-white-a700 md:mr-0"
                              >
                                3
                              </Heading>
                              <Heading size="heading3xl" as="h6" className="self-stretch text-center leading-6">
                                Review event stats
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_highlight_sparkle.svg"
                    alt="Highlight"
                    className="relative mb-[138px] ml-[-56px] h-[138px] w-[138px] self-end md:ml-0 md:w-full md:self-auto"
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
