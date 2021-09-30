import React from 'react'
const Counter = () => {
    let counterValue = 0
  
    const onAdd = () => {
      // alert('on add')
      counterValue += 1
      console.log(`counterValue = ${counterValue}`)
    }
  
    const onSubtract = () => {
      // alert('on subtract')
      counterValue -= 1
      console.log(`counterValue = ${counterValue}`)
    }
  
    return (
      
        <div className="image-title">
            <button onClick={onSubtract} className="btn btn-success">
            -
            </button>
            <span className="counter-value">{counterValue}</span>
            <button onClick={onAdd} className="btn btn-warning">
            +
            </button>
            
        </div>
    )
  }
  export default Counter;