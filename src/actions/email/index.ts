"use server";
import { ActionResponse } from "@/lib/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailCode(
  email: string,
  code: string,
): Promise<ActionResponse<never>> {
  try {
    console.log("halooo");
    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Hello world",
      react: `<h1>Haloo ${email}</h1>
<p>This is your verification code ${code}</p>`,
    });

    if (error) {
      console.log(error);
      return { status: "ERROR", error: "failed to sent email" };
    }

    return { status: "SUCCESS", success: "Email has sent" };
  } catch (error) {
    // TODO: Add some error handling here, so we get more information
    console.log(error);
    return { status: "ERROR", error: "Something went wrong" };
  }
}
