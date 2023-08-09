"use client";

import React, { useState } from "react";
import Select from "react-select";

interface SelectPropertyTypeProps {
  type?: string;
  setType: (value: string) => void;
}

const options = [
  {
    value: "apartment",
    label: "Apartment",
  },
  {
    value: "duplex",
    label: "Duplex",
  },
];

const SelectPropertyType: React.FC<SelectPropertyTypeProps> = ({
  type,
  setType,
}) => {
  const getType = options.find((item) => item.value === type);
  return (
    <div>
      <div>
        <div className="w-full h-fit">
          <Select
            className="text-slate-600"
            placeholder="Property Type"
            options={options}
            value={getType}
            onChange={(value) => {
              if (value) {
                setType(value["value"]);
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
    </div>
  );
};
export default SelectPropertyType;
