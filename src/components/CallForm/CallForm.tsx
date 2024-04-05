import { FC } from "react";
import styles from "./callForm.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { show } from "@/store/slices/modalsSlice";
import { useAuth } from "@/hooks/useAuth";

interface CallFormProps {
  isMobile?: boolean;
  isDesktop?: boolean;
}
const CallForm: FC<CallFormProps> = ({ isDesktop, isMobile }) => {
  const dispatch = useAppDispatch();
  const { isAuth, id } = useAuth();
  const { users } = useAppSelector((state) => state.userInfo);
  const userInfo = users.find((item) => item.id === id);
  return (
    <div className={isDesktop ? styles.callForm : styles.callFormMobile}>
      <div className={isDesktop ? styles.header : styles.headerMobile}>
        Оставьте заявку и мы свяжемся с Вами для
        <br /> подтверждения записи
      </div>
      <input
        defaultValue={isAuth ? userInfo.name : ""}
        type="text"
        placeholder="Имя"
        required
      />
      <input
        defaultValue={isAuth ? userInfo.number : ""}
        type="text"
        placeholder="+_()_ _ _-_ _-_ _"
        required
      />
      <button onClick={() => dispatch(show())}>Отправить</button>
    </div>
  );
};

export default CallForm;
