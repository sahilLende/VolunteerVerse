import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Typography from "@mui/material/Typography";
const SignUpForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      number: data.get("contactNumber"),
      address: data.get("address"),
    });
  };
  return (
    <Box
      sx={{
        padding: 2,
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "rgb(247, 127, 0)" }}>
        <SentimentSatisfiedAltIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <TextField
          margin="normal"
          required
          name="confirmPassword"
          label="confirm password"
          type="password"
          id="password"
        />
        <TextField
          margin="normal"
          required
          name="address"
          label="address"
          type="text"
          id="address"
        />
        <TextField
          margin="normal"
          required
          name="contactNumber"
          label="Contact Number"
          type="number"
          id="address"
        />

        <Button variant="contained" type="submit">
          Register
        </Button>
        <Grid container sx={{}}>
          <Grid item>
            <Link href="#" variant="body2">
              {"Already registered?"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpForm;
