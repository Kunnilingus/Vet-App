import { FC } from "react";
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
import { show, showMeetsModal } from "@/store/slices/modalsSlice";
import { useAuth } from "@/hooks/useAuth";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

export const App: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth, id } = useAuth();
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const { users } = useAppSelector((state) => state.userInfo);
  const userInfo = users.find((item) => item.id === id);
  const goToAcc = () => {
    if (isAuth) {
      navigate("/account");
      dispatch(showMeetsModal());
    } else {
      alert("Вы не авторизованы");
    }
  };
  return (
    <div className={styles.App}>
      {isDesktop ? <Header /> : <HeaderMobile />}
      <div className={isDesktop ? styles.greeting : styles.greetingMobile}>
        <div className={isDesktop ? styles.block1 : styles.block1Mobile}>
          <h2>
            Оставьте заявку
            <br /> и мы Вам
            <br /> перезвоним!
          </h2>
          <input
            defaultValue={isAuth ? userInfo.name : ""}
            type="text"
            placeholder="Имя"
            required
          />
          <input
            defaultValue={isAuth ? userInfo.number : ""}
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
        <div className={isDesktop ? styles.corgie : styles.corgieMobile}>
          <img src={Corgie} alt="Corgie" />
        </div>
        <div className={isDesktop ? styles.block2 : styles.block2Mobile}>
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
      <div className={isDesktop ? styles.advantages : styles.advantagesMobile}>
        <h1>Наши преимущества</h1>
        <div className={isDesktop ? styles.cards : styles.cardsMobile}>
          <div className={isDesktop ? styles.card1 : styles.card1Mobile}>
            <h2>О наших клиниках</h2>
            <ul>
              <li>Программы лояльности</li>
              <li>Современные методы дигностики</li>
              <li>Высокая техническая оснащённость</li>
              <li>Квалифицированные кадры</li>
              <li>Индивидуальный подход</li>
              <li>Шаговая доступность</li>
            </ul>
            <div className={isDesktop ? styles.btn : styles.btnMobile}>
              <Button
                onClick={() => goToAcc()}
                violet
                text="Записаться на приём"
              />
            </div>
          </div>
          <div className={isDesktop ? styles.card2 : styles.card2Mobile}>
            <h2>Постоянно повышаем квалификацию</h2>
            <p>
              Врачи сети постоянно повышают квалификацию, посещая профильные
              образовательные мероприятия
            </p>
          </div>
          <div className={isDesktop ? styles.card3 : styles.card3Mobile}>
            <div>
              <img src={Card} alt="Card3" />
            </div>
          </div>
        </div>
        <div className={isDesktop ? styles.cards : styles.cardsMobile}>
          <div className={isDesktop ? styles.card4 : styles.card4Mobile}>
            <h2>Удобное расположение клиник</h2>
            <p>
              Все клиники расположены недалеко от станций метро и остановок
              транспора
            </p>
            <button onClick={() => navigate("/clinics")}>
              Показать адреса
            </button>
          </div>
          <div className={isDesktop ? styles.card5 : styles.card5Mobile}>
            <h2>Собственные ветеринарные аптеки</h2>
            <p>
              Большой ассортимент ветеринарных препаратов в каждой из наших
              аптек
            </p>
            <div>
              <img src={CardPic} alt="cardPic" />
            </div>
          </div>
          <div className={isDesktop ? styles.card6 : styles.card6Mobile}>
            <h2>Консультируем удаленно</h2>
            <p>Предоставляем удаленные консультации с нашими специалистами</p>
            <span>+8 (800)-555-35-35</span>
          </div>
        </div>
      </div>
      <div className={isDesktop ? styles.callForm : styles.callFormMobile}>
        <CallForm isDesktop={isDesktop} />
      </div>
      <div className={isDesktop ? styles.map : styles.mapMobile}>
        <Ymap array={allCoordinates} />
      </div>
      <CallAply />
      <Footer isDesktop={isDesktop} isMobile={isMobileOrTablet} />
    </div>
  );
};
