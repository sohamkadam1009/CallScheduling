import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

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
import { OtpVerification } from "./components/contexts/OtpVerification";

function App() {
  const [data, setData] = useState({
    date: "",
    time: "",
    duration: "45 minutes",
    email: "",
    guestEmail: "",
    timezone: "Indian Standard Time (IST)",
  });
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("userData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <OtpVerification.Provider value={{ isOTPVerified, setIsOTPVerified }}>
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
      </OtpVerification.Provider>
    </>
  );
}

export default App;
