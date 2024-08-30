import { Img, Text, Heading } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  {
    whatismemory: "What is Memory Lane?",
    imagethirty: "images/img_group_black_900.svg",
  },
  {
    whatismemory:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad Ut enimd?",
  },
  {
    whatismemory:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elitlabore et dolore magna aliqua. Ut enim ad Ut enimd?",
  },
  {
    forhowlong: "For how long will the subscription last?",
  },
  {
    whatismemory:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad Ut enimd?",
  },
];

export default function HomepagestaticRowThirtynine() {
  return (
    <div className="flex">
      <div className="container-xs flex md:px-5">
        <div className="h-[962px] w-full rounded-[12px] border border-solid border-blue_gray-50 bg-white-a700 bg-[url(/public/images/img_frame_7.png)] bg-cover bg-no-repeat shadow-sm md:h-auto">
          <div className="relative mt-[78px] h-[882px] md:h-auto">
            <div className="absolute bottom-[-0.72px] left-0 right-0 m-auto flex flex-1 flex-col items-center gap-[68px] sm:gap-[34px]">
              <Heading size="textxl" as="h2" className="w-[50%] text-center leading-6 !text-lime-700 md:w-full">
                Everything you need to know about enhancing your wedding experience with Memory Lane
              </Heading>
              <Accordion preExpanded={[0]} className="mx-[100px] flex flex-col gap-5 self-stretch md:mx-0">
                {accordionData.map((d, i) => (
                  <AccordionItem uuid={i} key={`expandablelistw${i}`}>
                    <div className="flex flex-1 flex-col gap-10 px-3">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex flex-col gap-5">
                                  {props?.expanded ? <div className="h-px bg-gray-200" /> : null}
                                  <div className="mx-3 flex flex-wrap justify-between gap-5 md:mx-0">
                                    <Heading size="heading3xl" as="h3" className="!text-pink-900_01">
                                      {d.forhowlong}
                                    </Heading>
                                    {props?.expanded ? (
                                      <Img src="images/img_arrow_up.svg" alt="Arrowup" className="h-[24px] w-[24px]" />
                                    ) : (
                                      <Img
                                        src="images/img_arrow_down_blue_gray_700.svg"
                                        alt="Arrowdown"
                                        className="h-[24px] w-[24px]"
                                      />
                                    )}
                                  </div>
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="mx-3 mb-5 md:mx-0">
                          <Heading as="h4" className="!font-normal leading-6">
                            <>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              <br />
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat.
                            </>
                          </Heading>
                        </div>
                      </AccordionItemPanel>
                    </div>
                    <div className="h-px w-[98%] rotate-[0deg] bg-gray-200" />
                  </AccordionItem>
                ))}
              </Accordion>
              <Img
                src="images/img_sketch_annotati.png"
                alt="Sketchannotati"
                className="h-[122px] w-[122px] self-end object-cover"
              />
            </div>
            <div className="mx-10 flex flex-1 items-start justify-end gap-7 md:mx-0 md:flex-col">
              <Text size="text5xl" as="p" className="self-center !font-playfairdisplay capitalize">
                Frequently Asked Questions
              </Text>
              <Img
                src="images/img_group_19_gray_200.svg"
                alt="Image Thirtyone"
                className="mt-3 h-[20px] w-[30%] object-contain md:mt-0 md:w-full"
              />
            </div>
            <Img
              src="images/img_elements_organi_gray_600.png"
              alt="Elementsorgani"
              className="absolute left-0 top-[5%] m-auto h-[104px] w-[6%] object-contain"
            />
            <Img
              src="images/img_group_18_gray_200.svg"
              alt="Image Thirtytwo"
              className="absolute left-[3%] top-[13.72px] m-auto h-[20px] w-[30%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
