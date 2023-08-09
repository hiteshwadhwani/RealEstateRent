"use client";

import { useEffect, useState } from "react";
import SelectCountries from "./select/SelectCountries";
import { CountrySelectValue } from "@/hooks/useCountries";
import SelectDate from "./select/SelectDate";
import SelectPrice from "./select/SelectPrice";
import SelectPropertyType from "./select/SelectPropertyType";

import qs from "query-string";
import { formatISO } from "date-fns";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Search = () => {
  const path = usePathname();
  const router = useRouter();
  const [country, setCountry] = useState<string>();
  const [date, setDate] = useState<Date>();
  const [type, setType] = useState<string>();
  const [price, setPrice] = useState<any>();

  useEffect(() => {
    let query: any = {};
    if (country) {
      query["country"] = country;
    }
    if (date) {
      query["date"] = formatISO(date);
    }
    if (type) {
      query["type"] = type;
    }
    if (price) {
      query["from"] = price["value"]["from"];
      query["to"] = price["value"]["to"];
    }
    const url = qs.stringifyUrl(
      {
        url: path,
        query: query,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [country, date, type, price, router, path]);

  const onReset = () => {
    setCountry(undefined);
    setDate(undefined);
    setType(undefined);
    setPrice(undefined);

    router.push(path);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 p-4 my-6 w-[80vw] m-auto bg-purple-200 shadow-xl rounded-md shadow-purple-300">
      <SelectCountries
        value={country}
        onChange={(value) => setCountry(value?.value)}
      />
      <SelectDate date={date} setDate={setDate} />
      <SelectPrice price={price} setPrice={setPrice} />
      <SelectPropertyType type={type} setType={setType} />
      <Button className="bg-purple-600 text-lg w-full h-full" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};
export default Search;
