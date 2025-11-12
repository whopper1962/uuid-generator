"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { Input, InputRef } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Tooltip } from "@/components/ui/tooltip";
import { useCreateUuid } from "@/features/uuid/hooks/use-create-uuid";
import { useNamespacedName } from "@/features/uuid/hooks/use-namespaced-name";
import { useVersion } from "@/features/uuid/hooks/use-version";
import { useUpdateNamespacedName } from "@/features/uuid/hooks/use-update-namespaced-name";

export function EditNamespacedName() {
  const { version } = useVersion();
  const { namespace, name, isLoading } = useNamespacedName();
  const namespaceInputRef = useRef<InputRef>(null);
  const nameInputRef = useRef<InputRef>(null);
  const [namespaceInput, setNamespaceInput] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");
  const [namespaceError, setNamespaceError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { updateNamespacedName, validateNamespace } = useUpdateNamespacedName();
  const { createUuid } = useCreateUuid();

  useEffect(() => {
    if (!isLoading) {
      setNamespaceInput(namespace);
      setNameInput(name);
    }
  }, [isLoading]);

  const handleClose = () => {
    if (namespaceError) {
      namespaceInputRef.current?.shake();
    }
    if (nameError) {
      nameInputRef.current?.shake();
    }
    if (namespaceError || nameError) {
      return;
    }
    setOpenModal(false);
    updateNamespacedName(nameInput, namespaceInput);
    createUuid(version, nameInput, namespaceInput);
  };

  const handleNamespaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNamespaceInput(e.target.value);
    if (!validateNamespace(e.target.value)) {
      setNamespaceError("Invalid namespace");
    } else {
      setNamespaceError("");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
    if (e.target.value === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleAutoFill = () => {
    const randomUuid = uuidv4();
    setNamespaceInput(randomUuid);
    if (validateNamespace(randomUuid)) {
      setNamespaceError("");
    } else {
      setNamespaceError("Invalid namespace");
    }
  };

  return (
    <>
      <Tooltip
        content="Configure name-based UUID"
        animation="duration-300"
        className="hidden sm:block"
      >
        <Button
          appearance="transparent"
          onClick={() => setOpenModal(true)}
          className="group p-4"
          aria-label="Edit namespace"
        >
          <Image
            src="/fa-gear.svg"
            alt=""
            width={17}
            height={17}
            className="cursor-pointer group-hover:rotate-180 group-hover:scale-110 group-hover:text-gray-500 transition-all"
            aria-hidden="true"
          />
        </Button>
      </Tooltip>
      <Modal
        title={"Configure name-based UUID"}
        show={openModal}
        onClose={handleClose}
        dismissible
      >
        <div className="w-full flex flex-col gap-4">
          <p className="text-xs leading-relaxed">
            {version} is name-based. Enter a stable namespace UUID in the
            &quot;Namespace&quot; field (e.g., an app-specific UUID such as
            123e4567-e89b-12d3-a456-426614174000), and a consistent name in the
            &quot;Name&quot; field (e.g., a username, email, or path). The same
            Namespace-Name combination always produces the same UUID.
          </p>
          <div className="w-fullflex gap-2">
            <Input
              ref={namespaceInputRef}
              label="Namespace:"
              placeholder="123e4567-e89b-12d3-a456-426614174000"
              value={namespaceInput}
              error={namespaceError}
              onChange={handleNamespaceChange}
              subContent={
                <Tooltip
                  content="Generate random UUID"
                  animation="duration-300"
                  className="hidden sm:block"
                >
                  <Button
                    appearance="transparent"
                    className="p-2 w-fit h-fit hover:scale-110 hover:rotate-180 transition-all"
                    onClick={handleAutoFill}
                    aria-label="Autofill namespace with random UUID"
                  >
                    <FontAwesomeIcon icon={faRotate} aria-hidden="true" />
                  </Button>
                </Tooltip>
              }
            />
          </div>
          <Input
            ref={nameInputRef}
            label="Name:"
            placeholder="hellouuid.com"
            value={nameInput}
            error={nameError}
            onChange={handleNameChange}
          />
          <div className="flex justify-end mt-2">
            <p className="text-xs leading-relaxed text-gray-500">
              Close modal to submit changes.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
