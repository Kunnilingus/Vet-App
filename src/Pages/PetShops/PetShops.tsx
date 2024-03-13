import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./petShops.module.scss";
import petShop from "@/Assets/зоомагазин.jpg";
import Ymap from "@/components/Ymap/Ymap";
import { petShopsCoordinates } from "@/utils/PetShopsCoordinates";

const PetShops: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.petShopList}>
          <h1>Зоомагазины</h1>
          <ul>
            <li>
              Зоомагазин Ясенево Россия, Москва, Литовский бульвар, 7. Рядом
              метро: Яснево
            </li>
            <li>
              Зоомагазин на Тимирязевской Россия, Москва, Красностуденческий
              проезд, 2. Рядом метро: Тимирязевская
            </li>
            <li>
              Зоомагазин Ленинский проспект г. Москва, Ленинский проспект, д. 69
              Рядом метро: Университет Академическая Профсоюзная
            </li>
            <li>
              Зоомагазин Карамышевская г. Москва, Карамышевская набережная, 48
              к1 Рядом метро: Хорошёво
            </li>
            <li>
              Зоомагазин на Сухаревской г. Москва, Даев переулок, 14. Рядом
              метро: Сухаревская
            </li>
          </ul>
          <div className={styles.map}>
            <Ymap array={petShopsCoordinates} />
          </div>
        </div>
        <div className={styles.petShopImg}>
          <img src={petShop} alt="clinics" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetShops;
