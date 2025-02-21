import { Button } from "@/components/ui/button";
import { LoaderCircle, LogIn } from "lucide-react";

interface SubmitButtonProps {
  isPending: boolean;
}

export default function SubmitButton({ isPending }: SubmitButtonProps) {
  return (
    <Button type="submit" className="w-full">
      {isPending ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <>
          Create new Account <LogIn className="size-full text-white" />
        </>
      )}
    </Button>
  );
}
