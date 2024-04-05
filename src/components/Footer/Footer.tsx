import { FC } from "react";
import styles from "./footer.module.scss";
import twitter from "@/Assets/twitter.png";
import insta from "@/Assets/insta.png";
import wiber from "@/Assets/wiber.png";
import vk from "@/Assets/vk.png";
import visa from "@/Assets/visa.png";
import mastercard from "@/Assets/mastercard.png";

interface FooterProps {
  isDesktop?: boolean;
  isMobile?: boolean;
}
const Footer: FC<FooterProps> = ({ isDesktop, isMobile }) => {
  return (
    <div className={isDesktop ? styles.footer : styles.footerMobile}>
      <div className={isDesktop ? styles.section1 : styles.section1Mobile}>
        <div>
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="instagram" />
          <img src={wiber} alt="wiber" />
          <img src={vk} alt="vk" />
        </div>
        <p>Pochta@gaymail.ua</p>
        <span>#мылюбимживотных</span>
      </div>
      <div className={isDesktop ? styles.section2 : styles.section2Mobile}>
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
