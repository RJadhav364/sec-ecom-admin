import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import ProtectedRoute from '../components/ProtectedRoute'
import ProductListing from '../pages/ProductListing/ProductListing'


const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/product-list" element={<ProductListing />} />
      </Route>
      {/* </Route> */}
    </Routes>
  )
}

export default Approutes
