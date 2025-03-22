import "../styles/AffiliateLinks.css";
function AffiliateLinks() {
  const courses = [
    {
      course_name: "Adobe Illustrator",
      img: "https://storage.googleapis.com/test694/Images/ai.webp",
      slug: "illustrator",
      affiliate_link: "https://tutedude.com/Adobe illustrator/khushi",
      successful_referals: 245,
      earning: "₹2500",
      price: "₹3500",
    },
    {
      course_name: "Adobe Illustrator",
      img: "https://storage.googleapis.com/test694/Images/ai.webp",
      slug: "illustrator",
      affiliate_link: "https://tutedude.com/Adobe illustrator/khushi",
      successful_referals: 245,
      earning: "₹2500",
      price: "₹3500",
    },
  ];
  return (
    <>
      <div className="affiliate-links">
        <div className="affiliate-links-courses">
          {courses.map((course, idx) => (
            <div className="affiliate-links-course" key={idx}>
              <div className="affiliate-links-course-top">
                <div className="affiliate-lct-left">
                  <img
                    src={course.img}
                    alt={course.course_name}
                    className="affiliate-lct-img"
                  />
                  <div className="affiliate-lctl-detail">
                    <div className="affiliate-lctl-name">
                      {course.course_name}
                    </div>
                    <div className="affiliate-lctl-price-div">
                      <div className="affiliate-lctl-price">{course.price}</div>
                      <div className="affiliate-lct-right">90+ Conversion</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="affiliate-links-course-middle">
                <div className="affiliate-lcm--head">Affiliate Link:</div>
                <div className="affiliate-lcm-box">
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
                  <p>{course.affiliate_link}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    style={{ marginLeft: "auto", cursor: "pointer" }}
                    onClick={() =>
                      navigator.clipboard
                        .writeText(course.affiliate_link)
                        .then(() => alert("Link copied to clipboard!"))
                        .catch((err) => console.error("Failed to copy:", err))
                    }
                  >
                    <g opacity="0.6">
                      <path
                        d="M20.7188 24.875H9.34375C8.37405 24.875 7.44407 24.4898 6.75839 23.8041C6.07271 23.1184 5.6875 22.1884 5.6875 21.2188V9.84375C5.6875 8.87405 6.07271 7.94407 6.75839 7.25839C7.44407 6.57271 8.37405 6.1875 9.34375 6.1875H20.7188C21.6884 6.1875 22.6184 6.57271 23.3041 7.25839C23.9898 7.94407 24.375 8.87405 24.375 9.84375V21.2188C24.375 22.1884 23.9898 23.1184 23.3041 23.8041C22.6184 24.4898 21.6884 24.875 20.7188 24.875Z"
                        fill="#800080"
                      />
                      <path
                        d="M8.125 4.5625H20.1033C19.8505 3.85016 19.3835 3.23349 18.7663 2.79708C18.1492 2.36068 17.4121 2.12591 16.6562 2.125H5.28125C4.31155 2.125 3.38157 2.51021 2.69589 3.19589C2.01021 3.88157 1.625 4.81155 1.625 5.78125V17.1562C1.62591 17.9121 1.86068 18.6492 2.29708 19.2663C2.73349 19.8835 3.35016 20.3505 4.0625 20.6033V8.625C4.0625 7.54756 4.49051 6.51425 5.25238 5.75238C6.01425 4.99051 7.04756 4.5625 8.125 4.5625Z"
                        fill="#800080"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="affiliate-links-course-bottom">
                <div className="affiliate-lcb-cardref">
                  <div className="affiliate-lcb-card-title">
                    Successful Referrals
                  </div>
                  <div className="affiliate-lcb-card-no">
                    {course.successful_referals}
                  </div>
                </div>
                <div className="affiliate-lcb-cardearn">
                  <div className="affiliate-lcb-card-title">Earnings</div>
                  <div className="affiliate-lcb-card-no">{course.earning}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AffiliateLinks;
