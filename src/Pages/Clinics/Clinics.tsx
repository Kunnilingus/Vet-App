import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FC } from "react";
import styles from "./clinics.module.scss";
import clinics from "@/Assets/Клиники.png";
import Ymap from "@/components/Ymap/Ymap";
import { clinicsCoordinates } from "@/utils/ClinicsCoordinates";

const Clinics: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.clinicsList}>
          <h1>Клиники</h1>
          <h2>
            Все наши клиники расположены рядом с метро и остановками
            транспорта,вот их адреса:
          </h2>
          <ul>
            <li>
              Ветеринарная клиника Ленинский проспект г. Москва, Ленинский
              проспект, д. 69 Рядом метро: Университет Академическая Профсоюзная
            </li>
            <li>
              Ветеринарная клиника Карамышевская г. Москва, Карамышевская
              набережная, 48 к1 Рядом метро: Хорошёво
            </li>
            <li>
              Ветеринарная клиника на Сухаревской г. Москва, Даев переулок, 14.
              Рядом метро: Сухаревская
            </li>
          </ul>
          <div className={styles.map}>
            <Ymap array={clinicsCoordinates} />
          </div>
        </div>
        <div className={styles.clinicsImg}>
          <img src={clinics} alt="clinics" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Clinics;
