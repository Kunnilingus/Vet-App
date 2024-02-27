import { FC } from "react";
import styles from "./app.module.scss";
import Header from "@/components/Header/Header";
import Corgie from "@/Assets/Коржик.png";
import Card from "@/Assets/ВрачСГлавной.png";

export const App: FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.greeting}>
        <div className={styles.block1}>
          <h2>
            Оставьте заявку
            <br /> и мы Вам
            <br /> перезвоним!
          </h2>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="+_()_ _ _-_ _-_ _" />
          <button>Отправить</button>
        </div>
        <div className={styles.corgie}>
          <img src={Corgie} alt="Corgie" />
        </div>
        <div className={styles.block2}>
          <h2>
            Вызов врача на дом
            <br /> 24/7
          </h2>
          <p>Понятные и низкие цены!</p>
          <p>
            <span>Врач высшей категории</span> через 30 минут
          </p>
          <p>
            <span>8(800)555-35-35</span>
          </p>
        </div>
      </div>
      <div className={styles.advantages}>
        <h1>Наши преимущества</h1>
        <div className={styles.cards}>
          <div className={styles.card1}></div>
          <div className={styles.card2}></div>
          <div className={styles.card3}>
            <div>
              <img src={Card} alt="Card3" />
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card4}></div>
          <div className={styles.card5}></div>
          <div className={styles.card6}></div>
        </div>
      </div>
    </div>
  );
};
