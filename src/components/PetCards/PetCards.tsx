import { FC } from "react";
import styles from "./petCards.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Button from "../Button/Button";
import { IUser } from "@/models/IUser";
import { IDogList } from "@/models/IDogList";
import {
  deleteDog,
  deleteCat,
  deleteRodent,
  deleteBird,
  deleteReptile,
  deleteExot,
} from "@/store/slices/petSlice";
import { ICatList } from "@/models/ICatList";
import { IRodentList } from "@/models/IRodentList";
import { IBirdList } from "@/models/IBirdList";
import { IReptileList } from "@/models/IReptileList";
import { IExotList } from "@/models/IExotList";
import { getRandomInt } from "@/utils/GetRandomInt";

interface PetCardsProps {
  value: string;
  user: IUser;
}
const PetCards: FC<PetCardsProps> = ({ value, user }) => {
  const { dogs, cats, rodents, birds, reptiles, exots } = useAppSelector(
    (state) => state.pets
  );
  const dispatch = useAppDispatch();
  const currentDog = dogs.filter((item) => item.id === user.id);
  const currentCat = cats.filter((item) => item.id === user.id);
  const currentRodent = rodents.filter((item) => item.id === user.id);
  const currentBird = birds.filter((item) => item.id === user.id);
  const currentReptile = reptiles.filter((item) => item.id === user.id);
  const currentExot = exots.filter((item) => item.id === user.id);
  const deleteDogFromArr = (item: IDogList) => {
    const dog = currentDog.find((dog) => dog.name === item.name);
    const index = currentDog.indexOf(dog);
    dispatch(deleteDog(index));
  };
  const deleteCatFromArr = (item: ICatList) => {
    const cat = currentCat.find((cat) => cat.name === item.name);
    const index = currentCat.indexOf(cat);
    dispatch(deleteCat(index));
  };
  const deleteRodentFromArr = (item: IRodentList) => {
    const rodent = currentRodent.find((rodent) => rodent.name === item.name);
    const index = currentRodent.indexOf(rodent);
    dispatch(deleteRodent(index));
  };
  const deleteBirdFromArr = (item: IBirdList) => {
    const bird = currentBird.find((bird) => bird.name === item.name);
    const index = currentBird.indexOf(bird);
    dispatch(deleteBird(index));
  };
  const deleteReptileFromArr = (item: IReptileList) => {
    const reptile = currentReptile.find(
      (reptile) => reptile.name === item.name
    );
    const index = currentReptile.indexOf(reptile);
    dispatch(deleteReptile(index));
  };
  const deleteExotFromArr = (item: IExotList) => {
    const exot = currentExot.find((exot) => exot.name === item.name);
    const index = currentExot.indexOf(exot);
    dispatch(deleteExot(index));
  };
  switch (value) {
    case "dogs":
      return (
        <div className={styles.cards}>
          {currentDog.map((item) => (
            <div key={getRandomInt(1000)} className={styles.card}>
              <p>Кличка: {item.name}</p>
              <p>Порода: {item.breed}</p>
              <p>Окрас: {item.color}</p>
              <p>Возраст: {item.age}</p>
              <p>Кастрация: {item.sterilization ? "Да" : "Нет"}</p>
              <span>Обработка</span>
              <p>Эктопаразиты: {item.ecto ? "Да" : "Нет"}</p>
              <p>Эндопаразиты: {item.endo ? "Да" : "Нет"}</p>
              <div className={styles.btn}>
                <Button
                  onClick={() => deleteDogFromArr(item)}
                  violet80
                  text="Удалить питомца"
                />
              </div>
            </div>
          ))}
          <p className={currentDog.length > 0 ? styles.none : styles.noPets}>
            У Вас нет зарегестрированных собак.
          </p>
        </div>
      );
      break;
    case "cats":
      return (
        <div className={styles.cards}>
          {currentCat.map((item) => (
            <div key={getRandomInt(1000)} className={styles.card}>
              <p>Кличка: {item.name}</p>
              <p>Порода: {item.breed}</p>
              <p>Окрас: {item.color}</p>
              <p>Возраст: {item.age}</p>
              <p>Кастрация: {item.sterilization ? "Да" : "Нет"}</p>
              <span>Обработка</span>
              <p>Эктопаразиты: {item.ecto ? "Да" : "Нет"}</p>
              <p>Эндопаразиты: {item.endo ? "Да" : "Нет"}</p>
              <div className={styles.btn}>
                <Button
                  onClick={() => deleteCatFromArr(item)}
                  violet80
                  text="Удалить питомца"
                />
              </div>
            </div>
          ))}
          <p className={currentCat.length > 0 ? styles.none : styles.noPets}>
            У Вас нет зарегестрированных кошек.
          </p>
        </div>
      );
      break;
    case "rodents":
      return (
        <div className={styles.cards}>
          {currentRodent.map((item) => (
            <div key={getRandomInt(1000)} className={styles.card}>
              <p>Кличка: {item.name}</p>
              <p>Вид: {item.species}</p>
              <p>Окрас: {item.color}</p>
              <p>Возраст: {item.age}</p>
              <p>Обработка: {item.treatment ? "Да" : "Нет"}</p>
              <div className={styles.btn}>
                <Button
                  onClick={() => deleteRodentFromArr(item)}
                  violet80
                  text="Удалить питомца"
                />
              </div>
            </div>
          ))}
          <p className={currentRodent.length > 0 ? styles.none : styles.noPets}>
            У Вас нет зарегестрированных грызунов.
          </p>
        </div>
      );
      break;
    case "birds":
      return (
        <div className={styles.cards}>
          {currentBird.map((item) => (
            <div key={getRandomInt(1000)} className={styles.card}>
              <p>Кличка: {item.name}</p>
              <p>Вид: {item.species}</p>
              <p>Окрас: {item.color}</p>
              <p>Возраст: {item.age}</p>
              <p>Обработка: {item.treatment ? "Да" : "Нет"}</p>
              <div className={styles.btn}>
                <Button
                  onClick={() => deleteBirdFromArr(item)}
                  violet80
                  text="Удалить питомца"
                />
              </div>
            </div>
          ))}
          <p className={currentBird.length > 0 ? styles.none : styles.noPets}>
            У Вас нет зарегестрированных птиц.
          </p>
        </div>
      );
      break;
    case "reptiles":
      return (
        <div className={styles.cards}>
          {currentReptile.map((item) => (
            <div key={getRandomInt(1000)} className={styles.card}>
              <p>Кличка: {item.name}</p>
              <p>Вид: {item.species}</p>
              <p>Окрас: {item.color}</p>
              <p>Возраст: {item.age}</p>
              <p>Обработка: {item.treatment ? "Да" : "Нет"}</p>
              <div className={styles.btn}>
                <Button
                  onClick={() => deleteReptileFromArr(item)}
                  violet80
                  text="Удалить питомца"
                />
              </div>
            </div>
          ))}
          <p
            className={currentReptile.length > 0 ? styles.none : styles.noPets}
          >
            У Вас нет зарегестрированных рептилий.
          </p>
        </div>
      );
      break;
    case "exots":
      return (
        <div className={styles.cards}>
          {currentExot.map((item) => (
            <div key={getRandomInt(1000)} className={styles.card}>
              <p>Кличка: {item.name}</p>
              <p>Вид: {item.species}</p>
              <p>Окрас: {item.color}</p>
              <p>Возраст: {item.age}</p>
              <p>Обработка: {item.treatment ? "Да" : "Нет"}</p>
              <div className={styles.btn}>
                <Button
                  onClick={() => deleteExotFromArr(item)}
                  violet80
                  text="Удалить питомца"
                />
              </div>
            </div>
          ))}
          <p className={currentExot.length > 0 ? styles.none : styles.noPets}>
            У Вас нет зарегестрированных экзотов.
          </p>
        </div>
      );
      break;
  }
};

export default PetCards;
