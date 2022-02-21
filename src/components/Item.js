import React from 'react'

import styled from 'styled-components'
import { RiDeleteBinLine } from 'react-icons/ri'

import Button from './Button'

const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Item = ({ label, price, quantity, index, handleCount, handleDelete }) => {

  return (
    <>
    <div className='row py-3 d-flex align-items-center border-bottom border-white'>
      <div className='col-3'>
        {label}
      </div>
      <div className='col-3'>
        {price}€
      </div>
      <div className='col-3'>
        <Counter>
          {quantity === 0 ? 
            <div className='text-danger'>
              Out of Stock
            </div>
          :
           quantity
          }
          <Button sign="+" handleCount={handleCount} index={index} />
          <Button sign="-" handleCount={handleCount} index={index} />
          <RiDeleteBinLine className="delete" size={30} onClick={() => handleDelete(index)} />
        </Counter>
      </div>
      <div className='col-3 text-center'>
        {quantity * price}€
      </div>
    </div>
    </>
  )
}

export default Item