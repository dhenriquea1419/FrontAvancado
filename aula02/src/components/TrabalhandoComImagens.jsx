  import React from 'react'
import Kuririn from'../assets/kuririn.png'
const TrabalhandoComImagens = () => {
  return (
    <div>
        <img src="goku.webp" alt="" /> 
        <img src={Kuririn} alt="" />
    </div> //goku.webp -- img dentro da pasta public
    // kuririn dentro da pastas assets
  )
}

export default TrabalhandoComImagens