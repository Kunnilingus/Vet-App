import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./addMeetModal.module.scss";
import { hideMeetsModal } from "@/store/slices/modalsSlice";
import { IUser } from "@/models/IUser";
import { setMeeting } from "@/store/slices/meetingSlice";
import { getRandomInt } from "@/utils/GetRandomInt";
import Button from "../Button/Button";

interface AddMeetModalProps {
  user: IUser;
}
const AddMeetModal: FC<AddMeetModalProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const { meetsModalFlag } = useAppSelector((state) => state.modals);
  const { meeting } = useAppSelector((state) => state.meetings);
  const { dogs, cats, rodents, birds, reptiles, exots } = useAppSelector(
    (state) => state.pets
  );
  const currentDog = dogs.filter((item) => item.id === user.id);
  const currentCat = cats.filter((item) => item.id === user.id);
  const currentRodent = rodents.filter((item) => item.id === user.id);
  const currentBird = birds.filter((item) => item.id === user.id);
  const currentReptile = reptiles.filter((item) => item.id === user.id);
  const currentExot = exots.filter((item) => item.id === user.id);
  const [selectValue, setSelectValue] = useState<string>("");
  const [petSelectValue, setPetSelectValue] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [complaints, setComplaints] = useState<string>("");
  const choosePet = () => {
    switch (selectValue) {
      case "dogs":
        return currentDog.map((item) => (
          <option value={`${item.name}`}>{item.name}</option>
        ));
        break;
      case "cats":
        return currentCat.map((item) => (
          <option value={`${item.name}`}>{item.name}</option>
        ));
        break;
      case "rodents":
        return currentRodent.map((item) => (
          <option value={`${item.name}`}>{item.name}</option>
        ));
        break;
      case "birds":
        return currentBird.map((item) => (
          <option value={`${item.name}`}>{item.name}</option>
        ));
        break;
      case "reptiles":
        return currentReptile.map((item) => (
          <option value={`${item.name}`}>{item.name}</option>
        ));
        break;
      case "exots":
        return currentExot.map((item) => (
          <option value={`${item.name}`}>{item.name}</option>
        ));
        break;
    }
  };
  const addMeet = () => {
    dispatch(
      setMeeting({
        id: user.id,
        name: petSelectValue,
        complaints,
        date,
        doctor: "Вяткина Алина Александровна",
        price: "5000",
      })
    );
    dispatch(hideMeetsModal());
  };
  return (
    <div className={meetsModalFlag ? styles.addPetModal : styles.none}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Запись на приём</h1>
          <div className={styles.select}>
            <p>Выберите вид животного:</p>
            <select
              defaultValue="выберите"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="выберите" disabled>
                Выберите
              </option>
              <option value="dogs">Собаки</option>
              <option value="cats">Кошки</option>
              <option value="rodents">Грызуны</option>
              <option value="birds">Птицы</option>
              <option value="reptiles">Рептилии</option>
              <option value="exots">Экзоты</option>
            </select>
          </div>
          <div>
            <div className={styles.nameSelect}>
              <p>Кто идёт на приём:</p>
              <select
                onChange={(e) => setPetSelectValue(e.target.value)}
                defaultValue="выберите"
              >
                <option value="выберите" disabled>
                  Выберите
                </option>
                {choosePet()}
              </select>
            </div>
            <div className={styles.dateSelect}>
              <p>Выберите дату приёма:</p>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </div>
            <div className={styles.complaintsSelect}>
              <p>Жалобы на:</p>
              <input
                value={complaints}
                onChange={(e) => setComplaints(e.target.value)}
                type="text"
                placeholder="Причина"
              />
            </div>
            <div className={styles.textarea}>
              <p>Опишите симптомы подробнее:</p>
              <textarea placeholder="Опишите жалобы тут"></textarea>
            </div>
          </div>
          <div className={styles.btn}>
            <Button onClick={() => addMeet()} violet80 text="Записаться" />
          </div>
        </div>
        <div
          onClick={() => dispatch(hideMeetsModal())}
          className={styles.close}
        ></div>
      </div>
    </div>
  );
};

export default AddMeetModal;
