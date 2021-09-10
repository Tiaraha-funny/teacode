import React, { useEffect, useState } from 'react'
import { ENDPOINT } from '../App'
import SortData from './sort'

function FetchData() {
  const [contacts, setContacts] = useState()

  const fetchData = async () => {
    const response = await fetch(ENDPOINT)
    const data = await response.json()
    const newArr = data.map((el) => [{ ...el, checked: false }])
    const flatArray = Array.prototype.concat.apply([], newArr)
    setContacts(flatArray)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <SortData setContacts={setContacts} contacts={contacts} />
}

export default FetchData
