import { FC, useState } from "react";
import styles from "./app.module.scss";
import Header from "@/components/Header/Header";
import Corgie from "@/Assets/Коржик.png";
import Card from "@/Assets/ВрачСГлавной.png";
import CardPic from "@/Assets/КрестКарта.png";
import CallForm from "@/components/CallForm/CallForm";
import Footer from "@/components/Footer/Footer";
import CallAply from "@/components/CallAply/CallAply";
import Button from "@/components/Button/Button";
import Ymap from "@/components/Ymap/Ymap";
import { allCoordinates } from "@/utils/AllCoordinates";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { show } from "@/store/slices/modalsSlice";
import { useAuth } from "@/hooks/useAuth";

export const App: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { flag, cancellState } = useAppSelector((state) => state.modals);
  const { isAuth, id } = useAuth();
  const { users } = useAppSelector((state) => state.userInfo);
  const userInfo = users.find((item) => item.id === id);
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
          <input
            value={isAuth ? userInfo.name : ""}
            type="text"
            placeholder="Имя"
            required
          />
          <input
            value={isAuth ? userInfo.number : ""}
            type="number"
            placeholder="+_()_ _ _-_ _-_ _"
            required
          />
          <div className={styles.btnNone}>
            <Button
              onClick={() => dispatch(show())}
              purple50
              text="Отправить"
            />
          </div>
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
          <div className={styles.card1}>
            <h2>О наших клиниках</h2>
            <ul>
              <li>Программы лояльности</li>
              <li>Современные методы дигностики</li>
              <li>Высокая техническая оснащённость</li>
              <li>Квалифицированные кадры</li>
              <li>Индивидуальный подход</li>
              <li>Шаговая доступность</li>
            </ul>
            <button>Записаться на приём</button>
          </div>
          <div className={styles.card2}>
            <h2>Постоянно повышаем квалификацию</h2>
            <p>
              Врачи сети постоянно повышают квалификацию, посещая профильные
              образовательные мероприятия
            </p>
          </div>
          <div className={styles.card3}>
            <div>
              <img src={Card} alt="Card3" />
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card4}>
            <h2>Удобное расположение клиник</h2>
            <p>
              Все клиники расположены недалеко от станций метро и остановок
              транспора
            </p>
            <button onClick={() => navigate("/clinics")}>
              Показать адреса
            </button>
          </div>
          <div className={styles.card5}>
            <h2>Собственные ветеринарные аптеки</h2>
            <p>
              Большой ассортимент ветеринарных препаратов в каждой из наших
              аптек
            </p>
            <div>
              <img src={CardPic} alt="cardPic" />
            </div>
          </div>
          <div className={styles.card6}>
            <h2>Консультируем удаленно</h2>
            <p>Предоставляем удаленные консультации с нашими специалистами</p>
            <span>+8 (800)-555-35-35</span>
          </div>
        </div>
      </div>
      <div className={styles.callForm}>
        <CallForm />
      </div>
      <div className={styles.map}>
        <Ymap array={allCoordinates} />
      </div>
      <CallAply />
      <Footer />
    </div>
  );
};
