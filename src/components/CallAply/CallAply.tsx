import { FC, useState } from "react";
import styles from "./callAply.module.scss";
import Button from "../Button/Button";

interface CallAplyProps {
  state?: boolean;
}
const CallAply: FC<CallAplyProps> = ({ state }) => {
  const [cancelState, setCancelState] = useState<boolean>(true);
  function changeState() {
    return (state = false);
  }

  return (
    <div className={state ? styles.callAply : styles.none}>
      <div onClick={() => changeState()} className={styles.close}></div>
      <div className={cancelState ? styles.info : styles.none}>
        <h2>Вы оставили заявку!</h2>
        <p>
          Наш сотрудник свяжется с вами в течение часа для уточнения
          деталей,пожалуйста ожидайте.
        </p>
        <p>Вы так же можете отменить заявку</p>
      </div>
      <h3 className={cancelState === true ? styles.none : styles.cancel}>
        Заявка отменена!
      </h3>
      <div>
        <Button
          onClick={() => setCancelState(false)}
          violet
          text="Отменить заявку"
        />
      </div>
    </div>
  );
};

export default CallAply;
