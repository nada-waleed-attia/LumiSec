import React from "react";
import "./incidentTable.css";
import { Bot, TriangleAlert } from "lucide-react";

export default function IncidentTable() {
  return (
    <div className="incidentTable dashboard-card p-0">

      <div className="d-flex justify-content-between align-items-center mb-3 p-3">
        <h6 className="card-title-small m-0">
          UNIFIED INCIDENT MANAGEMENT QUEUE
        </h6>

        <button className="btn btn-sm btn-secondary">
          Filter: All Severities
        </button>
      </div>

      {/* Wrapper مهم للـ responsiveness */}
      <div className="table-responsive-wrapper">

        <table className="w-100 incidentTable">
          <thead>
            <tr>
              <th>Severity</th>
              <th>Incident & Entity Context</th>
              <th>SOAR Status / MITRE</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {/* ROW 1 */}
            <tr>
              <td data-label="Severity">
                <div className="status text-danger rounded-3 py-1 px-2 text-center">
                  CRITICAL
                </div>
              </td>

              <td data-label="Incident">
                <p className="h-3 mb-0 text-white fw-bold">
                  Malware Detection on SRV-01
                </p>
                <p className="mb-0">
                  ID: #1024 | Ransomware.Variant.X | Target: Domain Controller
                </p>
              </td>

              <td data-label="SOAR">
                <div className="d-flex align-items-center mb-1">
                  <Bot size={22} style={{ color: "#DBAB09" }} className="me-1" />
                  <p className="mitre mb-0">Pending Admin Approval</p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="tag rounded-3 px-2 text-center">T1486</div>
                  <div className="tag rounded-3 px-2 text-center ms-3">T1059</div>
                </div>
              </td>

              <td data-label="Action">
                <button className="investigate-btn btn add-btn text-white border-0">
                  Investigate
                </button>
              </td>
            </tr>

            {/* ROW 2 */}
            <tr>
              <td data-label="Severity">
                <div className="status high rounded-3 py-1 px-2 text-center">
                  HIGH
                </div>
              </td>

              <td data-label="Incident">
                <p className="h-3 mb-0 text-white fw-bold">
                  SSH Brute Force Attack
                </p>
                <p className="mb-0">
                  ID: #1025 | Target: Linux-DB-01 | Origin: 185.xx.xx.xx (RU)
                </p>
              </td>

              <td data-label="SOAR">
                <div className="d-flex align-items-center mb-1 ip-div">
                  <i className="fa-solid fa-circle-check me-1 fs-6"></i>
                  <p className="mitre mb-0">IP Auto-Blocked</p>
                </div>

                <div className="tag rounded-3 px-2 text-center">T1110</div>
              </td>

              <td data-label="Action">
                <button className="btn btn-secondary text-white border-0">
                  Review
                </button>
              </td>
            </tr>

            {/* ROW 3 */}
            <tr>
              <td data-label="Severity">
                <div className="status text-danger rounded-3 py-1 px-2 text-center">
                  CRITICAL
                </div>
              </td>

              <td data-label="Incident">
                <p className="h-3 mb-0 text-white fw-bold">
                  Anomalous Mass Data Exfiltration
                </p>
                <p className="mb-0">
                  ID: #1026 | Target: HR-File-Gateway | Volume: 12GB Outbound
                </p>
              </td>

              <td data-label="SOAR">
                <div className="d-flex align-items-center mb-1">
                  <TriangleAlert size={22} style={{ color: "#EF4444" }} className="me-1" />
                  <p className="mitre mb-0 trafic-text">Traffic Anomalous</p>
                </div>

                <div className="tag rounded-3 px-2 text-center">T1020</div>
              </td>

              <td data-label="Action">
                <button className="investigate-btn btn add-btn text-white border-0">
                  Investigate
                </button>
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}