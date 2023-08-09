import { SafeProperty } from "@/types";
import { Property } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { Separator } from "./separator";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { BiBath } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

interface PropertyCardProps {
  data: SafeProperty;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ data }) => {
  return (
    <div className="h-fit w-full border shadow-md grid grid-rows-2 rounded-xl hover:scale-105 transition bg-white">
      <div className="relative h-full w-full">
        <Image
          src={data.imageSrc}
          alt="image"
          fill
          className="object-cover rounded-tl-xl rounded-tr-xl"
        />
      </div>
      <div className="flex flex-col p-4 gap-y-2">
        <h2 className="text-3xl font-semibold">{data.title}</h2>
        <div className="text-lg text-slate-600">
          {data.description.slice(0, 120)}...
        </div>
        <div className="text-xl text-purple-600 font-semibold">
          ${data.price}
          <span className="text-base text-neutral-600">/month</span>
        </div>
        <Separator />
        <div className="flex flex-row justify-around">
          <div className="flex items-center gap-x-2 text-slate-600">
            <BiBath />
            {data.bathroomCount} Bathrooms
          </div>
          <div className="flex items-center gap-x-2 text-slate-600">
            <BsPeople />
            {data.guestCount} Guests
          </div>
          <div className="flex items-center gap-x-2 text-slate-600">
            <FaBed />
            {data.roomCount} Beds
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
