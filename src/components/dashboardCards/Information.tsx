"use client";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
export default function UserInfoCard() {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <div
        className="embla  h-full rounded-2xl text-white w-full gap-3  
          bg-[#1d1d1d] p-4"
        ref={emblaRef}
      >
        <div className="embla__container embla__container relative w-full flex items-start justify-start gap-4 flex-wrap">
          <div className="embla__slide bg-[#010101] rounded-md text-[10px] content-center align-middle h-28  w-32 flex flex-col items-center justify-center">
            <span>0</span>
            <p>GDP Points</p>
          </div>
          <div className=" embla__slide bg-[#7000FF] rounded-md text-[10px] content-center align-middle h-28 w-32  flex  flex-col  items-center justify-center">
            <span>0</span>
            <p>Completed sessions</p>
          </div>
          <div className=" embla__slide bg-[#C2C2C2] rounded-md text-[10px] content-center h-28 w-32 align-middle flex flex-col items-center justify-center">
            <span>0</span>
            <p>Up Coming sessions</p>
          </div>
        </div>
      </div>
    </>
  );
}
