import { FC } from "react";
import styles from "./reptilesServices.module.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { reptileServices } from "@/utils/ReptileServices";

const ReptilesServices: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Рептилии</h1>
        <div className={styles.cards}>
          {reptileServices.map((item) => (
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

export default ReptilesServices;
