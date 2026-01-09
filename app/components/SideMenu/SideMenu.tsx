"use client";

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Analytics, Settings } from "@mui/icons-material";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useMediaQuery } from "@mui/material";

// The width of the SideMenu
const drawerWidth = 240;

// If the side menu is opened show the icons and the labels
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// If the side menu is closed show the icons only
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Styling the arrow Icon
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Styling the side menu
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  color: theme.palette.text.primary,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

// Menu list's Routing
const menuRouteList = ["data", "analytics", "profile", "settings", ""];
// Menu list's labels
const menuListTranslations = [
  "Data",
  "Analytics",
  "Profile",
  "Settings",
  "Sign Out",
];
// The Icons in the side menu
const menuListIcons = [
  <EqualizerIcon key="data" />,
  <Analytics key="analytics" />,
  <Person2Icon key="profile" />,
  <Settings key="settings" />,
  <ExitToAppIcon key="signout" />,
];

export default function SideMenu() {
  // Theme style Dark/light
  const theme = useTheme();
  // SetState for handling the side menu "opened or closed"
  const [open, setOpen] = React.useState(false);

  // Mobile Screen - Fixed the closing parenthesis
  const mobileScreen = useMediaQuery("(min-width: 600px)");

  // Handle function to toggle the arrow Icon to close or open the side menu
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // A function to handle if the clicked list item has a label "Sign Out" to run the function SignOut()
  const handleListItemButtonClick = (text: string) => {
    if (text === "Sign Out") {
      signOut({ redirectTo: "/" });
    }
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          left: 0,
          top: mobileScreen ? 64 : 57,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: open ? "flex-end" : "center",
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
      </Box>
      <Divider />

      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ display: "block" }}
          >
            <Link
              href={
                menuRouteList[index]
                  ? `/dashboard/${menuRouteList[index]}`
                  : `/dashboard`
              }
            >
              <ListItemButton
                onClick={() => handleListItemButtonClick(text)}
                title={text}
                aria-label={text}
                sx={[
                  {
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
