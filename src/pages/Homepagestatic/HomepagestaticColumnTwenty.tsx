import { Img, Heading, Text, Button } from "../../components";
import ImageGrid from "../../components/ImageGrid";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

export default function HomepagestaticColumnTwenty() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs md:px-5">
        <div className="rounded-[12px] border border-solid border-blue_gray-50 bg-white-a700 shadow-sm">
          <div className="relative h-[2066px] content-end rounded-[12px] md:h-auto">
            <div className="absolute left-0 right-0 top-0 m-auto flex-1">
              <div className="flex flex-col items-start">
                <div className="h-[932px] self-stretch bg-[url(/public/images/img_group_20.png)] bg-cover bg-no-repeat px-7 py-20 md:h-auto md:py-5 sm:p-5">
                  <div className="mb-[34px]">
                    <div className="mx-2.5 flex items-center gap-7 md:mx-0 md:flex-col">
                      <Img
                        src="images/img_group_18.svg"
                        alt="Image"
                        className="h-[20px] w-[36%] object-contain md:w-full"
                      />
                      <Heading
                        size="heading8xl"
                        as="h2"
                        className="w-[28%] text-center !font-playfairdisplay !font-normal capitalize leading-[46px] md:w-full"
                      >
                        <span className="text-blue_gray-700">
                          <>
                            what can you do with
                            <br />
                          </>
                        </span>
                        <span className="text-pink-900_01">memory lane</span>
                      </Heading>
                      <Img
                        src="images/img_group_19.svg"
                        alt="Image"
                        className="h-[20px] w-[36%] object-contain md:w-full"
                      />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-5 md:flex-col">
                      <Text
                        size="text2xl"
                        as="p"
                        className="ml-[382px] w-[60%] text-center !font-medium leading-[27px] !text-lime-700 md:ml-0 md:w-full"
                      >
                        <>
                          Make Your Wedding Rememberable
                          <br />
                          Discover The Benefits
                        </>
                      </Text>
                      <Img
                        src="images/img_user_gray_500_01.svg"
                        alt="User"
                        className="mt-[38px] h-[84px] w-[84px] self-end md:w-full md:self-auto"
                      />
                    </div>
                    <div className="ml-[68px] mr-[76px] mt-[78px] flex items-center md:mx-0 md:flex-col">
                      <div className="relative h-[424px] flex-1 md:w-full md:flex-none md:self-stretch">
                        <div className="absolute bottom-[0.43px] left-0 right-0 mx-[26px] my-auto flex flex-1 items-start md:relative md:mx-0 md:flex-col">
                          <div className="flex flex-1 items-center md:self-stretch sm:flex-col">
                            <div className="relative z-[4] mb-[72px] w-[12%] rotate-[-18deg] self-end rounded-sm bg-blue_gray-50 shadow-3xl sm:w-full sm:self-auto">
                              <Img
                                src="images/img_image_32.png"
                                alt="Imagethirtytwo"
                                className="h-[66px] w-full rounded-sm object-cover md:h-auto"
                              />
                            </div>
                            <div className="relative ml-[-54px] h-[402px] flex-1 sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
                              <div className="absolute bottom-[-1px] left-0 right-0 m-auto flex flex-1 flex-col items-end">
                                <div className="flex flex-col items-end self-stretch">
                                  <div className="flex flex-col items-start self-stretch">
                                    <div className="flex gap-[38px] self-stretch rounded-[12px] bg-gradient4 px-2.5 py-1.5 shadow-lg md:flex-row">
                                      <Suspense fallback={<div>Loading feed...</div>}>
                                        {[...Array(4)].map((d, index) => (
                                          <ImageGrid key={"listgridone" + index} />
                                        ))}
                                      </Suspense>
                                    </div>
                                    <Img
                                      src="images/img_grid.svg"
                                      alt="Grid"
                                      className="relative ml-9 mt-[-8px] h-[14px] w-[14px] md:ml-0"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_grid.svg"
                                    alt="Grid"
                                    className="relative mr-[52px] mt-[-14px] h-[14px] w-[14px] md:mr-0"
                                  />
                                </div>
                                <Img
                                  src="images/img_grid.svg"
                                  alt="Grid"
                                  className="relative mt-[-14px] h-[14px] w-[14px]"
                                />
                              </div>
                              <div className="absolute bottom-[25px] left-0 right-0 mx-9 my-auto flex flex-1 flex-col items-start gap-3 md:mx-0">
                                <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Grid Eleven" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Grid Thirteen" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Grid Fifteen" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Gridteen" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Gridteen" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Grid Twentyone" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Grid Twentyfive" className="h-[14px] w-[14px]" />
                                <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-[14px]" />
                              </div>
                              <div className="absolute bottom-[25px] left-0 right-0 m-auto flex flex-1 flex-col gap-3">
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Grid Twentynine" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Grid Thirtyone" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Grid Thirtyfive" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Grid" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Grid Thirtynine" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Grid Fortyone" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Grid Fortythree" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Grid Fortyfive" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Grid Fortyseven" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Grid Fortynine" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Grid Fiftyone" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Grid Fiftythree" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Grid Fiftyfive" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Grid Fiftyseven" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Grid Fiftynine" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Gridtyone" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Gridtythree" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Gridtyfive" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Gridtyseven" className="h-[14px] w-[14px]" />
                                </div>
                                <div className="flex justify-end gap-[38px]">
                                  <Img src="images/img_grid.svg" alt="Gridtynine" className="h-[14px] w-[14px]" />
                                  <Img src="images/img_grid.svg" alt="Gridtyone" className="h-[14px] w-[14px]" />
                                </div>
                              </div>
                              <Img
                                src="images/img_image_27.png"
                                alt="Imagetwentyseve"
                                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[396px] w-[64%] object-contain"
                              />
                              <div className="absolute left-0 right-0 top-[13%] mx-7 my-auto flex flex-1 items-start justify-end md:mx-0">
                                <Img
                                  src="images/img_signal.svg"
                                  alt="Signal"
                                  className="relative z-[3] mt-1.5 h-[30px] w-[30px] self-end"
                                />
                                <Img src="images/img_signal.svg" alt="Signal" className="h-[18px] w-[18px]" />
                              </div>
                            </div>
                          </div>
                          <div className="relative z-[5] ml-[-60px] mt-2.5 flex w-[30%] flex-col items-start gap-32 md:ml-0 md:w-full md:gap-24 sm:gap-16">
                            <div className="ml-[54px] w-[40%] rotate-[-14deg] rounded-sm bg-blue_gray-50 shadow-md md:ml-0 md:w-full">
                              <Img
                                src="images/img_image_31.png"
                                alt="Imagethirtyone"
                                className="h-[60px] w-full rounded-sm object-cover md:h-auto"
                              />
                            </div>
                            <div className="w-[50%] rotate-[18deg] rounded bg-blue_gray-50 shadow-6xl md:w-full">
                              <Img
                                src="images/img_image_28.png"
                                alt="Imagetwentyeigh"
                                className="h-[100px] w-full rounded object-cover md:h-auto"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute left-0 top-0 m-auto w-[14%] rotate-[-13deg] rounded bg-blue_gray-50 shadow-5xl">
                          <Img
                            src="images/img_image_30.png"
                            alt="Imagethirty"
                            className="h-[104px] w-full rounded object-cover md:h-auto"
                          />
                        </div>
                      </div>
                      <div className="mb-[54px] flex w-[42%] flex-col gap-7 self-end md:w-full md:self-auto">
                        <div className="flex flex-col items-start">
                          <Heading size="heading6xl" as="h3" className="capitalize">
                            Instant Wishes and Memories
                          </Heading>
                          <Text size="text5xl" as="p" className="!font-playfairdisplay capitalize !text-pink-900_01">
                            Capture the Moment, Instantly.
                          </Text>
                        </div>
                        <div className="mr-4 flex flex-col gap-4 md:mr-0">
                          <div className="flex items-center gap-2 sm:flex-col">
                            <Img
                              src="images/img_signal_lime_700.svg"
                              alt="Signal"
                              className="h-[16px] w-[16px] sm:w-full"
                            />
                            <Heading size="textxl" as="h4">
                              Write personalised messages for the couple
                            </Heading>
                          </div>
                          <div className="flex items-center justify-center gap-2 sm:flex-col">
                            <Img
                              src="images/img_signal_lime_700.svg"
                              alt="Signal"
                              className="h-[16px] w-[16px] sm:w-full"
                            />
                            <Heading size="textxl" as="h5">
                              Share special moments together with photos and videos
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_elements_organi_red_400.svg"
                  alt="Elementsorgani"
                  className="relative z-[6] ml-[22px] mt-[-48px] h-[112px] w-[112px] md:ml-0"
                />
              </div>
              <div className="relative z-[7] mt-[-64px] h-[932px] bg-[url(/public/images/img_group_554.png)] bg-cover bg-no-repeat p-[38px] md:h-auto sm:p-5">
                <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
                  <div className="mx-[30px] flex items-center gap-9 md:mx-0 md:flex-col">
                    <div className="flex w-full flex-col gap-[18px]">
                      <div className="flex flex-col items-start">
                        <Heading size="heading4xl" as="h6" className="capitalize">
                          Digital Gifting Made Easy
                        </Heading>
                        <Text size="text5xl" as="p" className="!font-playfairdisplay capitalize !text-pink-900_01">
                          Gifts That Last a Lifetime.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-center gap-2 sm:flex-col">
                          <Img
                            src="images/img_signal_lime_700.svg"
                            alt="Signal"
                            className="h-[16px] w-[16px] sm:w-full"
                          />
                          <Heading size="textxl" as="p">
                            Gift the couple Digital Gold, A timeless gift that appreciates in value
                          </Heading>
                        </div>
                        <div className="flex items-center justify-center gap-2 sm:flex-col">
                          <Img
                            src="images/img_signal_lime_700.svg"
                            alt="Signal Eleven"
                            className="h-[16px] w-[16px] sm:w-full"
                          />
                          <Heading size="textxl" as="p">
                            Or thank them with Digital Money, convenient and meaningful
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[384px] w-full content-center md:h-auto">
                      <div className="mx-auto flex flex-1 flex-col items-end">
                        <div className="flex flex-col items-start self-stretch">
                          <Button className="relative z-[12] ml-[182px] flex h-[58px] w-[58px] rotate-[-4deg] items-center justify-center rounded-[28px] border-[2.06px] border-solid border-lime-700 bg-gray-100_01 px-3 shadow-3xl md:ml-0">
                            <Img src="images/img_ph_coins.svg" />
                          </Button>
                          <div className="relative mt-[-30px] flex items-center justify-center self-stretch sm:flex-col">
                            <div className="relative z-[11] mb-[52px] flex rotate-[-20deg] flex-col items-center self-end rounded-[12px] bg-gray-100_01 p-4 shadow-3xl sm:self-auto">
                              <Img
                                src="images/img_ic_baseline_currency_rupee.svg"
                                alt="Icbaseline"
                                className="h-[46px] w-[46px]"
                              />
                            </div>
                            <div className="relative ml-[-16px] h-[300px] w-[78%] content-center rounded-[12px] bg-gradient1 shadow-lg md:h-auto sm:ml-0 sm:w-full">
                              <div className="mx-auto flex flex-1 items-center sm:flex-col">
                                <Img
                                  src="images/img_ellipse_1193.png"
                                  alt="Image"
                                  className="relative z-[8] h-[148px] w-[34%] rotate-[15deg] self-end object-contain sm:w-full sm:self-auto"
                                />
                                <div className="relative ml-[-184px] flex flex-1 items-center sm:ml-0 sm:self-stretch">
                                  <div className="flex w-full rotate-[-5deg] flex-col items-start rounded-[14px] border-[1.28px] border-solid border-lime-700 bg-gray-100_01 px-4 py-3.5 shadow-7xl">
                                    <Img
                                      src="images/img_mdi_gold.svg"
                                      alt="Mdigold"
                                      className="mt-3.5 h-[32px] w-[32px]"
                                    />
                                    <Text
                                      size="text4xl"
                                      as="p"
                                      className="mt-1.5 !font-dmserifdisplay !text-[35.75px] tracking-[0.71px] !text-lime-700"
                                    >
                                      5.027gm
                                    </Text>
                                    <Text
                                      size="textlg"
                                      as="p"
                                      className="ml-2 !font-mulish !text-[17.87px] tracking-[0.09px] !text-lime-700 md:ml-0"
                                    >
                                      Digital Gold
                                    </Text>
                                  </div>
                                  <Img
                                    src="images/img_ellipse_1192.png"
                                    alt="Image"
                                    className="relative ml-[-6px] h-[300px] w-full rotate-[15deg] object-cover md:h-auto"
                                  />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 top-0 z-[9] m-auto flex h-max flex-1 items-center justify-center sm:relative sm:flex-col">
                                <Img
                                  src="images/img_ellipse_1194.png"
                                  alt="Image"
                                  className="relative z-10 h-[300px] w-[48%] rotate-[15deg] object-contain sm:w-full"
                                />
                                <div className="mb-[58px] flex w-[44%] flex-col items-start justify-center self-end rounded-[14px] border-[1.28px] border-solid border-lime-700 bg-gray-100_01 px-3.5 py-3 shadow-7xl sm:w-full sm:self-auto">
                                  <div className="flex flex-col items-start self-stretch px-2.5">
                                    <Heading
                                      size="heading6xl"
                                      as="h5"
                                      className="!font-raleway !text-[20.43px] !font-bold tracking-[0.41px] !text-lime-700"
                                    >
                                      ₹
                                    </Heading>
                                  </div>
                                  <Text
                                    size="text4xl"
                                    as="p"
                                    className="mt-2.5 !font-dmserifdisplay !text-[35.75px] tracking-[0.71px] !text-lime-700"
                                  >
                                    ₹1,00,000
                                  </Text>
                                  <Text
                                    size="textlg"
                                    as="p"
                                    className="mt-1 !font-mulish !text-[17.87px] tracking-[0.09px] !text-lime-700"
                                  >
                                    Digital Money
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative z-[13] mr-[142px] mt-[-32px] flex w-[16%] rotate-[4deg] flex-col items-center rounded-[36px] border-[2.64px] border-solid border-lime-700 bg-gray-100_01 p-2.5 shadow-3xl md:mr-0 md:w-full">
                          <Img
                            src="images/img_mdi_gold_lime_700.svg"
                            alt="Mdigold"
                            className="mb-2 h-[42px] w-[42px]"
                          />
                        </div>
                      </div>
                      <div className="absolute right-px top-0 z-[14] m-auto w-[14%] rotate-[8deg] rounded-[12px] bg-gray-100_01 p-4 shadow-3xl">
                        <Img
                          src="images/img_fluent_gift_card_24_filled.svg"
                          alt="Fluentgift"
                          className="h-[50px] w-[50px]"
                        />
                      </div>
                      <Img
                        src="images/img_signal.svg"
                        alt="Signal Thirteen"
                        className="absolute bottom-[39%] right-3.5 m-auto h-[18px] w-[18px]"
                      />
                      <Img
                        src="images/img_close_lime_700.svg"
                        alt="Close"
                        className="absolute left-[29.25px] top-[33%] m-auto h-[30px] w-[30px]"
                      />
                    </div>
                  </div>
                  <div className="ml-[22px] flex items-center md:ml-0 md:flex-col">
                    <div className="mb-2.5 flex w-full items-start justify-center gap-[22px] self-end md:self-auto sm:flex-col">
                      <div className="flex self-center rounded-[12px] bg-gradient2 shadow-lg">
                        <Img src="images/img_mask_group.svg" alt="Image" className="h-[298px] w-full md:h-auto" />
                      </div>
                      <Img
                        src="images/img_elements_organic_shape_circle.png"
                        alt="Elements"
                        className="mt-2.5 h-[84px] w-[84px] object-cover sm:mt-0 sm:w-full"
                      />
                    </div>
                    <div className="flex w-full flex-col items-end gap-[100px] md:gap-[75px] sm:gap-[50px]">
                      <Img
                        src="images/img_airplane.svg"
                        alt="Airplane"
                        className="mr-[52px] h-[64px] w-[64px] md:mr-0"
                      />
                      <div className="flex w-[94%] flex-col gap-3.5 md:w-full">
                        <div className="flex flex-col items-start">
                          <Heading size="heading4xl" as="h6" className="capitalize">
                            Post-Event Dashboard
                          </Heading>
                          <Text size="text5xl" as="p" className="!font-playfairdisplay capitalize !text-pink-900_01">
                            Cherish Every Memory.
                          </Text>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-center gap-2 md:flex-col">
                            <Img
                              src="images/img_signal_lime_700.svg"
                              alt="Signal Fifteen"
                              className="h-[16px] w-[16px] md:w-full"
                            />
                            <Heading size="textxl" as="p">
                              View Wishes and Messages and read through the heartfelt messages
                            </Heading>
                          </div>
                          <div className="flex items-center justify-center gap-2 md:flex-col">
                            <Img
                              src="images/img_signal_lime_700.svg"
                              alt="Signal"
                              className="h-[16px] w-[16px] md:w-full"
                            />
                            <Heading size="textxl" as="p">
                              Browse Photos and Videos to relive the moments captured by guests
                            </Heading>
                          </div>
                          <div className="flex items-center justify-center gap-2 sm:flex-col">
                            <Img
                              src="images/img_signal_lime_700.svg"
                              alt="Signalteen"
                              className="h-[16px] w-[16px] sm:w-full"
                            />
                            <Heading size="textxl" as="p">
                              Track Gifts, see all the digital gold and monetary gifts received
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-[15] mx-auto flex-1">
              <div className="relative z-[16] mx-[66px] flex items-center md:mx-0 md:flex-col">
                <Img
                  src="images/img_settings_deep_purple_300_01.svg"
                  alt="Settings"
                  className="mb-1.5 h-[68px] w-[6%] self-end object-contain md:w-full md:self-auto"
                />
                <div className="relative ml-[-22px] flex w-[38%] justify-center rounded-md bg-gray-50 p-1.5 shadow-lg md:ml-0 md:w-full">
                  <div className="mb-[318px] flex w-full items-center justify-center gap-1.5 rounded border-[0.35px] border-solid border-gray-200 bg-white-a700 p-1.5 shadow-xs">
                    <Button className="flex h-[14px] min-w-[30px] flex-row items-center justify-center rounded border-[0.35px] border-solid border-blue_gray-50 bg-white-a700 pl-[11.65px] pr-[5.65px] text-center text-[4.95px] font-medium capitalize text-gray-900">
                      Back
                    </Button>
                    <div className="h-[0.35px] w-px rotate-[-90deg] bg-gray-200" />
                    <div className="flex flex-1">
                      <Img src="images/img_close_deep_orange_300.svg" alt="Close" className="h-[8px] w-[8px]" />
                      <Heading size="headings" as="p" className="!text-[5.66px]">
                        Raman and Vaishali
                      </Heading>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-1">
                      <div className="flex flex-1 items-center justify-center gap-[26px] rounded border-[0.35px] border-solid border-blue_gray-50 bg-white-a700 shadow-4xl">
                        <Text as="p" className="!text-[4.95px] capitalize !text-blue_gray-200">
                          Search Attendees, events…
                        </Text>
                        <Img src="images/img_group_blue_gray_200.svg" alt="Image" className="h-[4px] w-[4px]" />
                      </div>
                      <Button className="flex h-[14px] min-w-[42px] flex-row items-center justify-center rounded bg-gradient pl-1.5 pr-2.5 text-center text-[4.95px] font-medium capitalize text-white-a700">
                        New event
                      </Button>
                      <div className="flex flex-col items-center rounded border-[0.35px] border-solid border-gray-200 bg-white-a700 p-1">
                        <Img src="images/img_group_gray_900.svg" alt="Image" className="h-[4px] w-[4px]" />
                      </div>
                      <div className="flex w-[10%] items-center justify-center gap-0.5 rounded">
                        <Text
                          as="p"
                          className="flex h-[12px] w-[12px] items-center justify-center rounded-md bg-purple-700 text-center !font-generalsans !text-[4.95px] !font-medium !text-white-a700"
                        >
                          RG
                        </Text>
                        <Img
                          src="images/img_group_blue_gray_200_4x4.png"
                          alt="Image"
                          className="h-[4px] w-[4px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_dirty_rustic_wh.png"
                alt="Dirtyrusticwh"
                className="relative mt-[-38px] h-[200px] w-full object-cover opacity-20 md:h-auto"
              />
            </div>
            <div className="absolute bottom-[8%] left-0 right-0 z-[17] mx-[62px] my-auto flex flex-1 items-start md:relative md:mx-0 md:flex-col">
              <div className="relative z-[21] mt-6 flex w-[10%] items-center justify-center gap-2 rounded-md bg-gradient shadow-md md:w-full">
                <div className="flex flex-1 flex-col items-start gap-1 self-end">
                  <div className="flex justify-center gap-1 self-stretch">
                    <Img src="images/img_user_gray_50_01.svg" alt="User" className="h-[12px] w-[12px]" />
                    <Heading size="headinglg" as="p" className="!text-[7.82px] !text-gray-50_01">
                      Total Guests
                    </Heading>
                  </div>
                  <Heading size="heading7xl" as="h5" className="!text-[22.35px] tracking-[-0.67px] !text-white-a700">
                    1,000
                  </Heading>
                </div>
                <Img
                  src="images/img_mandala.png"
                  alt="Mandala"
                  className="mb-1 h-[56px] w-[48%] object-contain opacity-0.24"
                />
              </div>
              <div className="relative ml-[-94px] flex flex-1 items-start self-center md:ml-0 md:self-stretch sm:flex-col">
                <div className="flex w-[38%] self-center rounded border-[0.35px] border-solid border-blue_gray-50 bg-white-a700 shadow-xl sm:w-full">
                  <div className="mb-2 flex w-full flex-col gap-1">
                    <div className="border-b border-solid border-blue_gray-50 p-1.5">
                      <div className="flex flex-col items-start gap-0.5">
                        <div className="flex self-stretch">
                          <Heading size="headings" as="p" className="!text-[5.66px]">
                            Analytics
                          </Heading>
                          <div className="ml-1.5 h-[0.35px] w-px rotate-[-90deg] bg-gray-200" />
                          <Heading size="headings" as="p" className="ml-1 !text-[5.66px] !text-blue_gray-200">
                            Event Details
                          </Heading>
                          <div className="ml-1.5 h-[0.35px] w-px rotate-[-90deg] bg-gray-200" />
                          <Heading size="headings" as="p" className="ml-1 !text-[5.66px] !text-blue_gray-200">
                            Plan Details
                          </Heading>
                        </div>
                        <div className="h-px w-[18px] rounded-[1px] bg-blue_gray-700" />
                      </div>
                    </div>
                    <div className="mx-[54px] flex items-center gap-2 md:mx-0 sm:flex-col">
                      <div className="flex flex-1 items-center justify-end gap-[9px] sm:self-stretch">
                        <div className="flex w-[44%] flex-col items-start justify-center rounded bg-gradient4 shadow-md">
                          <div className="relative z-[18] flex items-start self-stretch">
                            <div className="mt-1.5 flex flex-1 justify-center">
                              <Img src="images/img_group.svg" alt="Image" className="h-[10px] w-[10px]" />
                              <Heading size="headingmd" as="p" className="!text-[6.87px] !text-white-a700">
                                Wishes & Memories
                              </Heading>
                            </div>
                            <Img
                              src="images/img_mandala_50x40.png"
                              alt="Mandala"
                              className="relative ml-[-8px] h-[50px] w-[32%] self-center object-contain opacity-0.12"
                            />
                          </div>
                          <Heading
                            size="heading5xl"
                            as="h6"
                            className="relative ml-1.5 mt-[-24px] !text-[19.64px] tracking-[-0.59px] !text-white-a700 md:ml-0"
                          >
                            1,000
                          </Heading>
                        </div>
                        <div className="flex w-[38%] items-center justify-center rounded bg-gradient5 shadow-md">
                          <div className="flex flex-1 flex-col items-start self-end">
                            <div className="flex justify-center gap-0.5 self-stretch">
                              <Img src="images/img_contrast.svg" alt="Contrast" className="h-[10px] w-[10px]" />
                              <Heading size="headings" as="p" className="!text-[5.93px] !text-white-a700">
                                Media & Gallery
                              </Heading>
                            </div>
                            <Heading
                              size="heading3xl"
                              as="h6"
                              className="!text-[16.96px] !font-bold tracking-[-0.51px] !text-white-a700"
                            >
                              120
                            </Heading>
                          </div>
                          <Img
                            src="images/img_mandala_42x42.png"
                            alt="Mandala"
                            className="relative ml-[-4px] h-[42px] w-[42px] object-cover opacity-0.08"
                          />
                        </div>
                      </div>
                      <div className="flex w-[26%] items-start justify-center gap-1 rounded bg-gradient3 shadow-md sm:w-full">
                        <div className="mt-1.5 flex flex-1 justify-center">
                          <div className="flex flex-col items-end justify-center">
                            <Heading
                              size="headingmd"
                              as="p"
                              className="!text-[6.33px] !font-bold tracking-[0.13px] !text-white-a700"
                            >
                              ₹
                            </Heading>
                          </div>
                          <Heading size="headings" as="p" className="!text-[5.53px] !text-white-a700">
                            Digital Money
                          </Heading>
                        </div>
                        <Img
                          src="images/img_mandala_40x40.png"
                          alt="Mandala"
                          className="h-[40px] w-[40px] self-center object-cover opacity-0.08"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <div className="ml-2 mr-5 flex justify-center md:mx-0">
                        <Heading size="headingxs" as="p" className="!text-[4.24px] !text-blue_gray-200">
                          Attendee Name
                        </Heading>
                        <Heading size="headingxs" as="p" className="ml-[100px] !text-[4.24px] !text-blue_gray-200">
                          City
                        </Heading>
                        <div className="flex flex-1 flex-wrap justify-between gap-5 px-[60px] md:px-5">
                          <Heading size="headingxs" as="p" className="ml-7 !text-[4.24px] !text-blue_gray-200 md:ml-0">
                            Digital Money
                          </Heading>
                          <Heading size="headingxs" as="p" className="!text-[4.24px] !text-blue_gray-200">
                            Digital Gold
                          </Heading>
                          <Heading size="headingxs" as="p" className="!text-[4.24px] !text-blue_gray-200">
                            Media
                          </Heading>
                        </div>
                        <Heading size="headingxs" as="p" className="!text-[4.24px] !text-blue_gray-200">
                          Action
                        </Heading>
                      </div>
                      <div className="relative mx-2 h-[30px] content-center md:mx-0 md:h-auto">
                        <div className="mx-auto h-[0.35px] w-full flex-1 bg-gray-200" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                          <div className="flex flex-col gap-4">
                            <UserProfile />
                            <UserProfile />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="relative z-[19] bg-gray-50 p-1.5">
                          <div className="flex flex-col gap-1.5">
                            <div className="flex justify-center sm:flex-col">
                              <Text as="p" className="!text-[4.95px] !font-medium">
                                Ms. Mahima Yadav
                              </Text>
                              <Text as="p" className="ml-[88px] !text-[4.95px] sm:ml-0">
                                Jamnagar
                              </Text>
                              <div className="flex flex-1 justify-end sm:self-stretch">
                                <Text as="p" className="!text-[4.95px]">
                                  ₹500
                                </Text>
                                <div className="flex flex-wrap items-center">
                                  <Text as="p" className="!text-[4.95px]">
                                    0.230gm
                                  </Text>
                                  <Text as="p" className="ml-[52px] !text-[4.95px]">
                                    12 Items
                                  </Text>
                                  <Text as="p" className="ml-[54px] !text-[4.95px]">
                                    Details
                                  </Text>
                                  <Img
                                    src="images/img_group_blue_gray_700.svg"
                                    alt="Image Ten"
                                    className="h-[4px] w-[4px]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-[0.35px] bg-gray-200" />
                            <div className="flex items-center justify-center gap-2 sm:flex-col">
                              <div className="flex flex-1 flex-col items-start gap-0.5 sm:self-stretch">
                                <Text as="p" className="!text-[4.95px] !font-medium">
                                  Message
                                </Text>
                                <Text as="p" className="w-full !text-[4.95px] leading-[150%]">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                  mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                  dolore eu fugiat nulla pariatur.
                                </Text>
                              </div>
                              <div className="h-[62px] w-px bg-gray-200 sm:h-px sm:w-[62px]" />
                              <div className="flex w-[36%] flex-col gap-0.5 sm:w-full">
                                <div className="flex">
                                  <Text as="p" className="!text-[4.95px] !font-medium">
                                    Media
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-1">
                                  <div className="flex justify-center gap-1">
                                    <Img
                                      src="images/img_frame_1973341946.png"
                                      alt="Image Eleven"
                                      className="h-[16px] w-[16px] rounded-[1px] object-cover"
                                    />
                                    <Img
                                      src="images/img_frame_1973341947.png"
                                      alt="Image Twelve"
                                      className="h-[16px] w-[16px] rounded-[1px] object-cover"
                                    />
                                    <Img
                                      src="images/img_frame_1973341948.png"
                                      alt="Image Thirteen"
                                      className="h-[16px] w-[16px] rounded-[1px] object-cover"
                                    />
                                    <Img
                                      src="images/img_frame_1973341949.png"
                                      alt="Imageteen"
                                      className="h-[16px] w-[16px] rounded-[1px] object-cover"
                                    />
                                    <Img
                                      src="images/img_frame_1973341950.png"
                                      alt="Image Fifteen"
                                      className="h-[16px] w-[16px] rounded-[1px] object-cover"
                                    />
                                    <div className="flex h-[16px] flex-1 flex-col items-center rounded-[1px] bg-[url(/public/images/img_frame_1973341951.png)] bg-cover bg-no-repeat p-1 md:h-auto">
                                      <Img
                                        src="images/img_group_white_a700.svg"
                                        alt="Imageteen"
                                        className="h-[8px] w-[8px]"
                                      />
                                    </div>
                                    <Img
                                      src="images/img_frame_1973341952.png"
                                      alt="Imageteen"
                                      className="h-[16px] w-[16px] rounded-[1px] object-cover"
                                    />
                                    <div className="flex h-[16px] flex-1 flex-col items-center rounded-[1px] bg-[url(/public/images/img_frame_1973341953.png)] bg-cover bg-no-repeat p-1 md:h-auto">
                                      <Img
                                        src="images/img_group_white_a700.svg"
                                        alt="Imageeen"
                                        className="h-[8px] w-[8px]"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex">
                                    <div className="flex h-[16px] flex-col items-center rounded-[1px] bg-[url(/public/images/img_frame_1973341954.png)] bg-cover bg-no-repeat p-1 md:h-auto">
                                      <Img
                                        src="images/img_group_white_a700.svg"
                                        alt="Imageteen"
                                        className="h-[8px] w-[8px]"
                                      />
                                    </div>
                                    <div className="flex h-[16px] flex-col items-center rounded-[1px] bg-[url(/public/images/img_frame_1973341955.png)] bg-cover bg-no-repeat p-1 md:h-auto">
                                      <Img
                                        src="images/img_group_white_a700.svg"
                                        alt="Image Twenty"
                                        className="h-[8px] w-[8px]"
                                      />
                                    </div>
                                    <Img
                                      src="images/img_frame_1973341956.png"
                                      alt="Image Twentyone"
                                      className="h-[16px] w-[16px] rounded-[1px] object-cover"
                                    />
                                    <Img
                                      src="images/img_frame_1973341957.png"
                                      alt="Image Twentytwo"
                                      className="h-[16px] w-[16px] rounded-[1px] object-cover"
                                    />
                                  </div>
                                </div>
                                <div className="flex justify-between gap-5">
                                  <div className="flex w-[22%] justify-center rounded-sm">
                                    <div className="flex w-full justify-center gap-0.5 rounded-sm">
                                      <Img
                                        src="images/img_group_blue_gray_700_4x4.svg"
                                        alt="Image"
                                        className="h-[4px] w-[4px]"
                                      />
                                      <Text as="p" className="!text-[4.95px] !font-medium underline">
                                        Download All
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex w-[10%] justify-center rounded-sm">
                                    <div className="flex w-full justify-center gap-0.5 rounded-sm">
                                      <Img src="images/img_group_4x4.svg" alt="Image" className="h-[4px] w-[4px]" />
                                      <Text
                                        as="p"
                                        className="!text-[4.95px] !font-medium !text-blue_gray-200 underline"
                                      >
                                        Help
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative mb-[98px] ml-2 mr-8 mt-[-98px] h-[0.35px] bg-gray-200 md:mx-0" />
                      </div>
                      <div className="mx-2 mb-2 flex flex-col gap-4 md:mx-0">
                        <UserProfile1 />
                        <div className="h-[0.35px] w-[474px] bg-gray-200" />
                        <UserProfile1 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-20 ml-[-46px] mt-9 flex w-[6%] items-center justify-center rounded bg-gradient1 shadow-md sm:ml-0 sm:w-full">
                  <div className="flex flex-1 flex-col items-center gap-0.5 self-end">
                    <div className="flex self-stretch">
                      <Img src="images/img_mdi_gold_white_a700.svg" alt="Mdigold" className="h-[8px] w-[8px]" />
                      <Heading size="headingxs" as="p" className="!text-[4.95px] !text-white-a700">
                        Digital Gold
                      </Heading>
                    </div>
                    <Heading size="headingxl" as="p" className="!text-[12.72px] tracking-[-0.38px] !text-white-a700">
                      <span className="text-[14.14px] font-bold tracking-[-0.42px]">5.012</span>
                      <span className="text-[8.48px] font-medium tracking-[-0.25px]">gm</span>
                    </Heading>
                  </div>
                  <Img
                    src="images/img_mandala_36x36.png"
                    alt="Mandala"
                    className="relative ml-[-2px] h-[36px] w-[36px] object-cover opacity-0.08"
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
