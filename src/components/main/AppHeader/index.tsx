import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { NavLink } from "@/components/ui/Links/NavLink";
import { routesPaths } from "@/constants/routes-patch";
import ObserverUserAuth from "@/module/user/components/ObserverUserAuth";

import styles from "./styles.module.scss";

type MenuItem = {
  title: string;
  link: string;
};

const menuList: MenuItem[] = [
  {
    title: "Главная",
    link: routesPaths.main(),
  },
];

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.headerLeft}>
            <Link href={routesPaths.main()} className={styles.logo}>
              <Image
                className={styles.logoImage}
                src="/logo.svg"
                alt="BlogMaster"
                width={50}
                height={50}
              />
            </Link>
            <nav className={styles.menu}>
              <ul className={styles.menuList}>
                {menuList.map((item) => (
                  <li className={styles.menuItem} key={item.link}>
                    <NavLink
                      className={styles.menuLink}
                      activeClass={styles.menuLink_active}
                      href={item.link}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="headerRight">
            <ObserverUserAuth />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default AppHeader;
