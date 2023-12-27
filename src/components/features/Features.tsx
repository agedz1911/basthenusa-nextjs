import { BFeatures } from "@/config/FeaturesList";
import CustomContainer from "../CustomContainer";
import CarouselFeature from "./CarouselFeature";
import Image from "next/image";

const Features = () => {
  return (
    <section className="w-full pt-5 pb-20 bg-amber-50/50">
      <CustomContainer>
        <CarouselFeature />
        <div
          id="about"
          className="pt-20 flex flex-col items-center gap-10 lg:gap-14"
        >
          <h1 className="text-3xl text-center lg:text-4xl font-semibold underline">
            About
          </h1>
          <div className="w-full p-2 flex flex-wrap pb-5">
            {BFeatures.map((feature) => (
              <div
                key={feature.id}
                className="w-full md:w-1/2 lg:w-1/2 py-5 px-2 "
              >
                <div className="flex items-start gap-2 ">
                  {feature.icon}
                  <div className="flex flex-col w-full ">
                    <h1 className="text-lg font-semibold md:text-xl">
                      {feature.label}{" "}
                    </h1>
                    <div className="lg:pr-5 md:pr-4">
                      {feature.items.map((i, index) => (
                        <span
                          className="text-sm text-muted-foreground"
                          key={index}
                        >{`${i}, `}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full px-5 mb-4">
            <h1 className="text-2xl font-bold text-sky-800 mb-3">The Story</h1>
            <h1 className="text-muted-foreground font-semibold text-lg mb-3">
              Nusa Kembara
            </h1>
            <div className="text-sm space-y-3 text-muted-foreground text-justify">
              <p>
                The tale begins with two passionate travelers, enamored with
                Indonesia&apos;s natural splendor above and below the
                water&apos;s surface. Their shared dream of showcasing
                Indonesia&apos;s ecological treasures to the world has become a
                reality, embodied in the wondrous liveaboard experience that is
                Nusa Kembara.
              </p>
              <p>
                As the world&apos;s largest archipelagic nation, Indonesia
                boasts a landscape that takes one&apos;s breath away. Two-thirds
                of its territory is covered in the most awe-inspiring waters,
                teeming with a myriad of marine life - from colorful schools of
                fish to delicate coral reefs and vibrant seaweed. It is this
                untapped beauty that Nusa Kembara is eager to reveal to the
                world.
              </p>
              <p>
                Crafted by master boat builders of Sulawesi, Nusa Kembara came
                to life in 2022, built with the same traditional methods that
                have been passed down through generations. This pure and
                artisanal touch has enabled our ancestors to navigate Indonesian
                waters with ease, and now Nusa Kembara carries on their legacy,
                shining a light on the unparalleled beauty of Indonesia&apos;s
                aquatic paradise
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full py-3 px-3">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/about-2.jpg"
                alt="about"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Features;
