"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import LoadingSpinner from "../LoadingSpinner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (!session) {
    redirect("/");
  }

  return (
    <Box component="main">
      <Header />
      <Box sx={{ maxWidth: "85rem", margin: "auto" }}>
        <SideMenu />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: { xs: "57px", sm: "65px" },
          }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
