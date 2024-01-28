import React from 'react'
// import ClipLoader from 'react-spinners/ClipLoader'
import './loader.css'

const Loader = ({loader}) => {
  return (
    <div style={{position:'fixed',top:'0',left:0,bottom:0,right:0,width:'100vw',height:'100vh',zIndex:100,display:'flex',alignItems:'center',justifyContent:'center',background:'#F9F9F9'}}>
        {/* <ClipLoader
            color="#36d7b7"
            loading={true}
            size={100}
            cssOverride={{display:'block',margin:'40vh auto',borderColor: "red",zIndex:100,backgroundColor: 'rgba(255,255,255,0.7)'}}
            aria-label="Loading Spinner"
            data-testid="loader"
        /> */}
        <img className='loaderImage' style={{objectFit:'contain'}} src='/images/loaderGif.gif' alt='loading gif'/>
    </div>
  )
}

export default Loader