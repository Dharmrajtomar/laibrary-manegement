import React, { useState } from 'react';



import Categories from '../../Component/Categories';
import Searchfield from '../../Component/Searchfield';
import Booksdata from '../../Component/Bookdata';

const Books = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSearchTxt = (inputValue) => {
    setInputValue(inputValue);
  }

  return (
    <div className='p-2'>
      <section>
        <Categories />
        <Searchfield handleText={handleSearchTxt}/>
        <Booksdata title={'All Books'} inputValue={inputValue} />
      </section>
    </div>
  )
}

export default Books