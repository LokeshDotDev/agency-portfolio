import React from "react";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { VideoText } from "../magicui/video-text";
import { AuroraText } from "../magicui/aurora-text";
import { Spotlight } from "../ui/spotlight-new";

const HeroSection = () => {
  return (
    <>
      <div className="relative flex size-full items-center justify-center overflow-hidden bg-background p-20 max-w-full h-screen flex-wrap">
        <GridPattern
          width={100}
          height={100}
          x={0}
          y={0}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,white,transparent)]"
          )}
        />
        <Spotlight />
        <div className="z-10 h-[200px] w-4/5 flex flex-wrap items-center justify-center">
          <VideoText
            src="https://cdn.magicui.design/ocean-small.webm"
          >
            DailyLance
          </VideoText>
          <h1 className=" z-50 text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            Where Logic Meets&nbsp;
            <AuroraText>Imagination</AuroraText>&nbsp;to Shape the Future{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
