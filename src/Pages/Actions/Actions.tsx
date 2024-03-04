import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./actions.module.scss";
import Button from "@/components/Button/Button";
import card1 from "@/Assets/дед с псом.png";

const Actions: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Акции</h1>
        <div className={styles.actions}>
          <div className={styles.card1}>
            <div className={styles.cardImg}>
              <img src={card1} alt="cardImg" />
            </div>
            <h2>Скидка пенсионерам 10% по будним дням</h2>
            <p>
              Скидка 10:00 до 16:00 по предварительной записи, по будним дням —
              10%
            </p>
            <div className={styles.btn}>
              <Button violet50 text="Записаться на приём" />
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.cardImg}>
              <img src={card1} alt="cardImg" />
            </div>
            <h2>Скидка пенсионерам 10% по будним дням</h2>
            <p>
              Скидка 10:00 до 16:00 по предварительной записи, по будним дням —
              10%
            </p>
            <div className={styles.btn}>
              <Button violet text="Записаться на приём" />
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.cardImg}>
              <img src={card1} alt="cardImg" />
            </div>
            <h2>Скидка пенсионерам 10% по будним дням</h2>
            <p>
              Скидка 10:00 до 16:00 по предварительной записи, по будним дням —
              10%
            </p>
            <div className={styles.btn}>
              <Button purple text="Записаться на приём" />
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.cardImg}>
              <img src={card1} alt="cardImg" />
            </div>
            <h2>Скидка пенсионерам 10% по будним дням</h2>
            <p>
              Скидка 10:00 до 16:00 по предварительной записи, по будним дням —
              10%
            </p>
            <div className={styles.btn}>
              <Button violet text="Записаться на приём" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Actions;
