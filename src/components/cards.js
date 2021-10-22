import { useEffect, useState } from "react";
import MediaCard from "./card";
import Grid from "@mui/material/Grid";

export default function Cards() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      {data.map((cardData) => {
        return <MediaCard data={cardData} />;
      })}
    </Grid>
  );
}
