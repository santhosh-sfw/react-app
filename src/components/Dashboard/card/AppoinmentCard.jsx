import { Grid, Typography } from '@mui/material'
import React from 'react'

const AppoinmentCard = () => {
    return (
        <Grid container item xs={6} md={8}>
            <div>
                <Typography>
                    Next Appointment
                </Typography>
            </div>
            <Grid item xs={6} md={6}>
                <div>
                    <Typography >
                        22
                    </Typography>
                    <Typography>
                        August,2022
                    </Typography>
                </div>
                <div>
                    <Typography>
                        thursday
                    </Typography>
                </div>

            </Grid>
            <Grid item xs={6} md={6}>
                <div>
                    <Typography>16:30</Typography>
                </div>
                <div>
                    <Typography>
                        with Dr.xyz Placeholder
                    </Typography>
                    <Typography>
                        Online                                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default AppoinmentCard