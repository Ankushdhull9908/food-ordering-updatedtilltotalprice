import React, { useEffect, useState } from 'react'
import {restaurants} from '../assets/Restaurants'
import { assets } from '../assets/assets'
import './Search.css'
import { useNavigate } from 'react-router-dom'

function Search() {
    const navigate = useNavigate()
    const [searchtext,setsearchtext] = useState('')
    const [searchedResult,setSearchresult] = useState([])
        function search()
        {
            const searchedResult = restaurants.filter((i)=> i.name.toLowerCase().split(" ").join("")  === searchtext.toLowerCase().split(" ").join("") || i.name.split(" ").join("") === searchtext.split(" ").join("") )
            console.log(searchedResult)
            setSearchresult(searchedResult)
        }


    useEffect(()=>{

    },[searchedResult,searchtext])
  return (
    <div className='search1'>

        <div className="searchinputarea">
            
            <input type='text' value={searchtext} placeholder='Search For Foods or Restaurants' onChange={(e)=>{
                setsearchtext(e.target.value)
                
            }}/>
            <img src={assets.cross_icon} alt="cross" id="crossicon" style={{ display: searchtext === '' ? 'none' : 'block' }} onClick={()=> {
                setsearchtext('') 
                setSearchresult([])
                }} />
            <img src={assets.search_icon} alt='search' id='searchicon' onClick={()=> search()}/>
        </div>
        <div className="searchresults">
        {

            searchedResult.map((item,index)=>{
                            //const estimatedtime = Math.ceil((item.Distance / 30) * 60)
            
                            return(
                                <div className='sfooditem' key={index}>
                                    <div className="sfoodimg">
                                    <img src={item.image} alt='error' onClick={()=> navigate(`/description/${item.id}`)}/>
                                    </div>
                                    <div className="sresname">
                                    <h3>{item.name}</h3>
                                    </div>
                                    
            
                                    <div className="sratingdeliverytime">
                                       
                                    <p>{item.rating}</p>
                                    
                                    </div>
                                    <div className="sresaddress">
                                    <p>{item.location.address}</p>
                                    </div>  
                                   
                                  
                                </div>
                            )
                        })
        }
        </div>
        
      
    </div>
  )
}

export default Search
