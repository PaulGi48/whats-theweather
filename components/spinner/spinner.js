import React from 'react';
import spinner from './loading.gif';
import Image from 'next/image';

const Spinner = () => {
  return (
    <>
      <div className='flex justify-center'>
        <Image src={spinner} alt='loading' width={200} height={200} />
      </div>
    </>
  );
};

export default Spinner;
