'use client'

import useCountries, { CountrySelectValue } from "@/hooks/useCountries";
import React from "react";
import Select from "react-select";
interface SelectCountriesProps {
  value?: string;
  onChange: (value: CountrySelectValue) => void;
}
const SelectCountries: React.FC<SelectCountriesProps> = ({
  value,
  onChange,
}) => {
  const { getAll,  getByValue} = useCountries();
  let getValue;
  if(value){
    getValue = getByValue(value)
  }
    
  return (
    <div className="w-full h-fit">
      <Select
      className="text-slate-600"
        placeholder="Location"
        isClearable
        options={getAll()}
        value={getValue}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label}
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
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
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};
export default SelectCountries;
