"use client";

import React, { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { Button } from "../ui/button";

interface UploadImageProps {
  disabled: boolean;
  onChange: (value: string) => void;
}

const SelectImage: React.FC<UploadImageProps> = ({
  disabled,
  onChange,
}) => {
  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const onUpload = (result: any) => {
    onChange(result.info?.url);
  };
  return (
    <>
      <CldUploadWidget onUpload={onUpload} uploadPreset="gzd11c2d">
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <Button
              disabled={disabled}
              variant={"secondary"}
              type="button"
              onClick={onClick}
            >
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
export default SelectImage;
