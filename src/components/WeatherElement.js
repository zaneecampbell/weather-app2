import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
        width: '100%'
      },
    media: {
        objectFit: 'scale-down'
    },
});

export const WeatherElement = (props) => {
    const { classes } = props;
    const min = props.min;
    const max = props.max;
    const temp = props.temp;
    const id = props.id;

    let icon = ""
    let title = ""

    // sets image and tooltip for image based on the weatherID given
    switch(true) {
        case id < 300:
            icon = "images/thunderstorm.png"
            title = "thunderstorm"
            break;
        case id < 502:
            icon = "images/rain.png"
            title = "light rain"
            break;
        case id < 600:
            icon = "images/heavy-rain.png"
            title = "heavy rain"
            break;
        case id < 700:
            icon = "images/snowy.png"
            title = "snow"
            break;
        case id < 800:
            icon = "images/mist.png"
            title = "visual obstruction"
            break;
        case id === 800:
            icon = "images/sunny.png"
            title = "sunny"
            break;
        case id < 900:
            icon = "images/clouds.png"
            title = "clouds"
            break;
    }

    return (
            <Card className={classes.card}>
                    <CardMedia
                    component='img'
                    className={classes.media}
                    height='200'
                    image={icon}
                    title={title}
                    />
                    <CardContent>
                        <Typography style={{textAlign: 'center'}} gutterBottom variant="h2" component="h2">
                            {props.time.slice(0, 10)}
                        </Typography>
                        <Typography style={{textAlign: 'center'}} gutterBottom variant="h3" component="h2">
                            {props.description}
                        </Typography>
                        <Grid>
                            <Typography style={{textAlign: 'center'}} variant='h4' component="h4">
                                Temp: {`${(((temp) * 9 / 5) + 32)}`.slice(0,4)} <br/>
                                Est. min: {`${(((min) * 9 / 5) + 32)}`.slice(0,4)}   <br/>
                                Est. max: {`${(((max) * 9 / 5) + 32)}`.slice(0,4)}
                            </Typography>
                        </Grid>
                    </CardContent>
            </Card>

    )
}

export default withStyles(styles)(WeatherElement);

// Day: {props.time}
// temp: {props.temp}
// min: {props.min}
// max: {props.max}
// sky: {props.sky}
// {props.description}