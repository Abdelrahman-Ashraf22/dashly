import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { Paper, useTheme, Box } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

const Footer = () => {
  // Destructuring the data from the current session
  const { data: session } = useSession();
  // Theme option
  const theme = useTheme();

  // Creating the Footer items with styles
  const FooterLink = styled(Link)`
    color: ${theme.palette.primary.main};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: "-0",
        left: 0,
        right: 0,
        width: "100%",
      }}
    >
      <Paper sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Box
          component="ul"
          role="menu"
          sx={{
            display: { xs: "none", sm: "flex" },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            listStyleType: "none",
            margin: "auto",
            width: "100%",
            paddingLeft: { xs: 4 },
            paddingRight: { xs: 4 },
          }}
        >
          <Box
            component="li"
            sx={{ p: "1rem" }}
          >
            <FooterLink href={"/"}>Home</FooterLink>
          </Box>
          <Box
            component="li"
            sx={{ p: "1rem" }}
          >
            <FooterLink href={"/dashboard/data"}>Data</FooterLink>
          </Box>
          <Box
            component="li"
            sx={{ p: "1rem" }}
          >
            <FooterLink href={"/dashboard/analytics"}>Analytics</FooterLink>
          </Box>
          <Box
            component="li"
            sx={{ p: "1rem" }}
          >
            <FooterLink href={"/dashboard/profile"}>Profile</FooterLink>
          </Box>
          <Box
            component="li"
            sx={{ p: "1rem" }}
          >
            <FooterLink href={"/dashboard/settings"}>Settings</FooterLink>
          </Box>
          <Box
            component="li"
            sx={{ p: "1rem" }}
          >
            <FooterLink href={"/terms"}>Terms & Conditions</FooterLink>
          </Box>

          <Box
            component="li"
            sx={{ p: "1rem" }}
          >
            <Button
              variant={"text"}
              color={session ? "error" : "success"}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;
