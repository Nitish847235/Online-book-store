import React, { useEffect } from 'react'
import Block1 from '../../content/Home/block1/Block1'
import Block2 from '../../content/Home/block1/Block2'
import Block3 from '../../content/Home/block1/Block3'
import Block4 from '../../content/Home/block1/Block4'
import Footer from '../../component/footer/Footer'
import { useDispatch } from 'react-redux'
import { updateQuery } from '../../redux/SearchRedux'
import ClipLoader from 'react-spinners/ClipLoader'
function Home({loader}) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(updateQuery(null))
    }, [])
    
  return (
   <>
   {!loader ?<div>
        <Block1/>
        <Block2/>
        <Block3/>
        <Block4/>
        <Footer/>
    </div>:
    <ClipLoader
    color="#36d7b7"
    loading={loader}
    size={100}
    cssOverride={{display:'block',margin:'40vh auto',borderColor: "red",zIndex:100,backgroundColor: 'rgba(255,255,255,0.7)'}}
    aria-label="Loading Spinner"
    data-testid="loader"
  />}
   </>
  )
}

export default Home