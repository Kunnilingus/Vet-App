import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./grooming.module.scss";
import groomong from "@/Assets/груминг.jpg";
import Ymap from "@/components/Ymap/Ymap";
import { groomingCoordinates } from "@/utils/GroomingCoordinates";

const Grooming: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.groomingList}>
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
          <div className={styles.map}>
            <Ymap array={groomingCoordinates} />
          </div>
        </div>
        <div className={styles.groomingImg}>
          <img src={groomong} alt="clinics" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Grooming;
