import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Web Developer', 'Full Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed:50,
        }}
      />
    </div>
  )
}

export default Typed
