import { FC, useState } from "react";
import styles from "./callAply.module.scss";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { hide, cancell } from "@/store/slices/callFormSlice";

const CallAply: FC = () => {
  const { flag, cancellState } = useAppSelector((state) => state.callForm);
  const dispatch = useAppDispatch();
  const hideWindow = () => {
    dispatch(hide());
    dispatch(cancell(true));
  };
  return (
    <div className={flag ? styles.callAply : styles.none}>
      <div onClick={() => dispatch(hideWindow)} className={styles.close}></div>
      <div className={styles.info}>
        <div className={cancellState ? styles.infoToHide : styles.none}>
          <h2>Вы оставили заявку!</h2>
          <p>
            Наш сотрудник свяжется с вами в течение часа для уточнения
            деталей,пожалуйста ожидайте.
          </p>
          <p>Вы так же можете отменить заявку</p>
        </div>
        <div className={cancellState ? styles.none : styles.cancel}>
          Заявка отменена!
        </div>
        <div className={styles.cancellBtn}>
          <Button
            onClick={() => dispatch(cancell(false))}
            violet
            text="Отменить заявку"
          />
        </div>
      </div>
    </div>
  );
};

export default CallAply;
