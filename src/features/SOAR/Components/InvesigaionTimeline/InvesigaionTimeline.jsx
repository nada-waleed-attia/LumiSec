import React from "react";
import "./InvesigaionTimeline.css";
import clock from "../../../../assets/Clock.png";

export default function InvesigaionTimeline() {
  return (
    <div className="timeline-container">

      {/* HEADER */}
      <div className="section-header d-flex align-items-center">
        <figure>
          <img src={clock} className="icon" alt="clock" />
        </figure>
        <h5 className="text-white mb-0">Invesigaion Timeline</h5>
      </div>

      {/* TIMELINE ITEMS */}
      <div className="timeline-list">

        <div className="dashboard-card timeline-item">
          <div className="timeline-header">
            <h5 className="Invesigaion-Timeline-title">10:15 AM - System</h5>
            <p>Just now</p>
          </div>
          <p className="text-white mb-0">Incident Created</p>
        </div>

        <div className="dashboard-card timeline-item">
          <div className="timeline-header">
            <h5 className="Invesigaion-Timeline-title-darkBlue">
              10:16 AM - Automation
            </h5>
            <p>1 min ago</p>
          </div>
          <p className="text-white mb-0">
            Playbook "Threat Response" triggered automatically
          </p>
        </div>

        <div className="dashboard-card timeline-item">
          <div className="timeline-header">
            <h5 className="Invesigaion-Timeline-title-darkBlue">
              10:15 AM - System
            </h5>
            <p>Just now</p>
          </div>
          <p className="text-white mb-0">Incident Created</p>
        </div>

        <div className="dashboard-card timeline-item">
          <div className="timeline-header">
            <h5 className="Invesigaion-Timeline-title">10:17 AM - Automation</h5>
            <p>2 min ago</p>
          </div>
          <p className="text-white mb-0">
            IP 192.168.1.104 enriched via VirusTotal
          </p>
          <p className="text-danger mb-0">Result: 67/90 Malicious</p>
        </div>

        {/* NOTE INPUT */}
        <div className="text-area-card rounded-3 p-2 mb-3">
          <textarea
            className="w-100 text-white mb-3"
            placeholder="Add Investigation note..."
          />

          <div className="d-flex justify-content-end">
            <button className="btn add-note-btn border-0 text-white">
              Add Note
            </button>
          </div>
        </div>

        <div className="dashboard-card timeline-item">
          <div className="timeline-header">
            <h5 className="Invesigaion-Timeline-title-green">
              10:16 AM - Aly Hisham
            </h5>
            <p>5 min ago</p>
          </div>
          <p className="text-white mb-0">
            Host SRV-01 has been isolated from the network pending investigation.
          </p>
        </div>

      </div>
    </div>
  );
}