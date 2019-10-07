import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard({ cardInfo }) {
  const classes = useStyles();

  let demoButton = null;
  if (cardInfo.demoLink) {
    demoButton = (
      <Button size="small" color="primary">
        <a
          href={cardInfo.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          Demo
        </a>
      </Button>
    );
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardInfo.image}
          title="Project Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardInfo.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardInfo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a
            href={cardInfo.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            View Source
          </a>
        </Button>
        {demoButton}
      </CardActions>
    </Card>
  );
}
