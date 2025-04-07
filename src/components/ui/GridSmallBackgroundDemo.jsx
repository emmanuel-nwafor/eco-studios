import { cn } from "../../utils/cn";
import React from "react";
import { ContainerTextFlip } from "./container-text-flip";
import { HoverBorderGradient } from "./hover-border-gradient";

export function GridSmallBackgroundDemo() {
  return (
    <div id="home" className="relative flex h-[50rem] w-full items-center max-md:justify-center bg-white dark:bg-black">
      <div className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
     
      <div className="max-md:flex-col flex items-center justify-evenly">
        <div>
          <h1 className="relative text-cente p-10 z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-5xl">
            I Build Experiences That Are <br />  <ContainerTextFlip />
          </h1>
          <div className="ml-8"><HoverBorderGradient /></div>
        </div>

        <h1 className="text-gray-400 z-20 p-10">
          <span className="font-bold text-gray-300">PORTFOLIO{"</>"}</span> <br />

          Building sleek, pixel-perfect, responsive, user-friendly and <br className="max-md:hidden" /> seamless web experiences
          that bridge creativity and technology 💻.
        </h1>

      </div>
    </div>
  );
}
