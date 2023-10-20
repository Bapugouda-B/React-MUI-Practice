import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles.js";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              maxime quasi, eveniet atque temporibus voluptates adipisci
              perferendis obcaecati illo! Consectetur atque exercitationem
              inventore nisi! Nisi ut ipsam porro enim provident.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />

                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto numquam.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer} maxWidth="md">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          provident cupiditate, labore culpa consectetur corrupti quasi animi
          neque distinctio fugiat sunt. Itaque tempora porro facere soluta
          distinctio, aliquam laudantium sequi.
        </Typography>
      </footer>
    </>
  );
};

export default App;
