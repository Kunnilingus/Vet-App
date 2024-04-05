import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./actions.module.scss";
import Button from "@/components/Button/Button";
import card1 from "@/Assets/actions/дед с псом.png";
import { actions } from "@/utils/Actions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { useAuth } from "@/hooks/useAuth";
import { showMeetsModal } from "@/store/slices/modalsSlice";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

const Actions: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth, id } = useAuth();
  const goToAcc = () => {
    if (isAuth) {
      navigate("/account");
      dispatch(showMeetsModal());
    } else {
      alert("Вы не авторизованы");
    }
  };
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <div>
      {isDesktop ? <Header /> : <HeaderMobile />}
      <div className={isDesktop ? styles.container : styles.containerMobile}>
        <h1>Акции</h1>
        <div className={isDesktop ? styles.actions : styles.actionsMobile}>
          {actions.map((item) => (
            <div key={item.id} className={styles.card1}>
              <div className={styles.cardImg}>
                <img src={item.img} alt="cardImg" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className={styles.btn}>
                <Button
                  onClick={() => goToAcc()}
                  violet50
                  text="Записаться на приём"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer isDesktop={isDesktop} isMobile={isMobileOrTablet} />
    </div>
  );
};

export default Actions;
