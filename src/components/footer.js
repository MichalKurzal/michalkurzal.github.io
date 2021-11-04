import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Grid container sx={{ bgcolor: "primary.main", padding: 2 }}>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h6">Michal Kurzal 2021</Typography>
        <Typography variant="h6" textAlign="center">
          E-Mail: michalkurzal200@gmail.com
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button size="small" variant="contained" onClick={handleClick}>
          Privacy Policy
        </Button>
        <Snackbar
          open={open}
          onClose={handleClose}
          message="I am a private person and I do not colect any data. Only host of this site - github - colect some data. Please inform yourself abut github privacy policy"
          action={action}
        />
      </Grid>
    </Grid>
  );
}
