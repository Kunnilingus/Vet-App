import { FC } from "react";
import styles from "./exotServices.module.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { exotServices } from "@/utils/ExotServices";

const ExotServices: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Экзоты</h1>
        <div className={styles.cards}>
          {exotServices.map((item) => (
            <div key={item.id} className={styles.card1}>
              <div className={styles.cardImg}>
                <img src={item.img} alt="cardImg" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className={styles.price}>Цена услуги: {item.price} ₽</div>
              <div className={styles.btn}>
                <Button violet50 text="Записаться на приём" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExotServices;
