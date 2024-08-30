import { Img, Button, Heading, Text, Slider } from "../../components";
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function HomepagestaticRowTwentyfour() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <div className="flex">
      <div className="container-xs flex md:px-5">
        <div className="relative h-[1004px] w-full rounded-[12px] border border-solid border-blue_gray-50 bg-white-a700 bg-[url(/public/images/img_frame_4.png)] bg-cover bg-no-repeat shadow-sm">
          <div className="absolute bottom-[1.86px] left-0 right-0 m-auto h-[926px] w-full md:h-auto">
            <Img
              src="images/img_vector.svg"
              alt="Vector"
              className="absolute bottom-[30%] right-[23%] m-auto h-[130px] w-[12%] object-contain"
            />
            <Img
              src="images/img_frame_4_flower.png"
              alt="Image Twentysix"
              className="ml-[362px] mt-[282px] h-[68px] w-[8%] object-contain md:ml-0"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col gap-1.5">
              <div className="ml-10 md:ml-0">
                <div className="flex flex-col items-center">
                  <div className="mr-10 self-stretch md:mr-0">
                    <div className="flex flex-col items-center gap-3.5">
                      <div className="flex items-center self-stretch md:flex-col">
                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                          <Img
                            src="images/img_group_18_gray_200.svg"
                            alt="Image"
                            className="h-[20px] w-[66%] object-contain md:w-full"
                          />
                          <div className="flex px-7 sm:px-5">
                            <Text size="text5xl" as="p" className="!font-playfairdisplay capitalize">
                              Testimonials
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_group_19_gray_200.svg"
                          alt="Image"
                          className="h-[20px] w-[40%] object-contain md:w-full"
                        />
                      </div>
                      <Heading size="textxl" as="h2" className="!text-lime-700">
                        Cherished Moments From Our Happy Couples
                      </Heading>
                    </div>
                  </div>
                  <div className="relative h-[598px] self-stretch">
                    <Img
                      src="images/img_elements_organi_yellow_800.png"
                      alt="Elementsorgani"
                      className="absolute right-[1.88px] top-0 m-auto h-[236px] w-[18%] object-contain"
                    />
                    <div className="absolute bottom-[-0.36px] left-0 right-0 m-auto h-[524px] w-[42%] rotate-[-6deg] content-center rounded-[24px] bg-gray-50_01 shadow-lg md:h-auto">
                      <div className="mx-auto flex flex-1 flex-col items-end pl-14 pr-[58px] md:px-5">
                        <div className="mr-1 flex flex-col items-center self-stretch md:mr-0">
                          <div className="mt-3 flex w-[44%] flex-col items-start px-1.5 md:w-full">
                            <div className="ml-[54px] mt-1.5 w-[38%] rounded-[26px] bg-blue_gray-50 md:ml-0 md:w-full">
                              <Img
                                src="images/img_image_37.png"
                                alt="Imagethirtyseve"
                                className="h-[54px] w-full rounded-tl-[26px] rounded-tr-[26px] object-cover md:h-auto"
                              />
                            </div>
                            <Text
                              size="text3xl"
                              as="p"
                              className="relative mt-[-2px] !font-playfairdisplay !text-pink-900_01"
                            >
                              Maanik Agarwal
                            </Text>
                          </div>
                          <div className="mt-3 h-[8px] w-[8px] rounded bg-gray-200" />
                          <div className="relative ml-3.5 h-[256px] self-stretch md:ml-0">
                            <Heading
                              size="heading4xl"
                              as="h3"
                              className="absolute left-0 right-0 top-0 m-auto flex-1 text-center leading-[27px]"
                            >
                              Simple, Convenient, and Fun!
                            </Heading>
                            <Heading
                              size="textmd"
                              as="h4"
                              className="absolute bottom-[-0.77px] left-0 right-0 m-auto flex-1 text-center leading-6"
                            >
                              At my sister&#39;s wedding, Memory Lane added so much value. The QR code was easy to use,
                              and I loved being able to leave a personal message and upload pictures in real-time. This
                              solution is a must-have for modern weddings!
                            </Heading>
                          </div>
                        </div>
                        <Heading
                          as="h5"
                          className="relative z-[24] mb-4 mr-[172px] mt-[-4px] !text-blue_gray-200 md:mr-0"
                        >
                          Nagpur, India
                        </Heading>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 z-[25] m-auto w-full">
                        <Slider
                          autoPlay
                          autoPlayInterval={2000}
                          responsive={{ "0": { items: 1 }, "551": { items: 1 }, "1051": { items: 1 } }}
                          disableDotsControls
                          activeIndex={sliderState}
                          onSlideChanged={(e: EventObject) => {
                            setSliderState(e?.item);
                          }}
                          ref={sliderRef}
                          items={[...Array(3)].map(() => (
                            <React.Fragment key={Math.random()}>
                              <div className="relative h-[524px] rotate-[6deg] rounded-[24px] bg-gray-50_01 px-[22px] py-[26px] shadow-lg sm:p-5">
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start px-9 sm:px-5">
                                  <div className="flex flex-col items-center self-stretch">
                                    <div className="mt-3.5 flex w-[40%] flex-col items-end px-1.5 md:w-full">
                                      <div className="mr-11 mt-1 w-[40%] rounded-[26px] bg-blue_gray-50 md:mr-0 md:w-full">
                                        <Img
                                          src="images/img_image_35.png"
                                          alt="Imagethirtyfive"
                                          className="h-[54px] w-full rounded-tl-[26px] rounded-tr-[26px] object-cover md:h-auto"
                                        />
                                      </div>
                                      <Text
                                        size="text3xl"
                                        as="p"
                                        className="relative mt-[-2px] !font-playfairdisplay !text-pink-900_01"
                                      >
                                        Diya & Tushar
                                      </Text>
                                    </div>
                                    <div className="mt-3 h-[8px] w-[8px] rounded bg-gray-200" />
                                    <div className="relative mr-3.5 h-[256px] self-stretch md:mr-0">
                                      <Heading
                                        size="heading4xl"
                                        as="h6"
                                        className="absolute left-0 right-0 top-0 m-auto flex-1 text-center leading-[27px]"
                                      >
                                        Innovative and Thoughtful!
                                      </Heading>
                                      <Heading
                                        size="textmd"
                                        as="p"
                                        className="absolute bottom-[-0.77px] left-0 right-0 m-auto flex-1 text-center leading-6"
                                      >
                                        Using Memory Lane at our wedding was one of the best decisions we made. It
                                        allowed us to capture every moment and message from our guests, especially from
                                        the ones we couldn’t meet during the event. The ability to receive digital gold
                                        and monetary gifts was a thoughtful touch. We highly recommend it to any couple
                                        planning their big day!
                                      </Heading>
                                    </div>
                                  </div>
                                  <Heading
                                    as="p"
                                    className="relative z-[26] mb-4 ml-[170px] mt-[-4px] !text-blue_gray-200 md:ml-0"
                                  >
                                    Nagpur, India
                                  </Heading>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 top-0 z-[27] m-auto flex h-max flex-1 flex-col items-center gap-5 rounded-[24px] border border-solid border-lime-700 bg-gray-100_01 p-9 shadow-lg sm:p-5">
                                  <div className="flex w-[92%] flex-col items-center md:w-full">
                                    <div className="flex flex-col items-center gap-2">
                                      <Img
                                        src="images/img_image_36.png"
                                        alt="Imagethirtysix"
                                        className="h-[50px] w-[50px] rounded-[24px] object-cover"
                                      />
                                      <Text size="text3xl" as="p" className="!font-playfairdisplay !text-pink-900_01">
                                        Ranveer & Pooja
                                      </Text>
                                    </div>
                                    <div className="mt-3.5 h-[8px] w-[8px] rounded bg-gray-200" />
                                    <div className="mt-6 flex flex-col items-center gap-4 self-stretch">
                                      <Heading size="heading4xl" as="h6">
                                        A Magical Addition to Our Wedding!
                                      </Heading>
                                      <Heading size="textmd" as="p" className="self-stretch text-center leading-6">
                                        We loved using Memory Lane for our wedding. Our guests found it so easy to leave
                                        wishes and share photos. The dashboard after the event was a wonderful way for
                                        us to relive all the moments and read everyone&#39;s heartfelt messages. It
                                        truly made our day even more special!
                                      </Heading>
                                    </div>
                                  </div>
                                  <Heading as="p" className="!text-blue_gray-200">
                                    Goa, India
                                  </Heading>
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[39%] left-0 right-0 z-[28] m-auto flex flex-1 justify-between gap-5 px-[120px] md:px-5">
                      <Button
                        onClick={() => {
                          sliderRef?.current?.slidePrev();
                        }}
                        className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border border-solid border-gray-900 bg-white-a700 px-4 shadow-xs"
                      >
                        <Img src="images/img_arrow_left.svg" />
                      </Button>
                      <Button
                        onClick={() => {
                          sliderRef?.current?.slideNext();
                        }}
                        className="mr-[46px] flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border border-solid border-gray-900 bg-white-a700 px-4 shadow-xs md:mr-0"
                      >
                        <Img src="images/img_arrow_right_gray_900.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-[58px] flex items-center justify-center">
                    {[...Array(3)].map((_, i) => (
                      <>
                        {sliderState >= i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
                        sliderState < (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? (
                          <div
                            onClick={() => {
                              sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
                            }}
                            className="mr-1.5 inline-block h-[10px] w-[10px] cursor-pointer rounded-[50%] bg-lime-700"
                          />
                        ) : (
                          <div
                            onClick={() => {
                              sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
                            }}
                            className="mr-1.5 inline-block h-[10px] w-[10px] cursor-pointer rounded-[50%] bg-gray-300"
                          />
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <Img src="images/img_frame_4_hearts.png" alt="Image" className="h-[152px] w-[14%] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
