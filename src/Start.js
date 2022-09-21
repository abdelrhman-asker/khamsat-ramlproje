import React, {useState, useEffect} from 'react'
import Animated from './components/AnimatedStart/Animated';
import App from './App';


const Start = () => {
    
        const [loading , setLoading] = useState(false);
      
          useEffect(() =>{
              setLoading(true)
              setTimeout(() =>{
                  setLoading(false)
      
              } , 4000)
      
          },[])
    return (
    <>
         <div className='SpinnerMainDiv'>
    { loading ? (<Animated style={{display:"flex", justifyContent:"center", alignItems:"center"} } color="#A52A2A"   size={22}  loading={loading}/>) : ( <App />)
}    
    </div> 
    
    </>
  )
}

export default Start