import "../styles/MentorshipButton.css";
function MentorshipButton({ available, onClick, icon, text }) {
  return (
    <div
      className="mentorship-button "
      onClick={onClick}
      id="live-1-1-mentorship"
    >
      <div
        className={`mentorship-button-active ${available && "active"}`}
      ></div>
      <div className="mentorship-button-new">
        <span>New</span>
        <div className="mentorship-button-rectangle"></div>
      </div>
      <div className="mentorship-button-inner chat-with-mentor-live">
        <img src={icon} alt="icon" />
        <span>{text}</span>
      </div>
    </div>
  );
}

export default MentorshipButton;
