import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="" alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Producto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            expedita itaque iure asperiores possimus eos quos, voluptate illo et
            inventore?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
