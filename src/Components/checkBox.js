import React from 'react'

function HandleCheckBox({ searchNames, item, setContacts, contacts }) {
  let arrOfIds = []
  const handleCheckbox = (id) => {
    const changeCheckedItemToTrue = searchNames.map((el) => {
      if (el.id === id) {
        return { ...el, checked: !el.checked }
      }
      return el
    })
    setContacts(changeCheckedItemToTrue)
  }

  const getTheCheckedIds = contacts?.some((check) => {
    if (check.checked === true) {
      arrOfIds.push(check)
    }
  })
  console.log('these are the contacts clicked ids', getTheCheckedIds)

  return (
    <input
      type='checkbox'
      onChange={() => handleCheckbox(item.id)}
      className='item'
    />
  )
}

export default HandleCheckBox
