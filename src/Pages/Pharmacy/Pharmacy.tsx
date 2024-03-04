import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./pharmacy.module.scss";
import pharmacy from "@/Assets/Ветаптека.jpg";

const Pharmacy: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.pharmacyList}>
          <h1>Ветаптеки</h1>
          <ul>
            <li>
              Ветеринарная аптека Ясенево Россия, Москва, Литовский бульвар, 7.
              Рядом метро: Яснево
            </li>
            <li>
              Ветеринарная аптека на Тимирязевской Россия, Москва,
              Красностуденческий проезд, 2. Рядом метро: Тимирязевская
            </li>
            <li>
              Ветеринарная клиника на Сухаревской г. Москва, Даев переулок, 14.
              Рядом метро: Сухаревская
            </li>
          </ul>
        </div>
        <div className={styles.pharmacyImg}>
          <img src={pharmacy} alt="clinics" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pharmacy;
