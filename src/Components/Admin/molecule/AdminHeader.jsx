import React from 'react'
import AdminHeaderInput from '../atoms/AdminHeaderInput'
import AddItems from '../atoms/AddItems'

const AdminHeader = () => {
  const adminHeaderStyle={
   
    display:"flex",
    justifyContent:"space-between"
  }
  const adminHeaderMainStyle={
    width:"50%",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"10px",
    backgroundColor:"green",
    padding:"20px"
  } 
  return (
    <div style={adminHeaderMainStyle} >
     <header style={adminHeaderStyle}>
     <div>My Products</div>
      <AdminHeaderInput />
      <AddItems/>
     </header>
    </div>
  )
}

export default AdminHeader