"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import Image from "next/image";

export function WhatIsUuid() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        appearance="transparent"
        className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse hover:scale-110 transition-all ml-auto"
        aria-label="What is UUID?"
      >
        <Image
          src="/fa-question-circle.svg"
          alt=""
          width={24}
          height={24}
          className="cursor-pointer group-hover:scale-110 transition-all text-xl sm:text-2xl"
          aria-hidden="true"
        />
      </Button>
      <Modal
        title={"What is UUID?"}
        show={openModal}
        onClose={() => setOpenModal(false)}
        dismissible
      >
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">
              UUID (Universally Unique Identifier):
            </p>
            <p>
              UUID is a 128-bit identifier designed to be globally unique. It is
              typically shown as a 36-character string made up of 32 hexadecimal
              digits and 4 hyphens.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">UUID Versions:</p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-medium">Version 1 (Time-based)</p>
                <p className="text-gray-600">
                  Generated using a timestamp and a node identifier (often based
                  on the MAC address). It provides temporal ordering but may
                  reveal hardware-related information.
                </p>
              </div>

              <div>
                <p className="font-medium">Version 3 (Name-based, MD5)</p>
                <p className="text-gray-600">
                  Generated from a namespace UUID and a name using MD5 hashing.
                  It is deterministic: the same inputs always produce the same
                  UUID.
                </p>
              </div>

              <div>
                <p className="font-medium">Version 4 (Random)</p>
                <p className="text-gray-600">
                  Generated using random or pseudo-random numbers. It is the
                  most commonly used version and does not reveal any system
                  information.
                </p>
              </div>

              <div>
                <p className="font-medium">Version 5 (Name-based, SHA-1)</p>
                <p className="text-gray-600">
                  Generated from a namespace UUID and a name using SHA-1
                  hashing. It is deterministic: the same inputs always produce
                  the same UUID. More secure than Version 3.
                </p>
              </div>

              <div>
                <p className="font-medium">Version 6 (Time-based, Reordered)</p>
                <p className="text-gray-600">
                  Similar to Version 1 but rearranges the timestamp to improve
                  sorting. Useful for database indexing.
                </p>
              </div>

              <div>
                <p className="font-medium">Version 7 (Unix Epoch Time-based)</p>
                <p className="text-gray-600">
                  Uses the Unix timestamp in milliseconds to provide good
                  monotonic ordering. Well-suited for distributed systems and
                  database indexing.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">Use Cases:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Primary keys in databases</li>
              <li>Distributed system identifiers</li>
              <li>Session IDs</li>
              <li>Transaction IDs</li>
              <li>Unique file names</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
}
