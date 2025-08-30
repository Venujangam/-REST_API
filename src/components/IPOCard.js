import React from 'react';

const IPOCard = ({ ipo }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{ipo.name}</h5>
      <p className="card-text">{ipo.description}</p>
    </div>
  </div>
);

export default IPOCard;
