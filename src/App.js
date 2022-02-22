import React, { useEffect, useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { InitialList } from './components/InitialList'
import Header from './components/Header'
import Item from './components/Item'
import ListTitle from './components/ListTitle'
import MyVerticallyCenteredModal from './components/Modal'

const List = styled.section`
  background-color: #dbe9ee;
`

const App = () => {
  const [actualList, setActualList] = useState(InitialList)
  const [totalItems, setTotalItems] = useState(0)
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    calculateTotalItem()
  },[actualList])

  const handleCount = (index, value) => {
    const updatedList = [...actualList]
    let { quantity } = updatedList[index]
    if (quantity >= 0) {
      quantity = quantity + value
      if (quantity === -1) {
        quantity = 0        
      }
    } 
    updatedList[index] = {
      ...updatedList[index],
      quantity
    }
    setActualList(updatedList)
  }
  const handleDelete = (index) => {
    const array = [...actualList]
    array.splice(index, 1)
    setActualList(array)
  }
  const calculateTotalItem = () => {
    let total = 0
    actualList.map(element => 
      total = total + element.quantity
    )
    setTotalItems(total)
  }
  const handlenewitem = (itemName, quantity, price) => {
    let updatedList = [...actualList]
    updatedList = [
      ...updatedList,
      {
        label: itemName,
        price: Number(price),
        quantity: Number(quantity)
      }
    ]
    setActualList(updatedList)
  }

  // console.log(totalItems)
  return ( 
    <>
      <Header totalItems={totalItems} />
      <List>
        <div className='container'>
          <ListTitle />
          {actualList.map((element, index) => 
            <Item
              key={index} 
              index={index}
              label={element.label} 
              price={element.price} 
              quantity={element.quantity}
              handleCount={handleCount}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </List>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handlenewitem={handlenewitem}
      />
      <div className='text-center my-3'>
        <button 
          type="button" 
          className="btn btn-outline-danger"
          onClick={() => setModalShow(true)}
        >
          Add new item
        </button>
      </div>
    </>
  )
}

export default App
