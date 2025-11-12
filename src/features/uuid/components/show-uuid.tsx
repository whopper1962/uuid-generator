"use client";

import { useState } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { useCreateUuid } from "@/features/uuid/hooks/use-create-uuid";
import { useRegenerateMode } from "@/features/uuid/hooks/use-regenerate-mode";
import { useUuid } from "@/features/uuid/hooks/use-uuid";
import { useVersion } from "@/features/uuid/hooks/use-version";
import { Spinner } from "@/components/ui/spinner";

export function ShowUuid() {
  const { version } = useVersion();
  const { uuid, updated, isLoading } = useUuid();
  const { regenerateMode } = useRegenerateMode();
  const { createUuid } = useCreateUuid();
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(uuid);
      setCopied(true);

      if (regenerateMode) {
        createUuid(version);
      }

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy UUID:", err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-2 h-12">
      {isLoading ? (
        <Spinner size="md" color="gray" />
      ) : (
        <>
          <Tooltip
            content={
              <div className="min-w-28 text-center">
                {copied ? "Copied!🎉" : "Click to copy"}
              </div>
            }
            placement="top"
            animation="duration-300"
            className="hidden sm:block"
          >
            <p
              onClick={handleClick}
              style={{ cursor: "pointer" }}
              className={`hover:text-gray-600 transition-all text-sm sm:text-base break-all text-center ${
                updated ? "scale-[1.02]" : ""
              }`}
            >
              <span className="mr-2">🦄</span>
              {uuid}
            </p>
          </Tooltip>
          <p
            className="text-xs text-gray-500 mt-3 sm:hidden text-center"
            onClick={handleClick}
          >
            {copied ? "Copied!🎉" : "Tap to copy"}
          </p>
        </>
      )}
    </div>
  );
}
