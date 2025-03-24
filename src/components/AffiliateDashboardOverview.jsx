import { useState } from "react";
// import avatar from "../assets/avatar.svg";
import calendar from "../assets/calendar.svg";

function AffiliateDashboardOverview({ affiliateUser, affiliateCoursesData }) {
  const [tab, setTab] = useState(0);
  const [month, setMonth] = useState("March");
  const [selectOpen, setSelectOpen] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="affiliate-dmb-month">
        <div
          className="affiliate-dmb-month-inner"
          onClick={() => setSelectOpen(!selectOpen)}
        >
          <img src={calendar} alt="Calendar" />
          <p>{month}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.41 7L10 11.3302L14.59 7L16 8.33962L10 14L4 8.33962L5.41 7Z"
              fill="#902190"
            />
          </svg>
          {selectOpen && (
            <div className="affiliate-dmb-month-selects">
              {months.map((m) => (
                <p key={m} onClick={() => setMonth(m)}>
                  {m}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="affiliate-dmb-stats-outer">
        <div className="affiliate-dmb-stats">
          <div className="affiliate-dmb-stats-card">
            <div className="affiliate-dmbsc-top">Total Earning</div>
            <div className="affiliate-dmbsc-bottom">
              <div className="affiliate-dmbscb-no">{affiliateUser.earning}</div>
              <div className="affiliate-dmbscb-time">This month</div>
            </div>
          </div>
          <div className="affiliate-dmb-stats-card">
            <div className="affiliate-dmbsc-top">Total Clicks</div>
            <div className="affiliate-dmbsc-bottom">
              <div className="affiliate-dmbscb-no">
                {affiliateUser.totalClicks}
              </div>
              <div className="affiliate-dmbscb-time">This month</div>
            </div>
          </div>
          <div className="affiliate-dmb-stats-card">
            <div className="affiliate-dmbsc-top">Successful referrals</div>
            <div className="affiliate-dmbsc-bottom">
              <div className="affiliate-dmbscb-no">
                {affiliateUser.payMember.length}
              </div>
              <div className="affiliate-dmbscb-time">This month</div>
            </div>
          </div>
          <div className="affiliate-dmb-stats-card">
            <div className="affiliate-dmbsc-top">Total Conversion rates</div>
            <div className="affiliate-dmbsc-bottom">
              <div className="affiliate-dmbscb-no">
                {affiliateUser.totalClicks /
                  Math.max(affiliateUser.payMember.length, 1)}
              </div>
              <div className="affiliate-dmbscb-time">This month</div>
            </div>
          </div>
        </div>
      </div>
      <div className="affiliate-dmb-courses">
        <div className="affiliate-dmb-courses-top">
          <div className="affiliate-dmbct-head">
            Courses and their Affiliate links
          </div>
          <div className="affiliate-dmbct-nav">
            {affiliateCoursesData.map((item, idx) => (
              <div
                className={`affiliate-dmbct-nav-item ${tab == idx && "active"}`}
                key={idx}
                onClick={() => setTab(idx)}
              >
                {item.category}
              </div>
            ))}
          </div>
        </div>
        <div className="affiliate-dmb-courses-bottom">
          {affiliateCoursesData[tab].courses.map((course, idx) => (
            <div className="affiliate-dmbcb-course">
              <div className="affiliate-dmbcb-course-course">Course</div>
              <div className="affiliate-dmbcb-course-left">
                <div className="affiliate-dmbcbcl-left">
                  <img src={course.img} alt={course.course_name} />
                </div>
                <div className="affiliate-dmbcbcl-right">
                  <div className="affiliate-dmbcbcl-left-name">
                    {course.course_name}
                  </div>
                  <div className="affiliate-dmbcbcl-left-bottom">
                    <div className="affiliate-dmbcbcl-price">
                      ₹{course.price}
                    </div>
                    <div className="affiliate-dmbcbcl-conversion">
                      90+ Conversion
                    </div>
                  </div>
                </div>
              </div>
              <div className="affiliate-dmbcb-course-right">
                <div className="affiliate-dmbcbcr-top">Affiliate Link:</div>
                <div className="affiliate-dmbcbcr-bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <path
                      d="M14.472 22.2131H9.60588C8.05488 22.2131 6.73304 21.6668 5.64038 20.5741C4.54771 19.4815 4.00092 18.1592 4 16.6073C3.99908 15.0553 4.54588 13.733 5.64038 12.6404C6.73488 11.5477 8.05671 11.0009 9.60588 11H14.472V12.375H9.60588C8.44171 12.375 7.44575 12.7893 6.618 13.618C5.78933 14.4476 5.375 15.444 5.375 16.6073C5.375 17.7705 5.78933 18.7665 6.618 19.5951C7.44667 20.4238 8.44263 20.8381 9.60588 20.8381H14.472V22.2131ZM11.5625 17.2948V15.9198H21.1875V17.2948H11.5625ZM18.2794 22.2131V20.8381H23.1441C24.3083 20.8381 25.3043 20.4238 26.132 19.5951C26.9607 18.7665 27.375 17.7705 27.375 16.6073C27.375 15.444 26.9607 14.448 26.132 13.6194C25.3033 12.7907 24.3074 12.3764 23.1441 12.3764H18.2794V11.0014H23.1441C24.6951 11.0014 26.0174 11.5477 27.111 12.6404C28.2046 13.733 28.7509 15.0553 28.75 16.6073C28.7491 18.1592 28.2023 19.4815 27.1096 20.5741C26.017 21.6668 24.6951 22.2136 23.1441 22.2145L18.2794 22.2131Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                  <p className="affiliate-dmbcbcr-link">
                    {"https://tutedude.com/" + course.slug}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    style={{ marginLeft: "auto", cursor: "pointer" }}
                    onClick={() =>
                      navigator.clipboard
                        .writeText("https://tutedude.com/" + course.slug)
                        .then(() => alert("Link copied to clipboard!"))
                        .catch((err) => console.error("Failed to copy:", err))
                    }
                  >
                    <g opacity="0.6">
                      <path
                        d="M20.7188 24.375H9.34375C8.37405 24.375 7.44407 23.9898 6.75839 23.3041C6.07271 22.6184 5.6875 21.6884 5.6875 20.7188V9.34375C5.6875 8.37405 6.07271 7.44407 6.75839 6.75839C7.44407 6.07271 8.37405 5.6875 9.34375 5.6875H20.7188C21.6884 5.6875 22.6184 6.07271 23.3041 6.75839C23.9898 7.44407 24.375 8.37405 24.375 9.34375V20.7188C24.375 21.6884 23.9898 22.6184 23.3041 23.3041C22.6184 23.9898 21.6884 24.375 20.7188 24.375Z"
                        fill="#800080"
                      />
                      <path
                        d="M8.125 4.0625H20.1033C19.8505 3.35016 19.3835 2.73349 18.7663 2.29708C18.1492 1.86068 17.4121 1.62591 16.6562 1.625H5.28125C4.31155 1.625 3.38157 2.01021 2.69589 2.69589C2.01021 3.38157 1.625 4.31155 1.625 5.28125V16.6562C1.62591 17.4121 1.86068 18.1492 2.29708 18.7663C2.73349 19.3835 3.35016 19.8505 4.0625 20.1033V8.125C4.0625 7.04756 4.49051 6.01425 5.25238 5.25238C6.01425 4.49051 7.04756 4.0625 8.125 4.0625Z"
                        fill="#800080"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="affiliate-dmb-successfulrefrals">
        <div className="affiliate-dmbsr-head">Successful referrals</div>
        <div className="affiliate-dmbsr-main">
          <div className="affiliate-dmbsr-main-inner">
            <div className="affiliate-dmbsr-main-row">
              <div className="affiliate-dmbsr-main-title-col">Name</div>
              <div className="affiliate-dmbsr-main-title-col">Course name</div>
              <div className="affiliate-dmbsr-main-title-col">Course price</div>
              <div className="affiliate-dmbsr-main-title-col">Date</div>
            </div>
            {affiliateUser.payMember.map((refree, idx) =>
              refree.course.map((course, id) => (
                <div className="affiliate-dmbsr-main-row" key={`${idx}-${id}`}>
                  <div className="affiliate-dmbsr-main-data-col">
                    <img
                      src={refree.user.userimg}
                      alt={refree.user.name}
                      className="affiliate-dmbsr-main-data-col-refimg"
                    />
                    <p>{refree.user.name}</p>
                  </div>
                  <div className="affiliate-dmbsr-main-data-col">
                    {String(course.name).toUpperCase()}
                  </div>
                  <div className="affiliate-dmbsr-main-data-col">
                    ₹{course.price}
                  </div>
                  <div className="affiliate-dmbsr-main-data-col">
                    {refree.date}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="affiliate-dmbsr-buttons">
          <button className="affiliate-dmbsr-button active">Previous</button>
          <button className="affiliate-dmbsr-button button-digit active">
            1
          </button>
          <button className="affiliate-dmbsr-button button-digit">2</button>
          <button className="affiliate-dmbsr-button active">Next</button>
        </div>
      </div>
    </>
  );
}

export default AffiliateDashboardOverview;
