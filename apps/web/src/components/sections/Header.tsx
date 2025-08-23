import { FC } from "react";

import { Link } from "@tanstack/react-router";

import GlobalIcon from "@/assets/icons/Global.svg";
import {
  Button,
  DownloadModal,
  Logo,
  UpcomingSoonBadge,
  WalletMultiButton
} from "@/components";
import { cn } from "@/lib";

import { NAV_LINKS } from "./constants";

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <nav
      className={cn(
        "container mt-6 flex items-center justify-between",
        className
      )}
    >
      <div className="flex items-center">
        {/* @ts-expect-error Tanstack type error */}
        <Link to="/">
          <Logo />
        </Link>
        <ul className="ml-[113px] flex gap-7">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <div className="flex gap-2">
          <DownloadModal
            success={
              <Button
                variant="button-white"
                className="h-10 cursor-pointer py-2 text-[1rem]"
                disabled
              >
                Extension is Installed!
              </Button>
            }
            trigger={
              <Button
                variant="button-white"
                className="h-10 cursor-pointer py-2 text-[1rem]"
              >
                Download Free
              </Button>
            }
          />

          <WalletMultiButton
            className={cn("button button-dark-border", "h-10 py-2")}
          />
        </div>

        <div className="relative">
          <UpcomingSoonBadge className="-top-2 left-2" />

          <div className="ml-2 grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-white">
            <img
              src={GlobalIcon}
              alt="GlobalIcon"
              className="h-[22px] w-[22px]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
