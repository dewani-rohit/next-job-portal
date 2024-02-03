import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Rad Jobs logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight">Rad Jobs</span>
        </Link>

        <Button asChild>
          <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
