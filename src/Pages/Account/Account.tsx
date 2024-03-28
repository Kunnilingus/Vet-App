import { FC, useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./account.module.scss";
import Button from "@/components/Button/Button";
import { useAuth } from "@/hooks/useAuth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeUser } from "@/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import PetCards from "@/components/PetCards/PetCards";
import AddPetModal from "@/components/AddPetModal/AddPetModal";
import { show } from "@/store/slices/callFormSlice";

const Account: FC = () => {
  const { email, id } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users } = useAppSelector((state) => state.userInfo);
  const userInfo = users.find((item) => item.id === id);
  const logout = () => {
    dispatch(removeUser());
    navigate("/home");
  };
  console.log(userInfo);
  const [state, setState] = useState<string>("dogs");
  return (
    <div>
      <AddPetModal user={userInfo} />
      <Header />
      <div className={styles.container}>
        <div className={styles.exit}>
          <h1>Личный кабинет</h1>
          <Button onClick={() => logout()} purple text="Выйти" />
        </div>
        <ul>
          <li>Фамилия: {userInfo.secondName}</li>
          <li>Имя: {userInfo.name}</li>
          <li>Отчество: {userInfo.thirdName}</li>
          <li>Номер телефона: {userInfo.number}</li>
          <li>Email: {email}</li>
        </ul>
        <div className={styles.pets}>
          <h2>Мои питомцы</h2>
          <div className={styles.select}>
            <select onChange={(e) => setState(e.target.value)}>
              <option value="dogs">Собаки</option>
              <option value="cats">Кошки</option>
              <option value="rodents">Грызуны</option>
              <option value="birds">Птицы</option>
              <option value="reptiles">Рептилии</option>
              <option value="exots">Экзоты</option>
            </select>
            <Button
              onClick={() => dispatch(show())}
              violetBorder
              text="Добавить"
            />
          </div>
          <PetCards value={state} user={userInfo} />
        </div>
        <div className={styles.meets}>
          <h3>Мои ближайшие приёмы у врачей</h3>
          <div className={styles.btn}>
            <Button purpleBorder text="Записаться на приём" />
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p>На приём идёт:</p>
              <p>Дата приёма:</p>
              <p>Жалобы на:</p>
              <p>Ваш врач:</p>
              <p>Стоимость приёма:</p>
              <div className={styles.meetBtn}>
                <Button violet50 text="Перенести приём" />
              </div>
              <div className={styles.meetBtn}>
                <Button violet text="Отменить приём" />
              </div>
            </div>
            <div className={styles.card}></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
