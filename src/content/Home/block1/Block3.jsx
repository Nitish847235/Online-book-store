import React from 'react'
import './block3.css'

const Block3 = () => {
  return (
    <>
    <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'40px'}}>
      <h1 className='homeBlock3h1' style={{textAlign:'center'}}>Best Books Available Here</h1>
    </div>

    <div className='homeBlock3ImageContainer' >
            <div className='homeBlock3Image'>
               <img src='https://bluerosepublishers.com/wp-content/uploads/2022/03/978-93-5611-098-4_front-Blue-Rose-Publishers-1.jpg' alt='book'/>
            </div>

            <div className='homeBlock3Image'>
               <img src='https://images.unsplash.com/photo-1672309558498-cfcc89afff25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' alt='book'/>
            </div>

            <div className='homeBlock3Image'>
               <img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80' alt='book'/>
            </div>
            
            <div className='homeBlock3Image'>
               <img src='http://books.google.com/books/content?id=7KVYDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api  ' alt='book'/>
            </div>
    </div>

    <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'40px'}}>
      <h1 className='homeBlock3h1' style={{textAlign:'center'}}>Books Collection</h1>
    </div>

    <div style={{marginTop:'20px',display:'flex',width:'100%',justifyContent:'center'}}>
        <div className='homeBlock3bookCollection' >
      <div style={{width:'100%',height:'100%'}}>
          <img src='https://img.freepik.com/free-vector/realistic-book-lovers-day-horizontal-background-with-composition-text-books-with-lamp-cup-vector-illustration_1284-77302.jpg?size=626&ext=jpg&ga=GA1.1.669828460.1689154101&semt=ais' alt='book collection' style={{objectFit:'contain',width:'100%',height:'100%'}}/>
      </div>
      

        </div>
    </div>
    </>
  )
}

export default Block3
