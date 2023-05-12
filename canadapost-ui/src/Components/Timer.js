import React, { useState, useEffect } from 'react';

const Timer = () => {
    // <br />
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };
  const formattedDate = time.toLocaleDateString('en-US', options);
  const formattedTime = time.toLocaleTimeString('en-US', options);

  return (
    <div className=''>
      <p style={{ fontSize: '12px' }}>{formattedDate}</p>
      <br />
    </div>
  );
}

export default Timer;
