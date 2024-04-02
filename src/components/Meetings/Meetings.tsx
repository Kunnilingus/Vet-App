import { FC } from "react";
import styles from "./meetings.module.scss";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IUser } from "@/models/IUser";
import { getRandomInt } from "../../utils/GetRandomInt";
import { IMeeting } from "@/models/IMeeting";
import { deleteMeeting } from "@/store/slices/meetingSlice";

interface MeetingsProps {
  user: IUser;
}
const Meetings: FC<MeetingsProps> = ({ user }) => {
  const { meeting } = useAppSelector((state) => state.meetings);
  const currentUserMeets = meeting.filter((item) => item.id === user.id);
  const dispatch = useAppDispatch();
  const deleteMeet = (item: IMeeting) => {
    const meet = currentUserMeets.find((meet) => meet.name === item.name);
    const index = currentUserMeets.indexOf(meet);
    dispatch(deleteMeeting(index));
  };
  return (
    <div className={styles.cards}>
      {currentUserMeets.map((item) => (
        <div key={getRandomInt(1000)} className={styles.card}>
          <p>На приём идёт: {item.name}</p>
          <p>Дата приёма: {item.date}</p>
          <p>Жалобы на: {item.complaints}</p>
          <p>Ваш врач: {item.doctor}</p>
          <p>Стоимость приёма: {item.price} ₽</p>
          <div className={styles.meetBtn2}>
            <Button
              onClick={() => deleteMeet(item)}
              violet
              text="Отменить приём"
            />
          </div>
        </div>
      ))}
      <p className={meeting.length > 0 ? styles.none : styles.noMeets}>
        Вы не записаны ни на один приём.
      </p>
    </div>
  );
};

export default Meetings;
