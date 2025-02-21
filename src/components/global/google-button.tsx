import Image from "next/image";
import google from "@/public/logo/google.svg";
import { googleLogin } from "@/actions/auth";

export default function GoogleButton() {
  return (
    <form action={googleLogin}>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-md border p-2 transition hover:bg-gray-100"
      >
        <Image src={google} alt="Google Logo" width={20} height={20} />
        Sign in with Google
      </button>
    </form>
  );
}
