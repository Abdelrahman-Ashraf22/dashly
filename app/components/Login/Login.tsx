"use client";
import { useSession, signIn } from "next-auth/react";
import Button from "@mui/material/Button";
import dynamic from "next/dynamic";
const LoadingSpinner = dynamic(() => import("../../LoadingSpinner"), {
  ssr: false,
});
const Login = () => {
  // Destructuring the Data from the current session
  const { data: session, status } = useSession();

  // If there is a session show the progress loader
  if (session || status === "loading") {
    return <LoadingSpinner />;
  }

  // If there isn't a session show the Sign in

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen gap-5">
      <h2>Please Sign in</h2>
      <Button
        variant={"contained"}
        color={"success"}
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    </div>
  );
};

export default Login;
