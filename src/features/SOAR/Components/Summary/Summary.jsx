import React from "react";
import "./Summary.css";

import breif from "../../../../assets/Brief.png";
import TouchId from "../../../../assets/Touch ID.png";

export default function Summary() {
  return (
    <div className="summary-container">

      {/* ================= SUMMARY ================= */}
      <div className="summary-section mb-5">

        <div className="section-header d-flex align-items-center">
          <figure>
            <img src={breif} className="icon" alt="breif" />
          </figure>
          <h5 className="text-white mb-0">Summary</h5>
        </div>

        <div className="summary-grid">

          <div className="summary-row">
            <p className="title">Severity:</p>
            <p className="text-danger">Critical</p>
          </div>

          <div className="summary-row">
            <p className="title">Status:</p>
            <p className="in-progress">In Progress</p>
          </div>

          <div className="summary-row">
            <p className="title">Created:</p>
            <p className="text-white">Oct 26, 2025</p>
          </div>

          <div className="summary-row">
            <p className="title">Time:</p>
            <p className="text-white">10:15 AM</p>
          </div>

          <div className="summary-row">
            <p className="title">Source:</p>
            <p className="text-white">CrowdStrike</p>
          </div>

        </div>
      </div>

      {/* ================= ARTIFACTS ================= */}
      <div className="artifacts-section">

        <div className="section-header d-flex align-items-center">
          <figure>
            <img src={TouchId} className="icon" alt="TouchId" />
          </figure>
          <h5 className="text-white mb-0">Artifacts</h5>
        </div>

        {/* IP */}
        <div className="summary-card p-3 rounded-3 mb-3">
          <p className="summary-card-title">IP Addresses</p>

          <div className="artifact-row">
            <p className="text-white mb-0">192.168.1.104</p>
            <p className="block rounded-3 fw-bold px-3 py-1">Block</p>
          </div>
        </div>

        {/* Hash */}
        <div className="summary-card p-3 rounded-3 mb-3">
          <p className="summary-card-title">File Hashes</p>

          <div className="artifact-row">
            <p className="text-white mb-0">e1a2b3c4d5...</p>
            <p className="scan rounded-3 fw-bold px-3 py-1">Scan</p>
          </div>
        </div>

        {/* Domains */}
        <div className="summary-card p-3 rounded-3 mb-3">
          <p className="summary-card-title">Domains</p>

          <div className="artifact-row">
            <p className="text-white mb-0">malicious-domain.com</p>
          </div>
        </div>

        {/* Files */}
        <div className="summary-card p-3 rounded-3 mb-3">
          <p className="summary-card-title">Files</p>

          <div className="artifact-row">
            <p className="text-white mb-0">malware.exe</p>
          </div>
        </div>

      </div>
    </div>
  );
}