import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomepagestaticColumnTwenty from "./HomepagestaticColumnTwenty";
import HomepagestaticRowThirtynine from "./HomepagestaticRowThirtynine";
import HomepagestaticRowThirtyone from "./HomepagestaticRowThirtyone";
import HomepagestaticRowThirtysix from "./HomepagestaticRowThirtysix";
import HomepagestaticRowThree from "./HomepagestaticRowThree";
import HomepagestaticRowTwentyfour from "./HomepagestaticRowTwentyfour";
import HomepagestaticRowTwentyone from "./HomepagestaticRowTwentyone";
import React from "react";

export default function HomepagestaticPage() {
  return (
    <>
      <Helmet>
        <title>Homepage_static 2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-5 bg-gray-50 py-5">
        <div className="container-xs md:px-5">
          <Header />
        </div>
        <div className="flex flex-col gap-5 self-stretch">
          <HomepagestaticRowThree />
          <HomepagestaticColumnTwenty />
          <HomepagestaticRowTwentyone />
          <HomepagestaticRowTwentyfour />
          <HomepagestaticRowThirtyone />
          <HomepagestaticRowThirtysix />
          <HomepagestaticRowThirtynine />
        </div>
        <div className="container-xs md:px-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
