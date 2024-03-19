import { FC } from "react";
import styles from "./callForm.module.scss";
import { useAppDispatch } from "@/hooks";
import { show } from "@/store/slices/callFormSlice";

const CallForm: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.callForm}>
      <div className={styles.header}>
        Оставьте заявку и мы свяжемся с Вами для
        <br /> подтверждения записи
      </div>
      <input type="text" placeholder="Имя" required />
      <input type="text" placeholder="+_()_ _ _-_ _-_ _" required />
      <button onClick={() => dispatch(show())}>Отправить</button>
    </div>
  );
};

export default CallForm;
