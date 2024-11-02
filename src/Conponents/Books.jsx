import React, { useEffect, useState } from 'react'
import Book from './Book'

export default function Books() {

    const [myData, setMyData] = useState([])


    useEffect(() =>{
        fetch('AllData.json')
       .then(response => response.json())
       .then(data => setMyData(data))
    }, [])


  return (
    <div className=' container mx-auto py-10'>
        <div className=' grid grid-cols-3 gap-10'>
            {myData.map(book => <Book key={book.id} book={book}></Book> )}
        </div>
    </div>
  )
}
