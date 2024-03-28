import Button from "./Button";
import Section from "./Section";
import { curve, hero, heroBackground, robot } from "../assets";
import { BackgroundCircles, BottomLine, Gradient, Rings } from "../design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className={` pt-[23rem] -mt-[5.25rem]`}
      crosses
      crossOffset={`lg:translate-y-[5.25rem ]`}
      customPadding
      id={`hero`}
    >
      <Rings />
      <div className="container relative pt-32" ref={parallaxRef}>
        <div className="relative z-1 max-w[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Explore the Posibilities of AI Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className={` absolute top-full left-0 w-full xl:-mt-2 `}
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href={`/pricing`} white>
            Get Started
          </Button>
        </div>
        <div className=" relative max-w-[30rem] mx-auto md:max-w-6xl xl:mb-24">
          <div className="relative z-2 p-0.5 rounded-2xl bg-conic-gradient ">
            <div className=" relative bg-n-8 rounded-[1rem] overflow-hidden">
              <div className=" aspect-[33/40] rounded-b-[0.9] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="hero-obot"
                  width={1024}
                  height={490}
                  className=" w-full  scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[20%]"
                />
              </div>
            </div>
            <Gradient />
            <div>
              <Generating
                className={`absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 -translate-y-15`}
              />
              <ScrollParallax isAbsolutelyPositioned>
                <ul className=" z-40 hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <img src={icon} alt={icon} width={24} height={25} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>
              <ScrollParallax>
                <Notification
                  className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  title="Code Generation"
                ></Notification>
              </ScrollParallax>
            </div>
          </div>
          <div className=" absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="hero-robot"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};
export default Hero;
