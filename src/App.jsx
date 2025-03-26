import { useEffect, useState } from "react";
import "./App.css";
import AffiliateDashboard from "./pages/AffiliateDashboard";
import MentorshipButton from "./components/MentorshipButton";
import LiveMentorship from "./components/LiveMentorship";
import ChatIcon from "./assets/chat.svg";
import MentorIcon from "./assets/mentor.svg";
import ChatWithMentor from "./components/ChatWithMentor";
function App() {
  const [available, setAvailable] = useState(false);
  const [showMentorship, setShowMentorship] = useState(false);
  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const hours = now.getHours();
      if (hours >= 19 && hours < 22) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    };

    checkAvailability();

    const interval = setInterval(checkAvailability, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="chat-with-mentor-container">
        <div className="chat-with-mentor-container-inner">
          <MentorshipButton
            available={available}
            onClick={() => setShowMentorship(!showMentorship)}
            text={"Live 1:1 Mentorship"}
            icon={MentorIcon}
          />
          <ChatWithMentor
            available={true}
            text={"Chat with Mentor"}
            onClick={() => {}}
            icon={ChatIcon}
          />
        </div>
      </div>
      {showMentorship && (
        <LiveMentorship
          setShowMentorship={setShowMentorship}
          available={available}
        />
      )}
      <AffiliateDashboard />
    </>
  );
}

export default App;
