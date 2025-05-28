import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./logo";
import { Search } from "lucide-react";
import Link from "next/link";

const Navbar05Page = () => {
  return (
    <div className="min-h-screen bg-muted pt-24">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-6">
            <Logo className="shrink-0" />

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6 ml-4">
              <Link href="/" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link href="/product" className="text-sm font-medium hover:underline">
                Product
              </Link>
              <Link href="/about" className="text-sm font-medium hover:underline">
                About
              </Link>
            </div>

            <div className="relative hidden md:block">
              <Search className="h-5 w-5 absolute inset-y-0 my-auto left-2.5" />
              <Input
                className="pl-10 flex-1 bg-slate-100/70 dark:bg-slate-800 border-none shadow-none w-[280px] rounded-full"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              className="bg-muted text-foreground hover:bg-accent shadow-none rounded-full md:hidden"
            >
              <Search className="!h-5 !w-5" />
            </Button>
            <Link href="/login">
              <Button className="rounded-full">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar05Page;
