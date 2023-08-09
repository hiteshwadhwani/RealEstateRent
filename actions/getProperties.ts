import { IsearchParams } from "@/app/Rent/page";
import client from "@/lib/prismadb";

export async function getProperties(params: IsearchParams) {
  try {
    let query: any = {};
    if (params.country) {
      query.locationValue = params.country;
    }
    if (params.type) {
      query.type = params.type;
    }
    console.log(typeof params.from);
    if (params.from && params.to) {
      query.price = {
        gte: params.from,
        lte: params.to,
      };
    }

    const properties = await client.property.findMany({
      where: query,
    });

    if (properties.length === 0) {
      return null;
    }
    const safeProperties = properties.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
    }));
    return safeProperties;
    // return safeProperties;
  } catch (error) {
    console.log(error);
  }
}
