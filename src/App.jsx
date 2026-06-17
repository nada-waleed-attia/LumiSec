import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './features/auth/pages/Login';
import GRC from './features/GRC/pages/GRC';
import GRCDashboard from './features/GRC/pages/GRCDashboard';
import GRCAudits from './features/GRC/pages/GRCAudits';
import GRCStandards from './features/GRC/pages/GRCStandards';
import GRCRemediation from './features/GRC/pages/GRCRemediation';
import GRCSettings from './features/GRC/pages/GRCSettings';
import IncidentQueue from './features/SOAR/Pages/IncidentQueue';
import Soar from './features/SOAR/Pages/Soar';
import SoarAnalytics from './features/SOAR/Pages/SoarAnalytics';
import IncidentManagement from './features/SOAR/Pages/IncidentManagement';
import Network from './features/Network/Pages/Network';
import Dashboard from './features/Network/Pages/Dashboard';
import NetworkDiscovery from './features/Network/Pages/NetworkDiscovery';
import PortScanning from './features/Network/Pages/PortScanning';
import PacketCapture from './features/Network/Pages/PacketCapture';
import AssetInventory from './features/Network/Pages/AssetInventory';
import Misconfigurations from './features/Network/Pages/Misconfigurations';
import FlowMonitoring from './features/Network/Pages/FlowMonitoring';
import Phishing from './features/Phishing/Pages/Phishing';
import PhishingDashboard from './features/Phishing/Pages/PhishingDashboard';
import Campaigns from './features/Phishing/Pages/Campaigns';
import EmailTemplet from './features/Phishing/Pages/EmailTemplet';
import Recipients from './features/Phishing/Pages/Recipients';
import Reports from './features/Phishing/Pages/Reports';
import PhishingSettings from './features/Phishing/Pages/PhishingSettings';
import SIEMIntegration from './features/SIEMIntegration/pages/SIEMIntegration';

const myRouter = createBrowserRouter([
    { path: "/", element:  <Login />},
    { path: "/SIEMIntegration", element:  <SIEMIntegration />},
    { path: "/GRC", element:  <GRC/>,
        children:[
            { path: "", element:  <GRCDashboard/>},
            { path: "/GRC/Audits", element:  <GRCAudits/>},
            { path: "/GRC/Standards", element:  <GRCStandards/>},
            { path: "/GRC/Remediation", element:  <GRCRemediation/>},
            { path: "/GRC/Settings", element:  <GRCSettings/>},
        ]
    },
    { path: "/SOAR", element:  <Soar/>,
        children:[
            { path: "", element:  <SoarAnalytics/>},
            { path: "/SOAR/Analytics", element:  <SoarAnalytics/>},
            { path: "/SOAR/IncidentsQueue", element:  <IncidentQueue/>},
            { path: "/SOAR/IncidentManagement", element:  <IncidentManagement/>},
        ]
    },

    { path: "/Network", element:  <Network/>,
        children:[
            { path: "", element:  <Dashboard/>},
            { path: "/Network/NetworkDiscovery", element:  <NetworkDiscovery/>},
            { path: "/Network/PortScanning", element:  <PortScanning/>},
            { path: "/Network/packetCapture", element:  <PacketCapture />},
            { path: "/Network/AssetInventory", element:  <AssetInventory />},
            { path: "/Network/Misconfigurations", element:  <Misconfigurations />},
            { path: "/Network/FlowMonitoring", element:  <FlowMonitoring />},
        ]
    },


    { path: "/Phishing", element:  <Phishing/>,
        children:[
            { path: "", element:  <PhishingDashboard />},
            { path: "/Phishing/Campaigns", element:  <Campaigns/>},
            { path: "/Phishing/EmailTemplates", element:  <EmailTemplet />},
            { path: "/Phishing/Recipients", element:  <Recipients />},
            { path: "/Phishing/Reports", element:  <Reports />},
            { path: "/Phishing/Settings", element:  <PhishingSettings />},
        ]
    },

])

function App() {
return <>

    <RouterProvider router={myRouter} />


    </>
}

export default App;
