import React from 'react'
import { Outlet } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'

const Admin = () => {
    return (
        // <Outlet />
        <ProtectedRoute />
    )
}

export default Admin
