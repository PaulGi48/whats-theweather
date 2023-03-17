import React, { useState, useEffect } from 'react';
import spinner from './loading.gif';
import Image from 'next/image';

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  return showSpinner ? (
    <div className='flex justify-center'>
      <Image src={spinner} alt='loading' width={40} height={40} />
    </div>
  ) : null;
};

export default Spinner;

