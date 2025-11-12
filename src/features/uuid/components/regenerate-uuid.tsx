"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCreateUuid } from "@/features/uuid/hooks/use-create-uuid";
import { useVersion } from "@/features/uuid/hooks/use-version";

export function RegenerateUuid() {
  const { version } = useVersion();
  const { createUuid } = useCreateUuid();

  const handleClick = () => {
    try {
      createUuid(version);
    } catch (err) {
      console.error("Failed to create UUID:", err);
    }
  };

  return (
    <Button
      appearance="transparent"
      onClick={handleClick}
      className="group p-4"
      aria-label="Regenerate UUID"
    >
      <Image
        src="/fa-rotate.svg"
        alt=""
        width={17}
        height={17}
        className="cursor-pointer group-hover:rotate-180 group-hover:scale-110 group-hover:text-gray-500 transition-all"
        aria-hidden="true"
      />
    </Button>
  );
}
