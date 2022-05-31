import styles from "./UserCard.module.css";
import { FaMailBulk, FaPhoneAlt, FaChrome } from "react-icons/fa";

const UserCard = ({ userData, userImg, index }) => {
  return (
    <div className={styles.user__card}>
      <div className={styles.user__img}>
        <img src={userImg[index]?.url}></img>
      </div>
      <div className={styles.user__details}>
        <h3>{userData?.name}</h3>
        <div>
          <FaMailBulk />
          <p>{userData?.email}</p>
        </div>
        <div>
          <FaPhoneAlt />
          <p>{userData?.phone}</p>
        </div>
        <div>
          <FaChrome />
          <p>{userData?.website}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
