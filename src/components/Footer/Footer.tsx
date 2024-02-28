import { FC } from "react";
import styles from "./footer.module.scss";
import twitter from "@/Assets/twitter.png";
import insta from "@/Assets/insta.png";
import wiber from "@/Assets/wiber.png";
import vk from "@/Assets/vk.png";
import visa from "@/Assets/visa.png";
import mastercard from "@/Assets/mastercard.png";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.section1}>
        <div>
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="instagram" />
          <img src={wiber} alt="wiber" />
          <img src={vk} alt="vk" />
        </div>
        <p>Pochta@gaymail.ua</p>
        <span>#мылюбимживотных</span>
      </div>
      <div className={styles.section2}>
        <div>
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
        </div>
        <p>
          © 2023 / Политика конфиденциальности / Пользовательское
          соглашение / Реквизиты организации
        </p>
      </div>
    </div>
  );
};

export default Footer;
