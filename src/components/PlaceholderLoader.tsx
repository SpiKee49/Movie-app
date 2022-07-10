import React from 'react';

function PlaceholderLoader({
  center,
}: {
  center: boolean;
}) {
  return (
    <section
      className={
        center ? 'loader-wrap center' : 'loader-wrap'
      }
    >
      <div className="loader"></div>
    </section>
  );
}

export default PlaceholderLoader;
