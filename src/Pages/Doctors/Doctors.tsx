import Header from "@/components/Header/Header";
import { FC } from "react";
import styles from "./doctors.module.scss";
import doc from "@/Assets/Врач.jpg";
import Footer from "@/components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

const Doctors: FC = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <div>
      {isDesktop ? <Header /> : <HeaderMobile />}
      <h1 className={isDesktop ? styles.title : styles.titleMobile}>
        Наши специалисты
      </h1>
      <div className={isDesktop ? styles.cards : styles.cardsMobile}>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
        <div className={isDesktop ? styles.card : styles.cardMobile}>
          <div className={styles.cardImg}>
            <img src={doc} alt="doc" />
          </div>
          <h2>Вяткина Алина Александровна</h2>
          <p>
            Кандидат ветеринарных наук, научный консультант лаборатории ИВЦ МВА.
            Специализация - лабораторная диагностика, врач-гематолог,
            врач-инфекционист, врач-кайфарик.
          </p>
        </div>
      </div>
      <Footer isDesktop={isDesktop} isMobile={isMobileOrTablet} />
    </div>
  );
};

export default Doctors;
