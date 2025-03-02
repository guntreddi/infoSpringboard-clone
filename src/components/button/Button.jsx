import React from 'react'

function Button({text, wd}) {
  return (
    <div  style={{backgroundColor:" rgb(11, 247, 247)" , 
    width:wd,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:"20px",
    borderRadius:"20px",
    cursor:"pointer"
    }}>
      <p style={{fontSize:"20px" , fontWeight:"500"}}>{text} </p>
    </div>
  )
}

export default Button
