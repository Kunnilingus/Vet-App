import { FC } from "react";
import styles from "./header.module.scss";
import Butterfly from "@/Assets/butterfly.png";
import Phone from "@/Assets/phone.png";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.firstLine}>
        <div className={styles.headerPics}>
          <img src={Butterfly} alt="Logo" />
        </div>
        <div>
          <div className={styles.headerPics}>
            <img src={Phone} alt="phone" />
          </div>
          <p>8 (800)-555-35-35</p>
        </div>
        <button className={styles.button}>Войти</button>
      </div>
      <div className={styles.secondLine}>
        <p>Услуги</p>
        <p>Врачи</p>
        <p>Клиники</p>
        <p>Ветаптеки</p>
        <p>Зоомагазины</p>
        <p>Груминг</p>
        <p>Акции</p>
        <p>Контакты</p>
      </div>
    </div>
  );
};

export default Header;
