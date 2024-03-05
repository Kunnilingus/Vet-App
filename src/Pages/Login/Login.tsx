import { FC } from "react";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";

const Login: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.header}>Вход</h1>
        <input className={styles.login} type="text" placeholder="Логин" />
        <input
          className={styles.password}
          type="password"
          placeholder="Пароль"
        />
        <Button purple50 text="Войти" />
        <p className={styles.register}>
          Нет аккаунта? <Link to="/register">Зарегестрироваться</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
