import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Control from "../../pages/control/Control";
import Calibration from "../../pages/calibration/Calibration";
import WifiList from "../wifi-list/WifiList";
import ConnectForm from "../connect-form/ConnectForm";
import NotFound from "../../pages/not-found/NotFound";
import Wifi from "../../pages/wifi/Wifi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Control />} />
        <Route path="calibration" element={<Calibration />} />
        <Route path="/wifi" element={<Wifi />}>
          <Route path="/wifi" element={<WifiList />} />
          <Route path="/wifi/connection-to-/:id" element={<ConnectForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
