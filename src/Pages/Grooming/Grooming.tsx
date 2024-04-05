import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./grooming.module.scss";
import groomong from "@/Assets/груминг.jpg";
import Ymap from "@/components/Ymap/Ymap";
import { groomingCoordinates } from "@/utils/GroomingCoordinates";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

const Grooming: FC = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <div>
      {isDesktop ? <Header /> : <HeaderMobile />}
      <div className={isDesktop ? styles.container : styles.containerMobile}>
        <div
          className={
            isDesktop ? styles.groomingList : styles.groomingListMobile
          }
        >
          <h1>Груминг</h1>
          <ul>
            <li>
              Груминг-салон на 1905 года г. Москва, Ленинский проспект, д. 69
              Рядом метро: 1905 года
            </li>
            <li>
              Груминг-салон на Сухаревской г. Москва, Даев переулок, 14. Рядом
              метро: Сухаревская
            </li>
            <li>
              Груминг-салон Ленинский проспект г. Москва, Ленинский проспект, д.
              69 Рядом метро: Университет Академическая Профсоюзная
            </li>
          </ul>
          <div className={isDesktop ? styles.map : styles.mapMobile}>
            <Ymap array={groomingCoordinates} />
          </div>
        </div>
        <div
          className={isDesktop ? styles.groomingImg : styles.groomingImgMobile}
        >
          <img src={groomong} alt="clinics" />
        </div>
      </div>
      <Footer isDesktop={isDesktop} isMobile={isMobileOrTablet} />
    </div>
  );
};

export default Grooming;
