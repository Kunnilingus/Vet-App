import { FC } from "react";
import Header from "@/components/Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import { useAppDispatch } from "@/hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "@/store/slices/userSlice";
import { app } from "@/firebase";
import LoginForm from "@/components/LoginForm/LoginForm";
import { setUserSettings } from "@/store/slices/userInfoSlice";

const Register: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleRegister = (
    email: string,
    password: string,
    name: string,
    secondName: string,
    thirdName: string,
    number: string
  ) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        dispatch(
          setUserSettings({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name,
            secondName,
            thirdName,
            number,
            password,
          })
        );
        navigate("/account");
      })
      .catch(console.error);
  };
  return (
    <div>
      <Header />
      <LoginForm mode="register" title="Регистрация" onClick={handleRegister} />
      <Footer />
    </div>
  );
};

export default Register;
