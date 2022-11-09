import { styled } from '@mui/material/styles';
import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react';

import AppBars from '../components/Dashboard/AppBar/AppBar'
import AppoinmentCard from '../components/Dashboard/card/AppoinmentCard';
import StartAppoinmentCard from '../components/Dashboard/card/StartAppoinmentCard';
import ManageAppoimnet from '../components/Dashboard/card/ManageAppoimnet';
import ResourceCheckoutCard from '../components/Dashboard/card/ResourceCheckoutCard';

const LandingPage = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <AppBars />
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid container item xs={6} md={8}>
                        <AppoinmentCard />
                        <Grid item xs={6} md={4}>
                            <StartAppoinmentCard />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <ManageAppoimnet />
                        </Grid> <Grid item xs={6} md={4}>
                            <ResourceCheckoutCard />
                        </Grid> <Grid item xs={6} md={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={6} md={8}>
                            <Item>xs=8</Item>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Item>xs=4</Item>
                        </Grid>

                    </Grid>
                    <Grid container item xs={4}>
                        <Grid item xs={12} md={12}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Item>xs=4</Item>
                        </Grid> <Grid item xs={12} md={12}>
                            <Item>xs=4</Item>
                        </Grid>
                    </Grid>
                </Grid>

                <div>LandingPage</div>
            </Container>
        </>
    )
}

export default LandingPage