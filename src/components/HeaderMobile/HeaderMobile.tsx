import { FC } from "react";
import styles from "./headerMobile.module.scss";
import Butterfly from "@/Assets/butterfly.png";
import { useAuth } from "@/hooks/useAuth";
import { useAppSelector } from "@/hooks";
import { useNavigate } from "react-router-dom";

const HeaderMobile: FC = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const { id } = useAuth();
  const { users } = useAppSelector((state) => state.userInfo);
  const userInfo = users.find((item) => item.id === id);
  return (
    <div className={styles.header}>
      <div className={styles.firstLine}>
        <div onClick={() => navigate("/main")} className={styles.headerPics}>
          <img src={Butterfly} alt="Logo" />
        </div>
        {isAuth ? (
          <div
            className={styles.accountLink}
            onClick={() => navigate("/account")}
          >
            {userInfo.name}
          </div>
        ) : (
          <button onClick={() => navigate("/login")} className={styles.button}>
            Войти
          </button>
        )}
      </div>
      <div className={styles.secondLine}>
        <p onClick={() => navigate("/services")}>Услуги</p>
        <p onClick={() => navigate("/doctors")}>Врачи</p>
        <p onClick={() => navigate("/clinics")}>Клиники</p>
        <p onClick={() => navigate("/pharmacy")}>Ветаптеки</p>
        <p onClick={() => navigate("/petshops")}>Зоомагазины</p>
        <p onClick={() => navigate("/grooming")}>Груминг</p>
        <p onClick={() => navigate("/actions")}>Акции</p>
        <p onClick={() => navigate("/contacts")}>Контакты</p>
      </div>
    </div>
  );
};

export default HeaderMobile;
