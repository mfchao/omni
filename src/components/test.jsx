import React, {useState} from "react";
import Cover from "./components/Cover";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition/lib/SpeechRecognition";


function Home() {
  
  const commands = [
    {
      command: ["Go to *", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage)
    }
  ];

  const {transcript} = useSpeechRecognition({commands});
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ["home", "cover"]
  const urls = { 
    home: "/",
    cover: "/cover",
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    console.log("Speech Recognition not supported in this browser");
    return null;
  }

  let Redirect;

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      Redirect = <Navigate to={urls[redirectUrl]} replace={true} />
      console.log('redirected to ' + urls[redirectUrl])
    } else {
      Redirect = <p>Could not find page: {redirectUrl}</p>
    }
  }

  return (
    <div >

      <BrowserRouter>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/cover">Cover</Link>
      </div>

      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/home" Component={Home}/>
        <Route path="/cover" exact Component={Cover}/>
      </Routes>

      {Redirect}

      </BrowserRouter>

      <p id="transcript">Transcript: {transcript}</p>

      <button onClick={SpeechRecognition.startListening}>Start</button>

     
    </div>
  );
}

export default Home;
