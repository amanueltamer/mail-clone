import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
// import RecruiterMode from "./RecruiterMode";

function App() {
  console.log("App component rendered!");
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // the user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  const renderApp = () => {
    console.log("renderApp function called");
    setIsRecruiterMode(true);
    console.log("isRecruiterMode state set to true");
    console.log("App component rendered!");
  };

  return (
    <Router>
      {!user && !isRecruiterMode? (
        console.log("Rendering login screen"),
        <Login renderApp={renderApp} />
      ) : (
        (console.log("Rendering main app UI"),
        (
          <div className="App">
            <Header />

            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/mail" element={<Mail />}></Route>
                <Route path="/" element={<EmailList />}></Route>
              </Routes>
            </div>

            {sendMessageIsOpen && <SendMail />}
          </div>
        ))
      )}
    </Router>
  );
}

export default App;
