import React, { useState } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { Card, Typography, CardActionArea, CardMedia, CardContent } from "@material-ui/core";
import datas from 'src/helpers/datas'
import logo from 'src/landmine_logo.png'
// import {has} from '@material-ui/icons'

const key="AIzaSyCu1678VcacKG1_BkMRYgRfzXEQhO5EfB8"

const DisplayInfo = element => {
    return (
        <InfoWindow position={{ lat: element.latitude, lng: element.longitude }}>

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

            </Card>
        </InfoWindow>
    )
}

const Map = () => {
    const [selectedMine, setSelectedMine] = useState(null)

    return (
        <GoogleMap
            defaultZoom={7}
            defaultCenter={{ lat: 20.678557, lng: -11.89103 }}
        >
            {/* {props.isMarkerShown} */}
            {
                datas.map((el) => (
                    <Marker key={el.id} position={{ lat: el.latitude, lng: el.longitude }}
                        onClick={() => {
                            setSelectedMine(el);
                            // console.log('click on mine ' + el.nom);
                            // // console.log(selectedMine.latitude)
                            // // <DisplayInfo element={el}/>
                            // DisplayInfo(el);
                        }}
                    />
                ))
            }
            {/* {selectedMine && 
                <InfoWindow position={{ lat: selectedMine.latitude, lng: selectedMine.longitude }}>
                    <div>hello</div>
                </InfoWindow>
            } */}

            {selectedMine &&
                (<InfoWindow position={{ lat: selectedMine.latitude, lng: selectedMine.longitude }}>
                    <div>hello</div>
                </InfoWindow>)
            }

            {/* {datas.map(d=>{<Marker position={{ lat: d.latitude, lng: d.longitude }} onClick={()=>{console.log(`Mon Marqueur: ${d.nom}`)}} />})} */}
        </GoogleMap>
    )
}


const MyMapComponent = compose(

    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    const [selectedMine, setSelectedMine] = useState(null)

    return (
        <GoogleMap
            defaultZoom={7}
            defaultCenter={{ lat: 20.678557, lng: -11.89103 }}
        >
            {/* {props.isMarkerShown} */}
            {
                datas.map((el) => (
                    <Marker key={el.id} position={{ lat: el.latitude, lng: el.longitude }}
                        // icon="http://maps.google.com/mapfiles/ms/icons/blue.png"
                        icon={{
                            url: logo
                            // anchor: new google.maps.Point(5, 58),
                        }}
                        onClick={() => {
                            setSelectedMine(el);
                            // console.log('click on mine ' + el.nom);
                            // // console.log(selectedMine.latitude)
                            // // <DisplayInfo element={el}/>
                            // DisplayInfo(el);
                        }}
                    />
                ))
            }
            {/* {selectedMine && 
                <InfoWindow position={{ lat: selectedMine.latitude, lng: selectedMine.longitude }}>
                    <div>hello</div>
                </InfoWindow>
            } */}

            {selectedMine &&
                (<InfoWindow position={{ lat: selectedMine.latitude, lng: selectedMine.longitude }}
                    // icon=""
                    onCloseClick={() => setSelectedMine(null)}
                >
                    <Card style={{ maxWidth: 145 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="landmine"
                                height="140"
                                image={"/static/images/mines/" + selectedMine.img}
                                title="landmine"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {selectedMine.nom}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {/* <p> */}
                                    surface:{selectedMine.surface}
                                    {/* contenu du truc */}
                                    {/* </p> */}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </InfoWindow>)
            }

            {/* {datas.map(d=>{<Marker position={{ lat: d.latitude, lng: d.longitude }} onClick={()=>{console.log(`Mon Marqueur: ${d.nom}`)}} />})} */}
        </GoogleMap>
    )
}
)

class StatisticView extends React.PureComponent {
    // state = {
    //     isMarkerShown: false,
    // }

    // componentDidMount() {
    //     this.delayedShowMarker()
    // }

    // delayedShowMarker = () => {
    //     setTimeout(() => {
    //         this.setState({ isMarkerShown: true })
    //     }, 3000)
    // }

    // handleMarkerClick = () => {
    //     this.setState({ isMarkerShown: false })
    //     this.delayedShowMarker()
    // }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <MyMapComponent
                // isMarkerShown={this.state.isMarkerShown}
                // onMarkerClick={this.handleMarkerClick}
                />
            </div>
        )
    }
}



export default StatisticView

