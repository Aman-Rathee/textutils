import React from 'react'

function Alert(props) {

    const capitalize = (word)=> {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    const handelAlertClick = ()=> {
        setTimeout(() => {
             
        }, 1500);
    }


  return (
    <div style={{height: '40px'}}>
      { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} onClick={handelAlertClick} role="alert">
       <strong> {capitalize(props.alert.type)} : </strong>{props.alert.msg}
       </div>}
     </div>
  )
}

export default Alert
