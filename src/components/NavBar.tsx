import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import LoginButton from "./LoginButton";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="relative flex justify-between items-center pt-6">
      <Link href={"/"}>
        <h1 className="font-semibold text-2xl">Exercise App</h1>
      </Link>

      <nav>
        <ul className="flex gap-x-6 items-center">
          <li className="text-sm hover:text-blue-400">
            <button>Like</button>
          </li>
          <li className="text-sm  hover:text-blue-400">
            <button>
              <Link href={"/create"}>Create</Link>
            </button>
          </li>
          <li className="border-l border-slate-200 pl-6 text-sm hover:text-blue-400">
            <ModeToggle />
          </li>
          <LoginButton />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
