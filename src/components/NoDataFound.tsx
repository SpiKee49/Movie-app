import React from 'react';

export default function NoDataFound() {
  return (
    <div className="no-data">
      <img
        src={require('../assets/img/no-data.png')}
        alt="no data found"
      />
    </div>
  );
}
