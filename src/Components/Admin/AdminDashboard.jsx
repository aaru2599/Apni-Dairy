import React from 'react'
import Header from '../../features/Header/Header'
import AdminHeader from './AdminHeader/molecule/AdminHeader'
import AddedProducts from './AddedProducts/AddedProducts'


const AdminDashboard = () => {
  return (
   <div>
    <Header/>
    <AdminHeader  />
    <AddedProducts />

    

   </div>
  )
}

export default AdminDashboard