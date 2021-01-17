import React from 'react'
import {Navigate} from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout/index'
import MainLayout from './layouts/MainLayout/index'
import AccountView from 'src/views/account/AccountView';
import LandmineListView from 'src/views/landmine/LandmineListView'
import DashboardView from 'src/views/reports/DashboardView'
import StatisticView from 'src/views/statistic/'
import LoginView from 'src/views/auth/LoginView';
import SettingsView from 'src/views/settings/SettingsView'
import NotFoundView from 'src/views/errors/NotFoundView'

 const routes = [
    {
        path:'app',
        element:<DashboardLayout/>,
        children:[
            {path:'account', element:<AccountView/>},
            {path:'landmine', element:<LandmineListView/>},
            {path:'statistic', element: <StatisticView/>},
            {path:'dashboard', element: <DashboardView/>},           
            {path:'settings', element: <AccountView/>},
            {path:'*', element: <Navigate to="/404"/>}
        ]
    },{
        path:'/',
        element: <MainLayout/>,
        children:[
            {path:'login', element:<LoginView/>},
            // {path:'register', element:<RegisterView/>},
            {path:'404', element:<NotFoundView/>},
            {path:'/', element:<Navigate to="/app/statistic"/>},
            {path:'*', element: <Navigate to="/404"/>}
        ]
    }
]

export default routes;

