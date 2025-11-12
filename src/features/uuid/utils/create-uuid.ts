import {
  v1 as uuidv1,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
  v6 as uuidv6,
  v7 as uuidv7,
} from "uuid";
import { UuidVersion } from "@/features/uuid/types";
import { assertNever } from "@/utils/assert-never";

export function createUuid(
  version: UuidVersion,
  name?: string,
  namespace?: string,
) {
  switch (version) {
    case UuidVersion.v1:
      return uuidv1();
    case UuidVersion.v4:
      return uuidv4();
    case UuidVersion.v6:
      return uuidv6();
    case UuidVersion.v7:
      return uuidv7();
    case UuidVersion.v3:
      return uuidv3(name ?? "", namespace ?? "");
    case UuidVersion.v5:
      return uuidv5(name ?? "", namespace ?? "");
    default:
      assertNever(version);
  }
}
