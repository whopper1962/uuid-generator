"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useCreateUuid } from "@/features/uuid/hooks/use-create-uuid";
import { useVersion } from "@/features/uuid/hooks/use-version";
import { useUpdateVersion } from "@/features/uuid/hooks/use-update-version";
import { UuidVersion } from "@/features/uuid/types";
import { Spinner } from "@/components/ui/spinner";

export function SelectVersion() {
  const { updateVersion } = useUpdateVersion();
  const { createUuid } = useCreateUuid();
  const { version, isLoading } = useVersion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const currentIndex = useRef(0);
  const hasInitialized = useRef(false);

  const versionIndex = useMemo(() => {
    return Object.values(UuidVersion).indexOf(version);
  }, [version]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const updateCurrent = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    if (selectedIndex === currentIndex.current) return;
    currentIndex.current = selectedIndex;
    const selectedVersion = Object.values(UuidVersion)[selectedIndex];
    updateVersion(selectedVersion);
    createUuid(selectedVersion);
  }, [emblaApi, updateVersion, createUuid]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateCurrent);
    emblaApi.on("pointerUp", updateCurrent);

    return () => {
      emblaApi.off("select", updateCurrent);
      emblaApi.off("pointerUp", updateCurrent);
    };
  }, [emblaApi, updateCurrent]);

  useEffect(() => {
    if (!emblaApi || isLoading || hasInitialized.current) return;
    if (versionIndex >= 0) {
      emblaApi.scrollTo(versionIndex, true);
      hasInitialized.current = true;
    }
  }, [emblaApi, isLoading, versionIndex]);

  return (
    <div className="flex font-sixtyfour items-center gap-1 sm:gap-2">
      <Button
        className="p-2 sm:p-5 h-24 sm:h-32 rounded-lg hover:cursor-pointer hover:text-gray-500 transition-all shrink-0"
        appearance="transparent"
        onClick={scrollPrev}
        aria-label="Previous UUID version"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-sm sm:text-base"
          aria-hidden="true"
        />
      </Button>
      <div
        className="relative overflow-hidden h-24 sm:h-32 w-48 sm:w-52 min-w-48 sm:min-w-0"
        ref={emblaRef}
      >
        <div className="flex h-full w-full">
          {isLoading ? (
            <div className="flex items-center justify-center h-full w-full">
              <Spinner size="md" color="gray" />
            </div>
          ) : (
            Object.values(UuidVersion).map((version) => (
              <div className="embla__slide h-full w-full" key={version}>
                <div className="flex items-center justify-center h-full w-full text-sm sm:text-base">
                  {version}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="absolute left-0 top-0 h-full w-4 sm:w-8 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-4 sm:w-8 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
      <Button
        className="p-2 sm:p-5 h-24 sm:h-32 rounded-lg hover:cursor-pointer hover:text-gray-500 transition-all shrink-0"
        appearance="transparent"
        onClick={scrollNext}
        aria-label="Next UUID version"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-sm sm:text-base"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
}
