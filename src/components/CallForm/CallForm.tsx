import { FC } from "react";
import styles from "./callForm.module.scss";

const CallForm: FC = () => {
  return (
    <div className={styles.callForm}>
      <div className={styles.header}>
        Оставьте заявку и мы свяжемся с Вами для
        <br /> подтверждения записи
      </div>
      <input type="text" placeholder="Имя" />
      <input type="text" placeholder="+_()_ _ _-_ _-_ _" />
      <button>Отправить</button>
    </div>
  );
};

export default CallForm;
