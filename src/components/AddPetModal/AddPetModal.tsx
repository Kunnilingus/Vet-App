import { FC, useState } from "react";
import styles from "./addPetModal.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { hide } from "@/store/slices/callFormSlice";
import { IUser } from "@/models/IUser";
import Button from "../Button/Button";
import {
  setBird,
  setCat,
  setDog,
  setExot,
  setReptile,
  setRodent,
} from "@/store/slices/petSlice";

interface AddPetModalProps {
  user: IUser;
}
const AddPetModal: FC<AddPetModalProps> = ({ user }) => {
  const { flag } = useAppSelector((state) => state.callForm);
  const dispatch = useAppDispatch();
  const [selectValue, setSelectValue] = useState<string>("");
  const [sterilization, setSterelization] = useState<boolean>(false);
  const [endo, setEndo] = useState<boolean>(false);
  const [ecto, setEcto] = useState<boolean>(false);
  const [treatment, setTreatment] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  function handleSterelizationChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setSterelization(event.target.checked);
  }
  function handleEctoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEcto(event.target.checked);
  }
  function handleEndoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEndo(event.target.checked);
  }
  function handleTreatmentChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTreatment(event.target.checked);
  }
  function addPet() {
    switch (selectValue) {
      case "dogs":
        dispatch(
          setDog({
            id: user.id,
            age,
            breed,
            color,
            name,
            sterilization,
            ecto,
            endo,
          })
        );
        setSterelization(false);
        setEndo(false);
        setEcto(false);
        setName("");
        setAge("");
        setColor("");
        setBreed("");
        dispatch(hide());
        break;
      case "cats":
        dispatch(
          setCat({
            id: user.id,
            age,
            breed,
            color,
            name,
            sterilization,
            ecto,
            endo,
          })
        );
        setSterelization(false);
        setEndo(false);
        setEcto(false);
        setName("");
        setAge("");
        setColor("");
        setBreed("");
        dispatch(hide());
        break;
      case "rodents":
        dispatch(
          setRodent({
            id: user.id,
            age,
            species: breed,
            color,
            name,
            treatment,
          })
        );
        setName("");
        setAge("");
        setColor("");
        setBreed("");
        setTreatment(false);
        dispatch(hide());
        break;
      case "birds":
        dispatch(
          setBird({
            id: user.id,
            age,
            species: breed,
            color,
            name,
            treatment,
          })
        );
        setName("");
        setAge("");
        setColor("");
        setBreed("");
        setTreatment(false);
        dispatch(hide());
        break;
      case "reptiles":
        dispatch(
          setReptile({
            id: user.id,
            age,
            species: breed,
            color,
            name,
            treatment,
          })
        );
        setName("");
        setAge("");
        setColor("");
        setBreed("");
        setTreatment(false);
        dispatch(hide());
        break;
      case "exots":
        dispatch(
          setExot({
            id: user.id,
            age,
            species: breed,
            color,
            name,
            treatment,
          })
        );
        setName("");
        setAge("");
        setColor("");
        setBreed("");
        setTreatment(false);
        dispatch(hide());
        break;
    }
  }
  const dogOrCat =
    selectValue === "dogs" ? true : selectValue === "cats" ? true : false;
  return (
    <div className={flag ? styles.addPetModal : styles.none}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Регестрация питомца</h1>
          <div className={styles.select}>
            <p>Выберите вид животного:</p>
            <select onChange={(e) => setSelectValue(e.target.value)}>
              <option selected disabled>
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
          <div className={selectValue !== "" ? styles.dogs : styles.none}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Кличка"
            />
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="string"
              placeholder="Возраст"
            />
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              placeholder="Окрас"
            />
            <input
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              type="text"
              placeholder={dogOrCat ? "Порода" : "Вид животного/птицы"}
            />
            <div className={dogOrCat ? styles.checkbox : styles.none}>
              <p>Стерелизация:</p>
              <input
                checked={sterilization}
                onChange={handleSterelizationChange}
                type="checkbox"
                placeholder="Стерелизация"
              />
            </div>
            <div className={dogOrCat ? styles.checkbox : styles.none}>
              <p>Эктопаразиты:</p>
              <input
                checked={ecto}
                onChange={handleEctoChange}
                type="checkbox"
              />
            </div>
            <div className={dogOrCat ? styles.checkbox : styles.none}>
              <p>Эндопаразиты:</p>
              <input
                checked={endo}
                onChange={handleEndoChange}
                type="checkbox"
              />
            </div>
            <div className={dogOrCat ? styles.none : styles.checkbox}>
              <p>Обработка:</p>
              <input
                checked={treatment}
                onChange={handleTreatmentChange}
                type="checkbox"
              />
            </div>
            <div className={styles.btn}>
              <Button onClick={() => addPet()} text="Добавить" purple />
            </div>
          </div>
        </div>
        <div onClick={() => dispatch(hide())} className={styles.close}></div>
      </div>
    </div>
  );
};

export default AddPetModal;
