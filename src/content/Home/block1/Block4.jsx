import React from 'react'
import './block4.css'

const Block4 = () => {
  return (
    <>
      <div className='homeBlock4Container' style={{width:'100%',backgroundImage:`url(${"https://img.freepik.com/premium-photo/open-book-wooden-table-blue-background_160135-134.jpg?size=626&ext=jpg&ga=GA1.1.669828460.1689154101&semt=ais"})`,backgroundAttachment:'fixed',marginTop:'40px',display:'flex',alignItems:'center'}}>

      <div className='homeBlock3ImageContainer'>
            <div className='homeBlock3Image'>
               <img src='https://bluerosepublishers.com/wp-content/uploads/2022/03/978-93-5611-098-4_front-Blue-Rose-Publishers-1.jpg' alt='books'/>
            </div>
            <div className='homeBlock3Image'>
               <img src='https://img.freepik.com/free-vector/bike-guy-wattpad-book-cover_23-2149452163.jpg?size=626&ext=jpg&ga=GA1.2.669828460.1689154101&semt=ais' alt='books'/>
            </div>
            <div className='homeBlock3Image'>
               <img src='https://images.unsplash.com/photo-1657346259456-0f723e944dd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='books'/>
            </div>
            <div className='homeBlock3Image'>
               <img src='https://images.unsplash.com/photo-1585521747230-516376e5a85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='books'/>
            </div>
    </div>

      </div>



      <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'40px'}}>
      <h1 className='homeBlock3h1'>Books Collection</h1>
    </div>

    <div style={{marginTop:'20px',display:'flex',width:'100%',justifyContent:'center'}}>
        <div className='homeBlock3bookCollection'>
      <div style={{width:'100%',height:'100%'}}>
          <img src='https://images.unsplash.com/photo-1505063366573-38928ae5567e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' style={{objectFit:'contain',width:'100%',height:'100%'}} alt='books collection'/>
      </div>
      

        </div>
    </div>
    </>
  )
}

export default Block4
