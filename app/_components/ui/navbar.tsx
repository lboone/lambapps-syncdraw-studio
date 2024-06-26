import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import SiteButton from './SiteButton'
import SiteAuthButton from "./SiteAuthButton";
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from "@clerk/nextjs";


type Props = {};

const Navbar = async (props: Props) => {
  const user = false;
  const onClick = () => {console.log("clicked")}
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <Link href="/" className="flex flex-row items-center">
        <p className="text-3xl font-bold">SyncDraw</p>
        <Image
          src="/logo.png"
          alt="SyncDraw Studio Logo"
          width={15}
          height={15}
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">Studio</p>
        </Link>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
      <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex item-center gap-4">

      <SignedIn>
        <div className="hidden md:flex md:flex-row md:gap-2" >
          <SiteButton  href="/dashboard">Dashboard</SiteButton>  
          <SiteAuthButton>{(<UserButton />)}</SiteAuthButton>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="hidden md:flex md:flex-row md:gap-2" >
          <SiteAuthButton>{(<SignInButton fallbackRedirectUrl={"/dashboard"}/>)}</SiteAuthButton>
          <SiteAuthButton>{(<SignUpButton fallbackRedirectUrl={"/dashboard"}/>)}</SiteAuthButton>
        </div>
      </SignedOut>
      
        {/* WIP:wire up user */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
