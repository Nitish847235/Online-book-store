import React, { useEffect } from 'react'
import Block1 from '../../content/Home/block1/Block1'
import Block2 from '../../content/Home/block1/Block2'
import Block3 from '../../content/Home/block1/Block3'
import Block4 from '../../content/Home/block1/Block4'
import Footer from '../../component/footer/Footer'
import { useDispatch } from 'react-redux'
import { updateQuery } from '../../redux/SearchRedux'
import ClipLoader from 'react-spinners/ClipLoader'
import { useLocation } from 'react-router-dom'
function Home({setLocation}) {
    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(() => {
      setLocation(location.pathname)
      dispatch(updateQuery(null))
    }, [])
    
  return (
   <>
   <div>
        <Block1/>
        <Block2/>
        <Block3/>
        <Block4/>
        <Footer/>
    </div>
    
   </>
  )
}

export default Home