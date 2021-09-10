import React, { useState } from 'react'
import Display from './display'

function SearchNames({ sortedData, setContacts, contacts }) {
  const [search, setSearch] = useState('')
  const searchNames = sortedData?.filter((name) => {
    return (
      name.last_name.toLowerCase().includes(search) ||
      name.first_name.toLowerCase().includes(search)
    )
  })

  return (
    <div>
      <input
        className='fetch'
        type='text'
        name='name'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='search'
      />
      <ul>
        {searchNames?.map((item) => (
          <Display
            key={item.id}
            setContacts={setContacts}
            contacts={contacts}
            searchNames={searchNames}
            item={item}
          />
        ))}
      </ul>
    </div>
  )
}

export default SearchNames
