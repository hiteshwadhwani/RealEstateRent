import client from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    //   const {title, description, imageSrc, type, roomCount, bathroomCount, guestCount, locationValue, price} = await req.json()
    const body = await req.json();
    const newProperty = await client.property.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(newProperty);
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal server error", { status: 500 });
  }
}
