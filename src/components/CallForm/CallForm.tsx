import { FC } from "react";
import styles from "./callForm.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { show } from "@/store/slices/modalsSlice";
import { useAuth } from "@/hooks/useAuth";

const CallForm: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, id } = useAuth();
  const { users } = useAppSelector((state) => state.userInfo);
  const userInfo = users.find((item) => item.id === id);
  return (
    <div className={styles.callForm}>
      <div className={styles.header}>
        Оставьте заявку и мы свяжемся с Вами для
        <br /> подтверждения записи
      </div>
      <input
        value={isAuth ? userInfo.name : ""}
        type="text"
        placeholder="Имя"
        required
      />
      <input
        value={isAuth ? userInfo.number : ""}
        type="text"
        placeholder="+_()_ _ _-_ _-_ _"
        required
      />
      <button onClick={() => dispatch(show())}>Отправить</button>
    </div>
  );
};

export default CallForm;
