import { createContext,useContext,useState,useEffect} from "react";

import { Menu } from './assets/MenuItems'
import { restaurants } from "./assets/Restaurants.js";

const CartContext = createContext();


export const CartProvider = (props) => {
   const [cart, setCart] = useState([]);
   var [quantity,setquantity] = useState(0)
    const [totalprice,settotalprice] = useState(0)
    const [logindata,setLogindata] = useState({name:null,phone:null})
    const [address,setaddress] = useState({address:null,city:null,pincode:null,country:null})
    const [userlat,setuserlat] = useState()
    const [userlong,setlong] = useState()

    useEffect(()=>{
           
    },[cart])

    useEffect(()=>{

    },[address])

    useEffect(()=>{
         var x = JSON.parse(localStorage.getItem('useraddress'))

         console.log(x)

         if(x===null)
         {
            setaddress({...address,address:null,city:null,pincode:null,country:null})
         }else{
            console.log(x)
            setuserlat(x.lat)
            setlong(x.lon)
            setaddress({...address,address:x.display_name,city:x.address.city,pincode:x.address.postcode,country:x.address.country})
            
         }
    },[userlat])

    console.log(userlat,userlong)


    useEffect(()=>{

    },[address])


    useEffect(()=>{

    },[userlat])

    


    useEffect(()=>{
        var x= JSON.parse(localStorage.getItem('logindata')) 
       // console.log(x)
        if(x===null){
           // console.log(x)
           x ={name:null,phone:null}
           setLogindata(x)
        }else{
          //  console.log(x)
            x= {name:x.name,phone:x.phone}
            setLogindata(x)
        }
    
    },[])


   // console.log(quantity)
 
    const addToCart = (item) => {
        const index = Menu.findIndex((i)=> i.id === item)
        const cartindex=  cart.findIndex((i)=> i.id === item)

        if(cart.length<=0){
            setCart([...cart,Menu[index]])
        Menu[index].quantity +=1;
        return
        }else if(cartindex===-1){
            setCart([...cart,Menu[index]])
       Menu[index].quantity +=1;
        }
        
        else{
            cart[cartindex].quantity+=1
        }
    };

    useEffect(()=>{
           setquantity(0)
           settotalprice(0)
           cart.forEach((i)=>{
            setquantity((prev)=> prev+= i.quantity)
            settotalprice((prev)=> prev+= i.price*i.quantity)
           })
    },[cart])

    console.log(totalprice)

    

    const removeFromCart=(item)=>{
            setCart((prevcartState)=>prevcartState.filter((i)=> item !==i.id))
    }

    const AddAddress=(address,city,pincode,country)=>{
        
        //console.log('NAME:',item.name)
       setaddress({...address,address:address,city:city,pincode:pincode,country:country})
    }

    const login=(item)=>{
        
        console.log('NAME:',item)
       setLogindata({...logindata,name:item.name,phone:item.phone,pass:item.pass})
    }

    const decreasequantity=(item)=>{

          cart.forEach((i)=>{
            if(i.id===item){
                if(i.quantity===1){
                    removeFromCart(item)
                }
            }
          })

           setCart((prevcartState)=> prevcartState.map((i)=> i.id=== item ? {...i,quantity:i.quantity -=1}: i))
}

    const increasequantity=(item)=>{
        setCart((prevcartState)=> prevcartState.map((i)=> i.id === item ? {...i,quantity:i.quantity+=1}: i))
              
    }

    function haversine(lat1, lon1, lat2, lon2) {
       // console.log(lat1,lon1,lat2,lon2)
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
    
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
      }

      async function getLocationdata(latitude, longitude) {
        console.log(latitude,longitude)
        const key = 'pk.d7129324a8f6a663854d5d729340a752';
    
        try {
            const response = await fetch(
                `https://us1.locationiq.com/v1/reverse?key=${key}&lat=${latitude}&lon=${longitude}&format=json`
            );
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            if(data){
                //setaddress({...address,address:data.address.city,city:data.address.city,pincode:data.address.postcode,country:data.address.country})
                localStorage.setItem('useraddress',JSON.stringify(data))
                setuserlat(latitude)
                setlong(longitude)
                //console.log('userlatandlong',latitude,longitude)
            }
            
           // setaddress({:data.address.city,data.address.city,data.address.postcode,data.address.country})
            //console.log(data);
        } catch (error) {
            console.error("Error fetching location data:", error);
        }
    }

      function getuserlatlong(lat,long){
        console.log('data from home',lat,long)
         getLocationdata(lat,long)
      }

      const filtered= restaurants.map((i)=>{
          
          var x = haversine(i.location.latitude,i.location.longitude,userlat,userlong)
         // console.log(i.location.latitude,i.location.longitude,userlat,userlong)
          i.Distance = x

          if(x<=10000){
            return i
          }
        })


        const final = filtered.filter((i)=> i!==undefined)
       // console.log(filtered)
      
        const FullLength = Math.ceil((final.length)/2)
      //  console.log(FullLength)*/
    return (
        <CartContext.Provider value={{getuserlatlong,address,final,FullLength,login,logindata,userlat,AddAddress,addToCart,cart,increasequantity,decreasequantity,quantity,totalprice/*haversine,distance,, removeFromCart,,logindata,,totalprice,allproducttotal,AddAddress*/}}>
            {props.children}
        </CartContext.Provider>
    );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

 