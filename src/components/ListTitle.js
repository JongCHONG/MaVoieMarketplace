import React from 'react'

import styled from 'styled-components'

const Subtitle = styled.div`
  color: #4f6d7a;
  font-weight: bold;
`

const ListTitle = () => {
  return (
    <div className='row py-3 d-flex align-items-center border-bottom border-white'>
      <div className='col-3'>
        <Subtitle>
          Items
        </Subtitle>
      </div>  
      <div className='col-3'>
        <Subtitle>
          Unit price
        </Subtitle>
      </div>  
      <div className='col-3 text-center'>
        <Subtitle>
          Quantity
        </Subtitle>
      </div>  
      <div className='col-3 text-center'>
        <Subtitle>
          Price
        </Subtitle>
      </div>  
    </div>
  )
}

export default ListTitle