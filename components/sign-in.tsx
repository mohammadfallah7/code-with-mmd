import { LucideLogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const SignIn = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer"
      onClick={() => signIn("github")}
    >
      <LucideLogIn className="size-4" />
    </Button>
  );
};

export default SignIn;
