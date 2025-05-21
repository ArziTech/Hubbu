import React, { ReactNode } from "react";
import { ImageKitProvider } from "@imagekit/next";

const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

const Imagekit = ({ children }: { children: ReactNode }) => {
  return (
    <ImageKitProvider urlEndpoint={endpoint} transformationPosition="path">
      {children}
    </ImageKitProvider>
  );
};
export default Imagekit;
