import React from 'react'
import HandleCheckBox from './checkBox'

function Display({ item, searchNames, contacts, setContacts }) {
  return (
    <li key={item.id}>
      <label>
        <div className='content'>
          <img src={item.avatar} />
          <div className='wrapper'>
            <h3>
              {item.first_name} {item.last_name}
            </h3>
            <p className='description'>{item.email}</p>
          </div>
        </div>
        <HandleCheckBox
          item={item}
          searchNames={searchNames}
          setContacts={setContacts}
          contacts={contacts}
        />
      </label>
    </li>
  )
}

export default Display
