import React, { useEffect, useState } from 'react'
import {restaurants} from '../assets/Restaurants'
import { assets } from '../assets/assets'
import './Search.css'

function Search() {
    const [searchtext,setsearchtext] = useState('')
    const [searchedResult,setSearchresult] = useState([])
    
    
        
        
    
        function search()
        {
            const searchedResult = restaurants.filter((i)=> i.name === searchtext)
            console.log(searchedResult)
            setSearchresult(searchedResult)
        }


    useEffect(()=>{

    },[searchedResult])
  return (
    <div className='search1'>

        <div className="searchinputarea">
            <input type='text' value={searchtext} placeholder='Search For Foods or Restaurants' onChange={(e)=>{
                setsearchtext(e.target.value)
                
            }}/>
            <button onClick={()=>{
                search()
            }}>Search</button>
        </div>
        <div className="searchresults">
        {

            searchedResult.map((item,index)=>{
                            //const estimatedtime = Math.ceil((item.Distance / 30) * 60)
            
                            return(
                                <div className='sfooditem' key={index}>
                                    <div className="sfoodimg">
                                    <img src={item.image} alt='error'/>
                                    </div>
                                    <div className="sresname">
                                    <h3>{item.name}</h3>
                                    </div>
                                    
            
                                    <div className="sratingdeliverytime">
                                        <img src={assets.rating_starts} alt='error'/>
                                    <p>{item.rating}</p>
                                    <p> - {item.deliveryTime}min</p>
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
