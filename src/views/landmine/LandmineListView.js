
import React from 'react'
import Landmine_card from './Landmine_card'
import datas from 'src/helpers/datas'
import Page from 'src/components/Page'
import { Drawer } from "antd";
import {
    makeStyles, Container, Box, Grid, CardActionArea,
    CardMedia, Typography, CardActions,
    Button, Card, CardContent, TextField, InputAdornment, SvgIcon
} from "@material-ui/core";
import { Search as SearchIcon } from 'react-feather';
import 'antd/dist/antd.css'

import DisplayDetails from './DisplayDetails'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}))

class LandmineListView extends React.Component {
    state = {
        visible: false,
        datas: null
    };



    constructor() {
        super();
        // setTimeout(() => {
        //     this.setState({ loading: false })
        // }, 2000);
    }


    _showDrawer = (element) => {
        this.setState({
            visible: true,
            datas: element
        });

    };


    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <Page
                // className={classes.root}
                title="landmines"
            >
                <Container maxWidth={false}>
                    <Box mt={3}>
                        <Card>
                            <CardContent>
                                <Box maxWidth={500}>
                                    <TextField
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SvgIcon
                                                        fontSize="small"
                                                        color="action"
                                                    >
                                                        <SearchIcon />
                                                    </SvgIcon>
                                                </InputAdornment>
                                            )
                                        }}
                                        placeholder="Search a mine"
                                        variant="outlined"
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    <br />



                    <Grid container spacing={3}>
                        {
                            datas.map((element) => (
                                <Grid
                                    item
                                    key={element.id}
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                >
                                    {/* {Landmine_card(element)} */}
                                    {/* <Landmine_card element={element} _showDrawer={this._showDrawer(element.id)}/> */}

                                    <Card style={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="landmine"
                                                height="140"
                                                image={"/static/images/mines/" + element.img}
                                                title="landmine"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {element.nom}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {/* <p> */}
                                                    surface:{element.surface} <br />
                                                    latitude:{element.latitude}<br />
                                                    Longitude:{element.longitude}
                                                    {/* contenu du truc */}
                                                    {/* </p> */}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        {/* <CardActions>
                                            <Button size="small" color="primary" onClick={() => this._showDrawer(element)}>
                                                View
                                            </Button>
                                        </CardActions> */}
                                    </Card>

                                </Grid>
                            ))
                        }

                        {/* ------- */}

                    </Grid>
                </Container>
                <Drawer
                    title="Display mine details"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Close
                  </Button>
                        </div>
                    }
                >
                    {()=>DisplayDetails(this.state.datas) }
                    {/* hello i am the drawer */}
                </Drawer>


            </Page>
        )
    }
}


// const LandmineListView = () => {


//     const classes = useStyles();
//     // console.log(`props 1st level =${_showDrawer}`)
//     // return (
//     //     <Page
//     //         className={classes.root}
//     //         title="landmines"
//     //     >
//     //         <Container maxWidth={false}>


//     //             <Box mt={3}>
//     //                 <Card>
//     //                     <CardContent>
//     //                         <Box maxWidth={500}>
//     //                             <TextField
//     //                                 fullWidth
//     //                                 InputProps={{
//     //                                     startAdornment: (
//     //                                         <InputAdornment position="start">
//     //                                             <SvgIcon
//     //                                                 fontSize="small"
//     //                                                 color="action"
//     //                                             >
//     //                                                 <SearchIcon />
//     //                                             </SvgIcon>
//     //                                         </InputAdornment>
//     //                                     )
//     //                                 }}
//     //                                 placeholder="Search a mine"
//     //                                 variant="outlined"
//     //                             />
//     //                         </Box>
//     //                     </CardContent>
//     //                 </Card>
//     //             </Box>
//     //             <br />



//     //             <Grid container spacing={3}>
//     //                 {
//     //                     datas.map((element) => (
//     //                         <Grid
//     //                             item
//     //                             key={element.id}
//     //                             lg={3}
//     //                             md={4}
//     //                             sm={6}
//     //                             xs={12}
//     //                         >
//     //                             {/* {Landmine_card(element)} */}
//     //                             <Landmine_card element={element} _showDrawer={this._showDrawer(element.id)}/>

//     //                         </Grid>
//     //                     ))
//     //                 }
//     //             </Grid>
//     //         </Container>

//     //         <Drawer
//     //             title="Display mine details"
//     //             width={720}
//     //             onClose={this.onClose}
//     //             visible={this.state.visible}
//     //             bodyStyle={{ paddingBottom: 80 }}
//     //             footer={
//     //                 <div
//     //                     style={{
//     //                         textAlign: 'right',
//     //                     }}
//     //                 >
//     //                     <Button onClick={this.onClose} style={{ marginRight: 8 }}>
//     //                         Close
//     //           </Button>
//     //                 </div>
//     //             }
//     //         >
//     //             {/* <DisplayDetails /> */}
//     //             hello i am the drawer
//     //         </Drawer>

//     //     </Page>
//     // )
// }

// export default LandmineListView
export default LandmineListView