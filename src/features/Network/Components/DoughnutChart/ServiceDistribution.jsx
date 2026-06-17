import React from 'react';
import "./ServiceDistribution.css";

const services = [
  { color: "#00D5FF", text: "SSH", value: 3 },
  { color: "#18D28E", text: "HTTP/HTTPS", value: 3 },
  { color: "#FFB11B", text: "Databases", value: 2 },
  { color: "#9D7CFF", text: "Mail", value: 3 },
  { color: "#FF5555", text: "Files", value: 2 },
  { color: "#70809B", text: "Other", value: 7 }
];

export default function ServiceDistribution() {
  return (
    <div className="service-card">
      
      <div className="chart-container">
      <svg viewBox="0 0 300 300">
        {/* تم دفع القاعدة للأسفل (140->100) وللأعلى (160->200) ولليسار (140->100) ولليمين (160->200) */}
        
        {/* TOP */}
        <path d="M120 30 Q150 20 180 30 L165 100 Q150 95 135 100 Z" className="segment" fill="#697A96" />
        
        {/* RIGHT */}
        <path d="M270 120 Q280 150 270 180 L200 165 Q195 150 200 135 Z" className="segment" fill="#697A96" />
        
        {/* BOTTOM */}
        <path d="M180 270 Q150 280 120 270 L135 200 Q150 205 165 200 Z" className="segment" fill="#697A96" />
        
        {/* LEFT */}
        <path d="M30 180 Q20 150 30 120 L100 135 Q105 150 100 165 Z" className="segment" fill="#697A96" />
    </svg>

        <div className="center">
          <h1>20</h1>
          <p>Total Ports</p>
        </div>
      </div>

      <div className="services">
        {services.map((s, i) => (
          <ServiceItem key={i} {...s} />
        ))}
      </div>
    </div>
  );
}

function ServiceItem({ color, text, value }) {
  return (
    <div className="service-item">
      <div className="service-left">
        <span className="service-color" style={{ background: color }}></span>
        <span>{text}</span>
      </div>
      <strong>{value}</strong>
    </div>
  );
}