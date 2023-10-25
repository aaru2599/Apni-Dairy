import React from 'react'
import AdminHeaderInput from '../atoms/AdminHeaderInput'
import AddItems from '../atoms/AddItems'

const AdminHeader = () => {
  const adminHeaderStyle={
   
    display:"flex",
    justifyContent:"space-between",
    alignItem:"center"
  }
  const adminHeaderMainStyle={
    width:"50%",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"10px",
    backgroundColor:"khaki",
    padding:"20px"
  } 
  return (
    <div style={adminHeaderMainStyle} >
     <header style={adminHeaderStyle}>
     <h3>My Products</h3>
      <AdminHeaderInput />
      <AddItems/>

     </header>

    
    </div>
  )
}

export default AdminHeader