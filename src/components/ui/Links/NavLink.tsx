"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
  activeClass?: string;
};

export const NavLink = ({
  href = "#",
  activeClass,
  children,
  ...props
}: Props & PropsWithChildren<LinkProps>) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href.toString());

  if (isActive) {
    props.className += ` ${activeClass}`;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
