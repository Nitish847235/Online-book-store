import React, { useEffect, useState } from 'react'
import Rightbar from '../../content/products/rightbar/Rightbar'
import { useSelector } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader'

function Products() {
    const search = useSelector((state)=>state.search)
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(page!==0){
            fetchData();
        }
      }, [page]);

    useEffect(() => {
            setProduct([])
            setPage(0);                                      
            fetchData();
      }, [search.query]);
    
      const fetchData = async () => {
        try {
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search.query!==null?search.query:''}&maxResults=12&startIndex=${page}`); // Replace with your API endpoint

          const jsonData = await response.json();

          
            setProduct((prev)=>[...prev, ...jsonData.items])

        console.log(jsonData);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };

      const handleScroll = async ()=>{
        try {
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
                setLoading(true);
                setPage((prev)=> prev + 12)
            }
        } catch (error) {
            console.log(error);
        }
      }

      useEffect(() => {
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll)
      }, [])
      
    
  return (
    <div>
        <Rightbar product={product} setProduct={setProduct}/>
        {loading && <FadeLoader cssOverride={{margin:'20px auto'}} color="#36d7b7" />}
    </div>
  )
}

export default Products