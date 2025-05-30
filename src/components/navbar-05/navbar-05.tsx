import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./logo";
import { Search } from "lucide-react";
import Link from "next/link";
import CountCartItem from "@/app/(front)/components/CountCartItem";
import { ShoppingBasket } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navbar05Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers() //get user data now log in
  });

  return (
    <div>
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-6">
            <Logo className="shrink-0" />

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6 ml-4">
              <Link href="/" className="text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">
                Home
              </Link>
              <Link href="/product" className="text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">
                Product
              </Link>
              <Link href="/about" className="text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">
                About us
              </Link>
              <Link href="/course" className="text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">
                Course
              </Link>
              <Link href="/cart" className="text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">
                Cart
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
              className="bg-muted text-foreground hover:bg-accent shadow-none rounded-full md:hidden">
              <Search className="!h-5 !w-5" />
            </Button>
            <Link href="/cart">
            <Button className="rounded-full bg-blue-700 text-white hover:bg-blue-500">
              <ShoppingBasket className="mr-1" /> <CountCartItem /> item(s) </Button>
            </Link>

            {
            session && (
              <>
                <Button className="rounded-full bg-blue-700 text-white hover:bg-blue-500">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <div className="flex items-center">
                  Hello, {session.user.name}
                </div>
              </>
            )
          }
          </div>
        </div>
      </nav>
      </div>
  );
};

export default Navbar05Page;
