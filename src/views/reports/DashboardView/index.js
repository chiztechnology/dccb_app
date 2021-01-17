
import React from 'react'
import {
    Avatar,
    Card,

    colors,

    Container,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";

import CardContent from '@material-ui/core/CardContent'

import SaveAlt from '@material-ui/icons/SaveAlt'
import ListAlt from '@material-ui/icons/ListAlt'
import MapRounded from '@material-ui/icons/MapRounded'

import Page from 'src/components/Page'
import datas from 'src/helpers/datas'
import Landmine_chart from './Landmine_chart'

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    avatar: {
        background: colors.blue[600],
        height: 56,
        width: 56
    }
}))

const _displayCard = (title, content, Icon_to_use) => {
    const classes = useStyles()
    return (
        <Card>
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                    spacing={3}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            variant="h6"
                        >
                            {title}
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            {content}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            {Icon_to_use = 'SaveAlt' ? <SaveAlt /> :
                                Icon_to_use = 'places' ? <MapRounded /> : <ListAlt />}

                        </Avatar>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}


const DashboardView = () => {
    const classes = useStyles();
    return (
        <Page className={classes.root} title="Dashboard">
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                    {/* my item grid */}
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        {/* my element */}
                        {_displayCard('TOTAL LANDMINES', 45.0, 'SaveAlt')}
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        {/* my element */}
                        {_displayCard('REGIONS', 12.0, 'places')}
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        {/* my element */}
                        {_displayCard('USERS', 1, 'places')}
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        {/* my element */}
                        {_displayCard('ACTIFS', 13, 'actifs')}
                    </Grid>
                    {/* statistics */}
                    <Grid
                        item
                        lg={12}
                        md={12}
                        xl={12}
                        xs={12}
                    >
                        <Landmine_chart />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default DashboardView