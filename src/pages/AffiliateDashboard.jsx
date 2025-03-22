import "../styles/AffiliateDashboard.css";
import avatar from "../assets/avatar.svg";
import { useState } from "react";
import AffiliateDashSideBar from "../components/AffiliateDashSideBar";
import { Route, Routes } from "react-router-dom";
import AffiliateDashboardOverview from "../components/AffiliateDashboardOverview";
import AffiliateWallet from "../components/AffiliateWallet";
import AffiliateLinks from "../components/AffiliateLinks";
function AffiliateDashboard() {
  const affiliateCoursesData = [
    {
      category: "Design",
      courses: [
        {
          course_name: "Python",
          img: "https://storage.googleapis.com/test694/Images/python.webp",
          slug: "python",
          price: 3500,
        },
        {
          course_name: "Java",
          img: "https://storage.googleapis.com/test694/Images/Java.webp",
          slug: "java",
          price: 3500,
        },
        {
          course_name: "Adobe Illustrator",
          img: "https://storage.googleapis.com/test694/Images/ai.webp",
          slug: "illustrator",
          price: 3500,
        },
        {
          course_name: "App Development",
          img: "https://storage.googleapis.com/test694/Images/appdev.webp",
          slug: "appdevelopment",
          price: 3500,
        },
      ],
    },
    {
      category: "Development",
      courses: [
        {
          course_name: "Java",
          img: "https://storage.googleapis.com/test694/Images/Java.webp",
          slug: "java",
          price: 3500,
        },
        {
          course_name: "Python",
          img: "https://storage.googleapis.com/test694/Images/python.webp",
          slug: "python",
          price: 3500,
        },
        {
          course_name: "Adobe Illustrator",
          img: "https://storage.googleapis.com/test694/Images/ai.webp",
          slug: "illustrator",
          price: 3500,
        },
        {
          course_name: "App Development",
          img: "https://storage.googleapis.com/test694/Images/appdev.webp",
          slug: "appdevelopment",
          price: 3500,
        },
      ],
    },
    {
      category: "IT Software",
      courses: [
        {
          course_name: "Java",
          img: "https://storage.googleapis.com/test694/Images/Java.webp",
          slug: "java",
          price: 3500,
        },
        {
          course_name: "Adobe Illustrator",
          img: "https://storage.googleapis.com/test694/Images/ai.webp",
          slug: "illustrator",
          price: 3500,
        },
        {
          course_name: "Python",
          img: "https://storage.googleapis.com/test694/Images/python.webp",
          slug: "python",
          price: 3500,
        },
        {
          course_name: "App Development",
          img: "https://storage.googleapis.com/test694/Images/appdev.webp",
          slug: "appdevelopment",
          price: 3500,
        },
      ],
    },
    {
      category: "Business",
      courses: [
        {
          course_name: "Python",
          img: "https://storage.googleapis.com/test694/Images/python.webp",
          slug: "python",
          price: 3500,
        },
        {
          course_name: "Java",
          img: "https://storage.googleapis.com/test694/Images/Java.webp",
          slug: "java",
          price: 3500,
        },
        {
          course_name: "App Development",
          img: "https://storage.googleapis.com/test694/Images/appdev.webp",
          slug: "appdevelopment",
          price: 3500,
        },
        {
          course_name: "Adobe Illustrator",
          img: "https://storage.googleapis.com/test694/Images/ai.webp",
          slug: "illustrator",
          price: 3500,
        },
      ],
    },
  ];
  const affiliateUser = {
    affID: "test_Ce3BIr",
    totalClicks: 4,
    cartMember: [],
    earning: 500,
    payMember: [
      {
        user: {
          name: "Brian Lee",
          userimg: avatar,
        },
        date: "14, March, 2025",
        course: [
          { name: "python", price: 3500 },
          ,
          { name: "python", price: 3500 },
          { name: "python", price: 3500 },
        ],
      },
    ],
  };
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="affiliate-dashboard">
        <AffiliateDashSideBar showNav={showNav} setShowNav={setShowNav} />
        <div className="affiliate-dashboard-main">
          <div className="affiliate-dashboard-main-top">
            <div className="affiliate-dmt-left">
              <div className="affiliate-dmt-left-head">Dashboard</div>
              <div className="affiliate-dmt-left-para">Welcome to Admin!</div>
            </div>
            <div className="affiliate-dmt-left-hamburger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                onClick={() => setShowNav(!showNav)}
              >
                <path
                  d="M4.875 29.25V26H34.125V29.25H4.875ZM4.875 21.125V17.875H34.125V21.125H4.875ZM4.875 13V9.75H34.125V13H4.875Z"
                  fill="#800080"
                />
              </svg>
            </div>
            <div className="affiliate-dmt-right">
              <img src={avatar} alt="Avatar" />
              <div className="">
                <div className="affiliate-dmt-r-username">Brian Lee</div>
                <div className="affiliate-dmt-r-role">Admin</div>
              </div>
            </div>
          </div>
          <div className="affiliate-dashboard-main-bottom">
            <Routes>
              <Route
                path="/"
                element={
                  <AffiliateDashboardOverview
                    affiliateCoursesData={affiliateCoursesData}
                    affiliateUser={affiliateUser}
                  />
                }
              />
              <Route path="/wallet" element={<AffiliateWallet />} />
              <Route path="/affiliate-link" element={<AffiliateLinks />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AffiliateDashboard;
