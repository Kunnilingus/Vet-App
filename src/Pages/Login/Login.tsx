import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { setUser } from "@/store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import { useAuth } from "@/hooks/useAuth";
import LoginForm from "@/components/LoginForm/LoginForm";

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );

        navigate("/account");
      })
      .catch(() => alert("Неверные данные"));
  };
  return (
    <div>
      <Header />
      <LoginForm mode="login" title="Войти" onClick={handleLogin} />
      <Footer />
    </div>
  );
};

export default Login;
