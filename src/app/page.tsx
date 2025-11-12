import { ShowUuid } from "@/features/uuid/components/show-uuid";
import { SelectVersion } from "@/features/uuid/components/select-version";
import { SwitchRegenerateMode } from "@/features/uuid/components/switch-regenerate-mode";
import { UuidActions } from "@/features/uuid/components/uuid-actions";
import { WhatIsUuid } from "@/features/uuid/components/what-is-uuid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-8 sm:gap-10 px-4 relative">
      <h1 className="text-lg text-center font-sixtyfour">
        Generate UUID using...
      </h1>
      <SelectVersion />
      <ShowUuid />
      <UuidActions />
      <SwitchRegenerateMode />
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <div className="max-w-7xl mx-auto px-4 pb-4">
          <div className="flex justify-end">
            <WhatIsUuid />
          </div>
        </div>
      </div>
    </div>
  );
}
