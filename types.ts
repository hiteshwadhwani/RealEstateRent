import { Property } from "@prisma/client";

export type SafeProperty = Omit<Property, "createdAt"> & {
  createdAt: string;
};
