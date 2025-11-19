import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function UserIcon() {
  const isLoginedIn = false;
  return isLoginedIn ? (
    <Avatar>
      <AvatarImage src="https://github.com/aomona.png" />
      <AvatarFallback>AM</AvatarFallback>
    </Avatar>
  ) : (
    <Button className="cursor-pointer">Login</Button>
  );
}
