import React from "react";
import "./Actions.css";

import flashOn from "../../../../assets/Flash On.png";
import module from "../../../../assets/Module.png";
import warningSheild from "../../../../assets/Warning Shield.png";
import wiFi from "../../../../assets/Wi-Fi Disconnected.png";
import IrisScan from "../../../../assets/Iris Scan.png";
import KeySecurity from "../../../../assets/Key Security.png";

export default function Actions() {
  return (
    <div className="actions-container mb-5">

      {/* ================= RECOMMENDED ACTIONS ================= */}
      <div className="section-block mb-3">

        <div className="section-header d-flex align-items-center">
          <figure>
            <img src={flashOn} className="icon" alt="flash on" />
          </figure>
          <h5 className="text-white mb-0">Recommended Actions</h5>
        </div>

        <div className="actions-buttons">

          <button className="action-btn isolate-btn w-100 d-flex align-items-center">
            <img src={wiFi} alt="wiFi" />
            Isolate Host
          </button>

          <button className="action-btn scan-btn w-100 d-flex align-items-center">
            <img src={IrisScan} alt="scan" />
            Scan Endpoint
          </button>

          <button className="action-btn reset-btn w-100 d-flex align-items-center">
            <img src={KeySecurity} alt="reset" />
            Reset User Password
          </button>

        </div>
      </div>

      {/* ================= RELATED INCIDENTS ================= */}
      <div className="section-block">

        <div className="section-header d-flex align-items-center">
          <figure>
            <img src={module} className="icon" alt="module" />
          </figure>
          <h5 className="text-white mb-0">Related Incidents</h5>
        </div>

        <div className="card-list">

          <div className="action-card p-3 rounded-3">
            <p className="text-white fw-medium mb-1">Similar malware on SRV-02</p>
            <p className="text-white mb-0">Oct 24, 2025</p>
          </div>

          <div className="action-card p-3 rounded-3">
            <p className="text-white fw-medium mb-1">Network anomaly detected</p>
            <p className="text-white mb-0">Oct 23, 2025</p>
          </div>

        </div>
      </div>

      {/* ================= LINKED ALERTS ================= */}
      <div className="section-block">

        <div className="section-header d-flex align-items-center">
          <figure>
            <img src={warningSheild} className="icon" alt="warning" />
          </figure>
          <h5 className="text-white mb-0">Linked Alerts</h5>
        </div>

        <div className="card-list">

          <div className="action-card p-3 rounded-3">

            <div className="alert-row">
              <p className="text-white fw-medium mb-0">Suspicious Process</p>
              <p className="high-action px-3 rounded-3 mb-0">High</p>
            </div>

            <p className="text-white mb-0">CrowdStrike • 10:15 AM</p>
          </div>

          <div className="action-card p-3 rounded-3">

            <div className="alert-row">
              <p className="text-white fw-medium mb-0">Network Connection</p>
              <p className="medium-action px-3 rounded-3 mb-0">Medium</p>
            </div>

            <p className="text-white mb-0">Firewall • 10:16 AM</p>
          </div>

          <div className="action-card p-3 rounded-3">

            <div className="alert-row">
              <p className="text-white fw-medium mb-0">File Hash Match</p>
              <p className="high-action px-3 rounded-3 mb-0">Critical</p>
            </div>

            <p className="text-white mb-0">VirusTotal • 10:17 AM</p>
          </div>

        </div>
      </div>

    </div>
  );
}