import React from 'react'
import SearchNames from './searchNames'

function SortData({ contacts }) {
  const sortedData = contacts?.sort((a, b) =>
    a.last_name.toLowerCase() > b.last_name.toLowerCase() ? 1 : -1
  )
  return <SearchNames sortedData={sortedData} />
}
export default SortData
