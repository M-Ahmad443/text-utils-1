import React from 'react'

const Alert = (props) => {

  const capitalize=(word)=>{
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase()+word.slice(1);

  }
    
    return (
    <div  style={{height:'50px'}}>
  { 
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
           
    {props.alert.msg}:{capitalize(props.alert.typ)}
      

      
  
    </div>
  }

    </div>  
    

        
    )
}

export default Alert