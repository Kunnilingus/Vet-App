import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./dogServices.module.scss";
import Button from "@/components/Button/Button";
import { dogSrevices } from "@/utils/DogServices";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { useAuth } from "@/hooks/useAuth";
import { showMeetsModal } from "@/store/slices/modalsSlice";

const DogServices: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const goToAcc = () => {
    if (isAuth) {
      navigate("/account");
      dispatch(showMeetsModal());
    } else {
      alert("Вы не авторизованы");
    }
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Собаки</h1>
        <div className={styles.cards}>
          {dogSrevices.map((item) => (
            <div key={item.id} className={styles.card1}>
              <div className={styles.cardImg}>
                <img src={item.img} alt="cardImg" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className={styles.price}>Цена услуги: {item.price} ₽</div>
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
      <Footer />
    </div>
  );
};

export default DogServices;
