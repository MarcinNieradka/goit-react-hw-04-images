import React from 'react';
import { ClockLoader } from 'react-spinners';
import clsx from 'clsx';

const Loader = () => {
  return (
    <div className={clsx('LoaderOverlay')}>
      <div className={clsx('ClockLoaderWrapper')}>
        <ClockLoader color="#00BFFF" size={80} />
      </div>
    </div>
  );
};

export default Loader;
