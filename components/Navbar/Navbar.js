import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import StarIcon from "@mui/icons-material/Star";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InfoIcon from "@mui/icons-material/Info";
import SignUp from "../SignUp/SignUp";
import WriteBlog from "../WriteBlog/WriteBlog";

import Link from "next/link";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  let menuRef = useRef();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //* Navbar background changing

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // window.addEventListener("scroll", changeBackground);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const username = window.localStorage.getItem("username")
  // const [isLoggedIn , setIsLoggedIn ] = React.useState(username !== null )

  function handleSignUp() {
    setIsLoggedIn(true);
  }

  return (
    <Box
      zIndex="2"
      className={navbar ? "navbar active" : "navbar"}
      ref={menuRef}
      sx={{
        height: "80px",
        position: "sticky",
        top: "0",
      }}
    >
      <AppBar
        className="navbar"
        sx={{
          display: "flex",
          justfiyContent: "ceneter",
          backgroundColor: "#fff",
          color: "black",
          boxShadow: "0 0 3px 0 #111 ",
        }}
        color="success"
        position=""
        onClose={handleDrawerClose}
      >
        <div
          style={{
            position: "sticky",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <Toolbar
            className="toolbar"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(open && {}) }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ ...(open && { display: "" }) }}
            >
              <MenuIcon
                className="MenuIcon"
                sx={{
                  fontSize: "25px",
                  color: "#111",
                  ...(open && { display: "none" }),
                }}
              />
            </IconButton>
          </Toolbar>
          {isLoggedIn ? <WriteBlog /> : <SignUp handleSignUp={handleSignUp} />}
        </div>
      </AppBar>

      <Drawer
        sx={{
          position: "absolute",
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: "230px",
            boxSizing: "border-box",
          },
        }}
        onClose={handleDrawerClose}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton sx={{ color: "black" }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="menuCard"
            style={{ textAlign: "left", fontSize: "16px" }}
          >
            <Link href="">
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  cursor: "pointer",
                }}
                className="text-bold text-8xl"
              >
                &nbsp;&nbsp;
                <HomeIcon sx={{ fontSize: "18px" }} />
                &nbsp;&nbsp;Home
              </p>
            </Link>
            <Link href="#">
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  cursor: "pointer",
                }}
                className="text-bold text-8xl"
              >
                &nbsp;&nbsp;
                <BookIcon sx={{ fontSize: "18px" }} />
                &nbsp;&nbsp;Reading List
              </p>
            </Link>
            <Link href="#">
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  cursor: "pointer",
                }}
                className="text-bold text-8xl"
              >
                &nbsp;&nbsp;
                <StarIcon sx={{ fontSize: "18px" }} />
                &nbsp;&nbsp;Favorites
              </p>
            </Link>
            <Link href="#">
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  cursor: "pointer",
                }}
                className="text-bold text-8xl"
              >
                &nbsp;&nbsp;
                <PermContactCalendarIcon sx={{ fontSize: "18px" }} />
                &nbsp;&nbsp;Contact
              </p>
            </Link>
            <Link href="#">
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  cursor: "pointer",
                }}
                className="text-bold text-8xl"
              >
                &nbsp;&nbsp;
                <InfoIcon sx={{ fontSize: "18px" }} />
                &nbsp;&nbsp;About
              </p>
            </Link>
          </div>
        </List>
      </Drawer>
      <Main style={{ padding: "0" }} open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
