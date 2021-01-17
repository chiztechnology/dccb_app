import React from 'react'
import { PageHeader, Button, Descriptions } from 'antd';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { compose, withProps } from "recompose"


const MyMapComponent=(element) => compose(

    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    return (
        <GoogleMap
            defaultZoom={7}
            defaultCenter={{ lat: element.latitude, lng: element.longitude }}
        >

            {
                <Marker key={element.id} position={{ lat: element.latitude, lng: element.longitude }} />
            }

        </GoogleMap>
    )
}
)


const DisplayDetails=(element)=>{
    
       
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}

                    title={element.nom}
                    subTitle="Explosive mine"
                    extra={[
                        <Button key="3">Display on Map</Button>,
                        <Button key="1" type="primary">
                             Statistics
                </Button>,
                    ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="Surface">{element.surface}</Descriptions.Item>
                        <Descriptions.Item label="AP">
                            <a> {element.ap} </a>
                        </Descriptions.Item>
                        <Descriptions.Item label="AC"> 1 </Descriptions.Item>
                        <Descriptions.Item label="Latitude">{element.latitude}</Descriptions.Item>
                        <Descriptions.Item label="Longitude">{element.longitude}
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
                <div style={{ height: 600, width: '100%' }}>
                    {MyMapComponent(element)}
                </div>
            </div>
        ) 
}

export default DisplayDetails