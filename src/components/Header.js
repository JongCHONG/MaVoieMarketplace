import React from 'react'

import styled from 'styled-components'
import { FcMoneyTransfer } from 'react-icons/fc'

const LogoTitle = styled.div`
  background-color: #4a6fa5;
  color: white;
  padding: 0.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const header = ({ totalItems }) => {

  return (
    <LogoTitle>
      <div className='mx-3'>
        <FcMoneyTransfer size={30} className='me-4'/>
        MaVoie - Marketplace
      </div>
      <div className='mx-3'>
        Total items : {totalItems}
      </div>
    </LogoTitle>
  )
}

export default header