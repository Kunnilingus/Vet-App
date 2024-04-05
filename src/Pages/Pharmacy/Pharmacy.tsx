import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./pharmacy.module.scss";
import pharmacy from "@/Assets/Ветаптека.jpg";
import Ymap from "@/components/Ymap/Ymap";
import { pharmacyCoordinates } from "@/utils/PharmacyCoordinates";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

const Pharmacy: FC = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <div>
      {isDesktop ? <Header /> : <HeaderMobile />}
      <div className={isDesktop ? styles.container : styles.containerMobile}>
        <div
          className={
            isDesktop ? styles.pharmacyList : styles.pharmacyListMobile
          }
        >
          <h1>Ветаптеки</h1>
          <ul>
            <li>
              Ветеринарная аптека Ясенево Россия, Москва, Литовский бульвар, 7.
              Рядом метро: Яснево
            </li>
            <li>
              Ветеринарная аптека на Тимирязевской Россия, Москва,
              Красностуденческий проезд, 2. Рядом метро: Тимирязевская
            </li>
            <li>
              Ветеринарная клиника на Сухаревской г. Москва, Даев переулок, 14.
              Рядом метро: Сухаревская
            </li>
          </ul>
          <div className={isDesktop ? styles.map : styles.mapMobile}>
            <Ymap array={pharmacyCoordinates} />
          </div>
        </div>
        <div
          className={isDesktop ? styles.pharmacyImg : styles.pharmacyImgMobile}
        >
          <img src={pharmacy} alt="clinics" />
        </div>
      </div>
      <Footer isDesktop={isDesktop} isMobile={isMobileOrTablet} />
    </div>
  );
};

export default Pharmacy;
