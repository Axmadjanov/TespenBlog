import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Typography, Container, TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ handleSignUp }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  function handleSubmit(e) {
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
    window.localStorage.setItem("email", email);
    e.preventDefault();
    handleSignUp()
  }

  {
    /* <Button variant="outlined" onClick={handleClick}>
  Open success snackbar
</Button>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
</Snackbar>
<Alert severity="error">This is an error message!</Alert> */
  }
  const [noButton, setNoButton] = React.useState(true);

  function handleAllow(e) {
    if (e.target.value.length < 6) {
      setNoButton(false);
    }
  }

  return (
    <div style={{}}>
      <Typography
        sx={{ zIndex: "2", cursor: "pointer" }}
        size="small"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Create Account
      </Typography>
      &nbsp; &nbsp; &nbsp;
      <Dialog
        fullScreen
        open={open}
        // onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Grid container>
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                align="center"
                sx={{ ml: 2, flex: 1 }}
                variant="h6"
                component="div"
              >
                Create Account
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container rowSpacing={3}>
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              <div style={{}}>
                <Typography
                  sx={{ color: "dark" }}
                  align="center"
                  variant="h6"
                  fontWeight="550"
                >
                  Sign Up
                </Typography>
                <form   onSubmit={handleSubmit}>
                {/* onChange={handleAllow}  */}
                  <TextField
                    fullWidth
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    // onChange={handleAllow}
                    label="Name"
                    size="small"
                    color="dark"
                    id="fullWidth"
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // onChange={handleAllow}
                    label="Password"
                    size="small"
                    color="dark"
                    id="fullWidth"
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    required
                    type="emai"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // onChange={handleAllow}
                    label="Email"
                    size="small"
                    color="dark"
                    id="fullWidth"
                  />
                  <br />
                  <br />
                  <Button
                    style={{ background: "#343432", color: "#fff" }}
                    // onClick={handleAllow}
                    color="dark"
                    variant="outlined"
                    type="submit"
                    size="small"
                    fullWidth
                  >
                    Create Account
                  </Button>
                </form>
              </div>
              <br />
              <Typography align="center" sx={{ fontSize: "12px" }}>
                {" "}
                Already have an accoun?{" "}
                <Link href="#">
                  <a style={{ color: "#908990" }}>Login</a>
                </Link>{" "}
              </Typography>
              <br />
              <Typography align="center" sx={{ fontSize: "12px" }}>
                Login with one of the followings
              </Typography>
              &nbsp;
              <Grid container columnSpacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                  <div
                    style={{
                      cursor: "pointer",
                      borderRadius: "5px",
                      textAlign: "center",
                      padding: "5px 0",
                      boxShadow: "0 0 5px 0 #555",
                    }}
                  >
                    <GoogleIcon />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div
                    style={{
                      cursor: "pointer",
                      borderRadius: "5px",
                      textAlign: "center",
                      padding: "5px 0",
                      boxShadow: "0 0 5px 0 #555",
                    }}
                  >
                    <GitHubIcon />
                  </div>
                  &nbsp;
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

// import * as React from "react";
// import PropTypes from "prop-types";
// import { Global } from "@emotion/react";
// import { styled } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { grey } from "@mui/material/colors";
// import Box from "@mui/material/Box";
// import Skeleton from "@mui/material/Skeleton";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// const drawerBleeding = 100;

// const Root = styled("div")(({ theme }) => ({
//   height: "100%",
//   backgroundColor:
//     theme.palette.mode === "light"
//       ? grey[100]
//       : theme.palette.background.default,
// }));

// const StyledBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
// }));

// const Puller = styled(Box)(({ theme }) => ({
//   width: 30,
//   height: 6,
//   backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
//   borderRadius: 3,
//   position: "absolute",
//   top: 8,
//   left: "calc(50% - 85px)",
// }));

// function SwipeableEdgeDrawer(props) {
//   const { window } = props;
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   // This is used only for the example
//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <Root
//         sx={{
//           width: "100%",
//           zIndex: "2",
//           background: "none",
//         }}
//       >
//         {/* <CssBaseline /> */}
//         <Global
//           styles={{
//             ".MuiDrawer-root > .MuiPaper-root": {
//               height: `calc(100% - ${drawerBleeding}px)`,
//               overflow: "visible",
//             },
//           }}
//         />
//         <Typography
//           style={{ cursor: "pointer", fontSize: "15px" }}
//           align="center"
//           onClick={toggleDrawer(true)}
//         >
//           Create Account
//         </Typography>
//         <SwipeableDrawer
//           container={container}
//           anchor="bottom"
//           open={open}
//           onClose={toggleDrawer(false)}
//           onOpen={toggleDrawer(true)}
//           swipeAreaWidth={drawerBleeding}
//           disableSwipeToOpen={false}
//           ModalProps={{
//             keepMounted: true,
//           }}
//         >
//           <StyledBox
//             sx={{
//               position: "absolute",
//               top: -drawerBleeding,
//               borderTopLeftRadius: 8,
//               borderTopRightRadius: 8,
//               visibility: "visible",
//               right: 0,
//               left: 0,
//               display: "none",
//             }}
//           >
//             <Puller />
//
//             {/* <Skeleton variant="rectangular" height="100%" /> */}
//           </StyledBox>
//         </SwipeableDrawer>
//       </Root>
//     </div>
//   );
// }

// SwipeableEdgeDrawer.propTypes = {
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
// window: PropTypes.func,
// };

// export default SwipeableEdgeDrawer;
