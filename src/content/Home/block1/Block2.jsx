import React from 'react'

const Block2 = () => {
  return (
    <div style={{marginTop:'400px',display:'flex',width:'100%',justifyContent:'center'}}>
        <div style={{width:'75%',height:'350px',border:'1px solid black',display:'flex',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
      <div style={{width:'50%',height:'100%'}}>
          <img src='https://img.freepik.com/free-psd/explore-concept-poster-template_23-2148652997.jpg?size=626&ext=jpg&ga=GA1.1.669828460.1689154101&semt=ais' style={{height:'348px',objectFit:'cover',width:'520px'}}/>
      </div>
      <div style={{width:'50%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'30px'}}>
        <h1>About Our Library Management</h1>
              <p style={{textAlign: 'center'}}>Welcome to our online library, a digital treasure trove of knowledge and inspiration. Step into a world where books come alive with the click of a button and the pages of imagination turn at your fingertips. Explore, discover, and immerse yourself in a realm where stories transcend boundaries and wisdom awaits your eager mind. Welcome to a place where learning and adventure meet, where the power of words knows no bounds. Welcome to our online library, where the wonders of literature await you.</p>
             
      </div>

        </div>
    </div>
  )
}

export default Block2
