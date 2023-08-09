"use client";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import SelectImage from "@/components/select/SelectImage";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectPropertyType from "@/components/select/SelectPropertyType";
import SelectCountries from "@/components/select/SelectCountries";
import { CountrySelectValue } from "@/hooks/useCountries";
import SelectPrice from "@/components/select/SelectPrice";
import {toast} from 'react-hot-toast'

import axios from "axios";

const AddClient = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      imageSrc: null,
      type: "",
      roomCount: 1,
      bathroomCount: 1,
      guestCount: 1,
      price: "",
      locationValue: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
        
      const response = await axios.post("/api/add-property", values);
      toast.success('done')
    } catch (error) {
      console.log(error);
      toast.error('Somehing went wrong')
    }
  };
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
  };

  const type = watch("type");
  const locationValue = watch("locationValue");

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="title" {...register("title")} disabled={loading} />
        <Input
          placeholder="description"
          {...register("description")}
          disabled={loading}
        />
        <SelectImage
          disabled={loading}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
        <SelectPropertyType
          type={type}
          setType={(value) => setCustomValue("type", value)}
        />
        <Input
          {...register("roomCount")}
          placeholder="roomCount"
          disabled={loading}
        />
        <Input
          {...register("bathroomCount")}
          placeholder="bathroomCount"
          disabled={loading}
        />
        <Input
          {...register("guestCount")}
          placeholder="guestCount"
          disabled={loading}
        />
        <Input {...register("price")} placeholder="price" disabled={loading} />
        <SelectCountries
          value={locationValue}
          onChange={(value) => setCustomValue("locationValue", value.value)}
        />
        <Button type="submit">submit</Button>
      </form>
      {/* <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} disabled={loading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input
                    placeholder="description"
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageSrc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <SelectImage
                    onRemove={() => field.onChange("")}
                    disabled={loading}
                    value={field.value ? [field.value] : []}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>type</FormLabel>
                <FormControl>
                  <SelectPropertyType
                    type={field.value}
                    setType={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roomCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>roomCount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="roomCount"
                    type="number"
                    disabled={loading}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bathroomCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>bathroomCount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="bathroomCount"
                    value={field.value}
                    onChange={field.onChange}
                    disabled={loading}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>guestCount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Billboard label"
                    value={field.value}
                    onChange={field.onChange}
                    disabled={loading}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locationValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>locationValue</FormLabel>
                <FormControl>
                  <SelectCountries
                    value={field.value}
                    onChange={(val) => field.onChange(val.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="price"
                    value={field.value}
                    onChange={field.onChange}
                    disabled={loading}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="w-fit" type="submit">
            submit
          </Button>
        </form>
      </Form> */}
    </>
  );
};
export default AddClient;
