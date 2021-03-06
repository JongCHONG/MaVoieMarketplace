import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal'

const MyVerticallyCenteredModal = ({ handlenewitem, onHide, show }) => {
  const [itemName, setItemName] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [price, setPrice] = useState(null)
  const [error, setError] = useState(null)

  const handleItemName = (e) => {
    setItemName(e.target.value)
  }
  const handleQuantity = (e) => {
    setQuantity(e.target.value)
  }
  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!itemName) {
      setError("Enter a name.")
    } else if (quantity < 0 || price < 0) {
      setError("Incorrect price or quantity.")
    } else {
      handlenewitem(itemName, quantity, price)
      setError("")
      setItemName("")
      setPrice("")
      setQuantity("")
      onHide()
    }
  }
  const handleCancel = () => {
    setError("")
    onHide()
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new item
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="form-floating mb-3">
            <input 
              type="text" 
              className="form-control" 
              id="floatingInput" 
              placeholder="Name" 
              onChange={handleItemName}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input 
              type="number" 
              className="form-control" 
              id="floatingInput" 
              placeholder="Quantity" 
              min="0"
              onChange={handleQuantity}
            />
            <label htmlFor="floatingInput">Quantity</label>
          </div>
          <div className="form-floating mb-3">
            <input 
              type="number" 
              className="form-control" 
              id="floatingInput" 
              placeholder="Price" 
              min="0"
              onChange={handlePrice}
            />
            <label htmlFor="floatingInput">Price</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {error && 
            <div className='text-danger'>
              {error}
            </div>
          }
          <button 
            type="button" 
            className="btn btn-outline-secondary" 
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="btn btn-outline-secondary" 
            onClick={handleSubmit}
          >
            Add Item
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default MyVerticallyCenteredModal 