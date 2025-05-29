import React from "react";
import HeroVideoDialog from "../magicui/hero-video-dialog";
import { TextAnimate } from "../magicui/text-animate";

const VideoCard = () => {
  return (
    <>
      <div className="flex items-center justify-center overflow-hidden bg-background px-4 py-16 md:py-20 w-full flex-col gap-5">
        <TextAnimate
          animation="blurIn"
          as="h1"
          className="text-4xl md:text-5xl tracking-tighter text-cyan-400 drop-shadow-[0_0_40px_rgba(34,211,238,0.9)] font-extrabold text-center max-w-3xl mx-auto"
        >
          Step Inside Our World of Digital Creation
        </TextAnimate>
        <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background shadow-xl group transition-all">
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </>
  );
};

export default VideoCard;
