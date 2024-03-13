import Link from "next/link";

import { UserType } from "@/types/models/user.type";

import styles from "./styles.module.scss";

type Props = {
  user: UserType;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <div>
      <Link href="#" className={styles.avatar}>
        {user.name}
      </Link>
    </div>
  );
};

export default UserAvatar;
