import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {

  
 const { item, setItem, updateQuery} = props

 const [count, setCount] = useState(0)
 
 
 const handleDown = (i) => {
  setCount((pre) => {
    const counter = pre > 0? pre - 1 : 0
    updateQuery(counter, i)
    return counter
  })
 }
 const handleUp = (i) => {
  setCount((pre) => {
    const counter = pre + 1
    updateQuery(counter, i)
    return counter
  })
 }

  return (
    <div>
          <div className="container">
          
          {item.map ((e, i) => {
            return (
            <div key={i}>
          
          <Card style={{ width: '15rem' }} className='card-img-1'>
      <Card.Img variant="top" src={e.imageUrl} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
              {e.des}
        </Card.Text>
        <div className='price'>
        <Button variant="primary">Add</Button>    
        <Button><i class="fa-solid fa-heart-circle-plus"></i></Button>
        <p>${e.price}</p>
        </div>
      </Card.Body>
        <div className="up-down">
        <Button onClick={() => handleDown(i)}>Down</Button>
          <p>{e.qty}</p>
          <Button onClick={() => handleUp(i)}>Up</Button>
        </div>
    </Card>
          </div>
          )})}
        
      
          
     
     
      </div>
    </div>
  )
}

export default Cards