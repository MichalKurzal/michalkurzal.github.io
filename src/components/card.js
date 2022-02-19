import { gsap } from "gsap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
  const style = {
    fontFamily:"monospace"
  };

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  return (
    <Card
      sx={{ maxWidth: 345, marginBottom: 10 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.data.src}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={style}>
          {props.data.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={style}>
          {props.data.about}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.data.path} style={{ textDecoration: "none" }}>
          <Button size="small" variant="contained">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
