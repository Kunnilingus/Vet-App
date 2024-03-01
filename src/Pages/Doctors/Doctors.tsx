import Header from "@/components/Header/Header";
import { FC } from "react";
import styles from "./doctors.module.scss";
import doc from "@/Assets/Врач.jpg";
import Footer from "@/components/Footer/Footer";

const Doctors: FC = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Наши специалисты</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
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
        <div className={styles.card}>
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
        <div className={styles.card}>
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
        <div className={styles.card}>
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
        <div className={styles.card}>
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
        <div className={styles.card}>
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
        <div className={styles.card}>
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
        <div className={styles.card}>
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
        <div className={styles.card}>
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
      <Footer />
    </div>
  );
};

export default Doctors;
