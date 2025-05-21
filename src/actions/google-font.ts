"use server";
// *GET ALL Website
import { ActionResponse } from "@/lib/types";
import { fonts, GoogleFontType } from "@/constant/google-font";

export async function getAllFonts(): Promise<ActionResponse<GoogleFontType[]>> {
  try {
    // const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_FONT; // Ganti dengan API key Anda
    // if (!API_KEY) {
    //   console.log("api key doesn't exist");
    // }
    // const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;
    //
    // const response = await fetch(url);
    // const fonts = await response.json();

    // const mappedFonts: GoogleFontType[] = fonts.items.map((font) => {
    //   return { ...font };
    // });

    return {
      status: "SUCCESS",
      success: "Successfully fetching Coupons",
      data: fonts,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}
