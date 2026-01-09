import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import AuthChecker from "./components/AuthChecker";

export default function Home() {
  return (
    <>
      <AuthChecker />
      <Header />
      <Login />
    </>
  );
}
