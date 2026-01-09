"use server";
import { signIn, signOut } from "@/app/auth";

export const login = async () => {
  await signIn("github", { redirectTo: "/dashboard" });
};

export const loginGoogle = async () => {
  await signIn("google", { redirectTo: "/dashboard" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
