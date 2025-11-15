import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Information from "./components/Information";
import NameDetails from "./components/NameDetails";
import VerifyOtp from "./components/VerifyOtp";
import LoadingPage from "./components/LoadingPage";
import Vision from "./components/Vision";
import ContactDetails from "./components/ContactDetails";
import InvestmentDetails from "./components/InvestmentDetails";
import PMSService from "./components/PMSService";
import GetStarted from "./components/GetStarted";
import ScheduleComponent from "./components/ScheduleComponent";
import EmailDetails from "./components/EmailDetails";
import ConfirmationPage from "./components/ConfirmationPage";

import Page from "./components/Page";

import "./App.css";

import { DetailsContext } from "./components/contexts/Details";

function App() {
  const [data, setData] = useState({
    date: "",
    time: "",
    duration: "45 minutes",
    email: "",
    guestEmail: "",
    timezone: "Indian Standard Time (IST)",
  });

  return (
    <>
      <DetailsContext.Provider value={{ data, setData }}>
        <Routes>
          <Route
            path="/"
            element={<Page Left={Information} Right={NameDetails} />}
          />

          <Route
            path="/contactDetails"
            element={<Page Left={Vision} Right={ContactDetails} />}
          />
          <Route path="/verification" element={<VerifyOtp />} />

          <Route
            path="/investmentDetails"
            element={<Page Left={Vision} Right={InvestmentDetails} />}
          />

          <Route
            path="/getStarted"
            element={<Page Left={PMSService} Right={GetStarted} />}
          />

          <Route
            path="/scheduleCall"
            element={<Page Left={Information} Right={ScheduleComponent} />}
          />

          <Route
            path="/emailDetails"
            element={<Page Left={Information} Right={EmailDetails} />}
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/landingPage" element={<LoadingPage />} />
        </Routes>
      </DetailsContext.Provider>
    </>
  );
}

export default App;
