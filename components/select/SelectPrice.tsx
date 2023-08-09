"use client";

import React, { useState } from "react";
import Select from "react-select";

interface SelectPriceProps {
  price?: string;
  setPrice: (value: string) => void;
}
const options = [
  {
    value: {
      from: 100,
      to: 200,
    },
    label: "$100 - $200",
  },
  {
    value: {
      from: 200,
      to: 500,
    },
    label: "$200 - $500",
  },
  {
    value: {
      from: 500,
      to: 1000,
    },
    label: "$500 - $1000",
  },
];
const SelectPrice: React.FC<SelectPriceProps> = ({ price, setPrice }) => {
  return (
    <div>
      <div className="w-full h-fit">
        <Select
          className="text-slate-600"
          placeholder="Price"
          isClearable
          options={options}
          value={price}
          onChange={(value) => {
            if (value) {
              setPrice(value);
            }
          }}
          formatOptionLabel={(option: any) => (
            <div className="flex flex-row items-center gap-3">
              <div>{option.label}</div>
            </div>
          )}
          classNames={{
            control: () => "p-3 border-2",
            input: () => "text-lg",
            option: () => "text-lg",
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 6,
            colors: {
              ...theme.colors,
              primary: "#9333ea",
              primary25: "#e9d5ff",
            },
          })}
        />
      </div>
    </div>
  );
};
export default SelectPrice;
