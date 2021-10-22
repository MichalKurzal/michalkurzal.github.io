import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        bgcolor: "primary.dark",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Michal Kurzal 2021</Typography>
      <Typography variant="h5">E-Mail: michalkurzal200@gmail.com</Typography>
    </Box>
  );
}
