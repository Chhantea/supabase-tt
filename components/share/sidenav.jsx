import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            <li className="sidebar-nav_element">asdasds</li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
