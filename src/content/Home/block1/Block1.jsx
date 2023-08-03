import React from 'react'
import './block1.css'
function Block1() {
  return (
    <div>
    
    <div className='Home-container'>
    <img src="/Home/img1.jpg" />

    <div style={{position:'relative',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',top:'150px'}}>
           <h1 style={{fontSize:'80px',color:'white'}}>
              <span style={{color:'#fb3939'}}>W</span>
              <span style={{color:'#ff6100'}}>E</span>
              <span style={{color:'#ffd100'}}>L</span>
              <span style={{color:'#6ccc20'}}>C</span>
              <span style={{color:'#2fd69f'}}>O</span>
              <span style={{color:'#2758cb'}}>M</span>
              <span style={{color:'#ab22b1'}}>E</span></h1>
            <h1 style={{width:'100%',textAlign:'center',fontSize:'80px',color:'white'}}>
              <p>To</p>
            </h1>
            <h1 style={{fontSize:'80px',color:'white'}}>
              <span style={{color:'rgb(222 187 154)'}}>Book</span>
              <span style={{color:'rgb(150 211 100)'}}>World</span>
            </h1>
    </div>
    </div>
   
    
    </div>

  )
}

export default Block1