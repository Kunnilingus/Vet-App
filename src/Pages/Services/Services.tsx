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

const Services: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1 className={styles.services}>Услуги</h1>
      <div className={styles.cards}>
        <div onClick={() => navigate("/services/dogs")} className={styles.card}>
          <img className={styles.cardImg} src={dog} alt="dog" />
          <h2>Собаки</h2>
        </div>
        <div onClick={() => navigate("/services/cats")} className={styles.card}>
          <img className={styles.cardImg} src={cat} alt="dog" />
          <h2>Кошки</h2>
        </div>
        <div
          onClick={() => navigate("/services/rodents")}
          className={styles.card}
        >
          <img className={styles.cardImg} src={rat} alt="dog" />
          <h2>Грызуны</h2>
        </div>
        <div
          onClick={() => navigate("/services/birds")}
          className={styles.card}
        >
          <img className={styles.cardImg} src={birds} alt="dog" />
          <h2>Птицы</h2>
        </div>
        <div
          onClick={() => navigate("/services/reptiles")}
          className={styles.card}
        >
          <img className={styles.cardImg} src={reptiles} alt="dog" />
          <h2>Рептилии</h2>
        </div>
        <div
          onClick={() => navigate("/services/exots")}
          className={styles.card}
        >
          <img className={styles.cardImg} src={exots} alt="dog" />
          <h2>Экзоты</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
