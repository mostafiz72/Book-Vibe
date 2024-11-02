import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

export default function SingleBook() {

        const { id } = useParams();
        const bookId = parseInt(id);  // string k number kora hoyse ekhane
        const data = useLoaderData();
        const book = data.find(book => book.id === bookId);  /// amra j id te click kortesi sei id to amra ekhane id er mordhe paitesi >>>>>>>>> to ekhane bola hoyse ami j id te click kortesi sei id er sate amade joto data or object ase asi gula mordhe theke j tar sate milbe seita amake deye day
        console.log(book);
        

  return (
    <div>
      <h1 className=' text-center py-5 text-green-600 font-bold'>This is SingleBook page here now: {id} </h1>
    </div>
  )
}
