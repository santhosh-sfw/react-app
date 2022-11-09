import React from 'react'
import LandingPage from '../pages/LandingPage'
export const router = [
    {
        path: '/', comp: LandingPage, exact: true
    },
    {
        path: '/g', comp: LandingPage, exact: true
    }
]