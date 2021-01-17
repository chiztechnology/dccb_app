import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

let data = null;
class Landmine_card extends React.Component {

    render() {
        // const classes = useStyles();
        data = this.props.element
        return (
            <Card style={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="landmine"
                        height="140"
                        image={"/static/images/mines/" + data.img}
                        title="landmine"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {data.nom}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/* <p> */}
                            surface:{data.surface} <br />
                            latitude:{data.latitude}<br />
                            Longitude:{data.longitude}
                                {/* contenu du truc */}
                            {/* </p> */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>this.props._showDrawer}>
                        open
        </Button>
                </CardActions>
        </Card>
        )
    }
}


// const Landmine_card_ = () => {
//     const classes = useStyles();

//     // console.log(`this is the value of land selected: ${data.nom}`)
//     return (

//     );
// }

export default Landmine_card