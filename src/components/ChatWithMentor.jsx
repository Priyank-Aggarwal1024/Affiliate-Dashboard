import "../styles/MentorshipButton.css";
function ChatWithMentor({ available, onClick, icon, text }) {
  return (
    <div className="mentorship-button " onClick={onClick} id="chat-with-mentor">
      <div
        className={`mentorship-button-active ${available && "active"}`}
      ></div>
      <div className="mentorship-button-inner chat-with-mentor">
        <img src={icon} alt="icon" />
        <span>{text}</span>
      </div>
    </div>
  );
}

export default ChatWithMentor;
