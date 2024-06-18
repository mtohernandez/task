import Link from "next/link";

import { Button } from "@/components/ui/button";

// TODO: Change trello logo
// TODO: Make logo responsive

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <span className="font-semibold">Trello</span>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm">
            <Link href="/sign-up">Get Trello for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
