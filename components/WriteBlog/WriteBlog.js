import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Slide from "@mui/material/Slide";
import { Button, Typography, Container, TextField } from "@mui/material";
import Link from "next/link"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({value}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // function handleSubmit(e) {
  //   window.localStorage.setItem("username", username);
  //   window.localStorage.setItem("password", password);
  //   window.localStorage.setItem("email", email);
  //   e.preventDefault();
  // }

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

  return (
    <div style={{}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography
          sx={{ zIndex: "2", cursor: "pointer" }}
          size="small"
          variant="outlined"
          onClick={handleClickOpen}
        >
          Write a blog
        </Typography>
          &nbsp; &nbsp;
          <Link href="/user"  >

<a>
        <Avatar sx={{ width: 24, height: 24 }}></Avatar>
</a>
          </Link>
        &nbsp; &nbsp; &nbsp;
      </div>
      <Dialog
        fullScreen
        open={open}
        // onClose={handleClose}
        TransitionComponent={Transition}
      >
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
              Write a blog
            </Typography>
          </Toolbar>
        </AppBar>
        <br />

        <br />
        <Grid container columnSpacing={4}>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <div>
              {selectedImage && (
                <div>
                  <img
                    alt="not fount"
                    width={"250px"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              )}
              <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </div>
            <br />
            <TextField size="small" label="Multiline" fullWidth />
            <br /> <br />
            <TextField fullWidth label="Multiline ...." multiline rows={4} />
          </Grid>
          <Grid item xs={1} md={3}></Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
