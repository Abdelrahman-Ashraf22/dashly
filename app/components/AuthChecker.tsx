"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import LoadingSpinner from "../LoadingSpinner";
import dynamic from "next/dynamic";
const LoadingSpinner = dynamic(() => import("../LoadingSpinner"), {
  ssr: false,
});
// This function to check if the is a session go to the dashboard
export default function AuthChecker() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // first mounting if there is a session redirect to the dashboard home page
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  // If there is a session or the status if loading show the loading spinner
  if (status === "loading" || session) {
    return <LoadingSpinner />;
  }

  return null;
}
