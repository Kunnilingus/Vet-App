import { FC } from "react";
import Header from "@/components/Header/Header";
import styles from "./services.module.scss";
import Footer from "@/components/Footer/Footer";
import dog from "@/Assets/Собаки.jpg";
import cat from "@/Assets/Кошки.jpg";
import rat from "@/Assets/Грызуны.jpg";
import birds from "@/Assets/Попугаи.jpg";
import reptiles from "@/Assets/Рептилии.jpg";
import exots from "@/Assets/Экзоты.jpg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

const Services: FC = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" }); 
  const navigate = useNavigate();
  return (
    <div>
      {isDesktop ? <Header /> : <HeaderMobile />}
      <h1 className={isDesktop ? styles.services : styles.servicesMobile}>
        Услуги
      </h1>
      <div className={isDesktop ? styles.cards : styles.cardsMobile}>
        <div
          onClick={() => navigate("/services/dogs")}
          className={isDesktop ? styles.card : styles.cardMobile}
        >
          <img
            className={isDesktop ? styles.cardImg : styles.cardImgMobile}
            src={dog}
            alt="dog"
          />
          <h2>Собаки</h2>
        </div>
        <div
          onClick={() => navigate("/services/cats")}
          className={isDesktop ? styles.card : styles.cardMobile}
        >
          <img
            className={isDesktop ? styles.cardImg : styles.cardImgMobile}
            src={cat}
            alt="dog"
          />
          <h2>Кошки</h2>
        </div>
        <div
          onClick={() => navigate("/services/rodents")}
          className={isDesktop ? styles.card : styles.cardMobile}
        >
          <img
            className={isDesktop ? styles.cardImg : styles.cardImgMobile}
            src={rat}
            alt="dog"
          />
          <h2>Грызуны</h2>
        </div>
        <div
          onClick={() => navigate("/services/birds")}
          className={isDesktop ? styles.card : styles.cardMobile}
        >
          <img
            className={isDesktop ? styles.cardImg : styles.cardImgMobile}
            src={birds}
            alt="dog"
          />
          <h2>Птицы</h2>
        </div>
        <div
          onClick={() => navigate("/services/reptiles")}
          className={isDesktop ? styles.card : styles.cardMobile}
        >
          <img
            className={isDesktop ? styles.cardImg : styles.cardImgMobile}
            src={reptiles}
            alt="dog"
          />
          <h2>Рептилии</h2>
        </div>
        <div
          onClick={() => navigate("/services/exots")}
          className={isDesktop ? styles.card : styles.cardMobile}
        >
          <img
            className={isDesktop ? styles.cardImg : styles.cardImgMobile}
            src={exots}
            alt="dog"
          />
          <h2>Экзоты</h2>
        </div>
      </div>
      <Footer isDesktop={isDesktop} isMobile={isMobileOrTablet} />
    </div>
  );
};

export default Services;
