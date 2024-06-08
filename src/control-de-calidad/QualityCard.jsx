import React from 'react';

const QualityCard = ({ data }) => {
  return (
    <div className="quality-card">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p><strong>Estado:</strong> {data.status}</p>
    </div>
  );
};
    
export default QualityCard;
