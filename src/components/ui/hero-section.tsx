import React from "react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="min-h-screen overflow-hidden relative py-20">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative">
          <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider">
            EST. 2020
          </p>
          <h1
            className="z-20 text-primary relative font-bold text-center tracking-[-7px] text-6xl md:text-8xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[9rem]"
          >
            PATRICK O'NEIL
          </h1>
          <p className="text-3xl hidden xl:block absolute -bottom-10 right-24 font-thin tracking-[6px]">
            VISUAL ARTIST
          </p>
          <p className="text-3xl absolute xl:hidden -bottom-10 left-24 font-thin tracking-[6px]">
            VISUAL ARTIST
          </p>
        </div>

        <div className="grid relative">
          <div className="space-y-8 pt-20 flex gap-6 justify-center">
            <div className="flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
              <div className="font-semibold text-xl">
                <div>/ PHOTOGRAPHY</div>
                <div>/ VIDEOGRAPHY</div>
                <div>/ DIGITAL ART</div>
              </div>
              <div className="absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80"
                  alt="Patrick O'Neil"
                  className="h-[400px] w-full object-cover grayscale"
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                  BASED IN WAKEFIELD, MA
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80"
              alt="Patrick O'Neil"
              className="h-[400px] w-full object-cover grayscale"
            />
            <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
              BASED IN WAKEFIELD, MA
            </div>
          </div>
        </div>

        <div className="md:mt-40 mt-10">
          <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
            PHOTOGRAPHER & VIDEO ARTIST STUDYING AT
            <br />
            BOSTON COLLEGE, CREATING MEMORABLE VISUAL
            <br />
            EXPERIENCES FOR CLIENTS OF ALL SIZES
          </p>
        </div>
        <div className="flex justify-center pt-6">
          <Link to="/contact">
            <Button size="lg">Get in touch</Button>
          </Link>
        </div>

        <div className="md:flex mt-20 items-end justify-between">
          <div className="relative">
            <div className="w-60 h-36 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop&q=80"
                alt="Portrait work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-60 h-36 absolute left-6 -top-6 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&q=80"
                alt="Graduation photography"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-60 h-36 absolute left-12 -top-12 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80"
                alt="Landscape photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center md:justify-end gap-2">
              <span className="text-lg font-medium tracking-wider">
                RECENT WORK
              </span>
              <ArrowDownRight className="size-6" />
            </div>

            <div className="mt-3 md:text-right">
              <h2 className="text-5xl uppercase tracking-[-4px]">
                Capturing Every Moment
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Grid background - light mode */}
      <div
        className="absolute block inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in" as React.CSSProperties["WebkitMaskComposite"],
        }}
      />
    </section>
  );
}
