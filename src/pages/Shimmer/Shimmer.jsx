import "./Shimmer.css";
import logo from "../../assets/logo.webp";
function Shimmer() {
  return (
    <div className="shimmer-container">
      <div className="shimmer-navbar">
        <div className="shimmer-navbar-left">
          <div className="shimmer-navbar-left-item">
            <img
              src={logo}
              alt="logo"
              style={{ width: "131px", height: "43px" }}
            />
          </div>
        </div>
        <div className="shimmer-navbar-right">
          <div className="shimmer-navbar-right-item shimmer-text"></div>
        </div>
      </div>
      <div className="shimmer-hero shimmer-section">
        <div className="shimmer-hero-left">
          <div className="shimmer-hero-left-item1 shimmer-text"></div>
          <div className="shimmer-hero-left-item2 shimmer-text"></div>
          <div className="shimmer-hero-left-item3 shimmer-text"></div>
          <div className="shimmer-hero-left-item4">
            <div className="shimmer-hero-left-item4-item1 shimmer-text"></div>
            <div className="shimmer-hero-left-item4-item2 shimmer-text"></div>
          </div>
        </div>
        <div className="shimmer-hero-right shimmer-text"></div>
      </div>
      <div className="shimmer-hero-bottom">
        <div className="shimmer-hero-bottom-item1 shimmer-text"></div>
        <div className="shimmer-hero-bottom-item2 shimmer-text"></div>
        <div className="shimmer-hero-bottom-item3 shimmer-text"></div>
        <div className="shimmer-hero-bottom-item4 shimmer-text"></div>
      </div>
      <div className="shimmer-courses shimmer-section">
        <div className="shimmer-courses-header">
          <div className="shimmer-courses-title shimmer-text"></div>
          <div className="shimmer-courses-subtitle shimmer-text"></div>
        </div>

        <div className="shimmer-courses-filters">
          <div className="shimmer-filter-pill shimmer-text"></div>
          <div className="shimmer-filter-pill shimmer-text"></div>
          <div className="shimmer-filter-pill shimmer-text"></div>
          <div className="shimmer-filter-pill shimmer-text"></div>
          <div className="shimmer-filter-pill shimmer-text"></div>
        </div>

        <div className="shimmer-courses-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="shimmer-course-card">
              <div className="shimmer-course-image shimmer-text"></div>
              <div className="shimmer-course-title shimmer-text"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="shimmer-combo-pack compact-section">
        <div className="shimmer-combo-header">
          <div className="shimmer-combo-title shimmer-text"></div>
        </div>

        <div className="shimmer-combo-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="shimmer-combo-card">
              <div className="shimmer-combo-icon shimmer-text"></div>
              <div className="shimmer-combo-card-title shimmer-text"></div>

              <div className="shimmer-combo-skills">
                {[1, 2, 3, 4, 5, 6].map((skill) => (
                  <div key={skill} className="shimmer-skill-item">
                    <div className="shimmer-skill-icon shimmer-text"></div>
                    <div className="shimmer-skill-text shimmer-text"></div>
                  </div>
                ))}
              </div>

              <div className="shimmer-combo-validity shimmer-text"></div>
              <div className="shimmer-combo-button shimmer-text"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="shimmer-course-pack compact-section">
        <div className="shimmer-course-pack-grid">
          <div className="shimmer-course-pack-card">
            <div className="shimmer-course-pack-header">
              <div className="shimmer-course-pack-title shimmer-text"></div>
              <div className="shimmer-course-pack-tag new shimmer-text"></div>
            </div>
            <div className="shimmer-course-pack-subtitle shimmer-text"></div>
            <div className="shimmer-course-pack-banner shimmer-text"></div>
            <div className="shimmer-course-pack-price">
              <div className="shimmer-course-pack-current shimmer-text"></div>
              <div className="shimmer-course-pack-original shimmer-text"></div>
              <div className="shimmer-course-pack-discount shimmer-text"></div>
            </div>
            <div className="shimmer-course-pack-button shimmer-text"></div>
          </div>

          <div className="shimmer-course-pack-card">
            <div className="shimmer-course-pack-header">
              <div className="shimmer-course-pack-title shimmer-text"></div>
              <div className="shimmer-course-pack-tag popular shimmer-text"></div>
            </div>
            <div className="shimmer-course-pack-subtitle shimmer-text"></div>
            <div className="shimmer-course-pack-banner shimmer-text"></div>
            <div className="shimmer-course-pack-price">
              <div className="shimmer-course-pack-current shimmer-text"></div>
              <div className="shimmer-course-pack-original shimmer-text"></div>
              <div className="shimmer-course-pack-discount shimmer-text"></div>
            </div>
            <div className="shimmer-course-pack-button shimmer-text"></div>
          </div>
        </div>
      </div>
      <div className="shimmer-guaranteed-internship">
        <div className="shimmer-guaranteed-title shimmer-text"></div>
        <div className="shimmer-guaranteed-grid">
          <div className="shimmer-guaranteed-item">
            <div className="shimmer-guaranteed-icon shimmer-text"></div>
            <div className="shimmer-guaranteed-text shimmer-text"></div>
          </div>
          <div className="shimmer-guaranteed-item">
            <div className="shimmer-guaranteed-icon shimmer-text"></div>
            <div className="shimmer-guaranteed-text shimmer-text"></div>
          </div>
          <div className="shimmer-guaranteed-item">
            <div className="shimmer-guaranteed-icon shimmer-text"></div>
            <div className="shimmer-guaranteed-text shimmer-text"></div>
          </div>
          <div className="shimmer-guaranteed-item">
            <div className="shimmer-guaranteed-icon shimmer-text"></div>
            <div className="shimmer-guaranteed-text shimmer-text"></div>
          </div>
          <div className="shimmer-guaranteed-item">
            <div className="shimmer-guaranteed-icon shimmer-text"></div>
            <div className="shimmer-guaranteed-text shimmer-text"></div>
          </div>
        </div>
      </div>
      <div className="shimmer-internship-tracks">
        <div className="shimmer-tracks-grid">
          <div className="shimmer-track-card">
            <div className="shimmer-track-tag shimmer-text"></div>
            <div className="shimmer-track-icons">
              <div className="shimmer-track-icon shimmer-text"></div>
              <div className="shimmer-track-icon shimmer-text"></div>
              <div className="shimmer-track-icon shimmer-text"></div>
            </div>
            <div className="shimmer-track-title shimmer-text"></div>
            <div className="shimmer-track-stats">
              <div className="shimmer-track-rating">
                <div className="shimmer-rating-icon shimmer-text"></div>
                <div className="shimmer-rating-text shimmer-text"></div>
              </div>
              <div className="shimmer-track-learners">
                <div className="shimmer-learners-icon shimmer-text"></div>
                <div className="shimmer-learners-text shimmer-text"></div>
              </div>
            </div>
            <div className="shimmer-track-button shimmer-text"></div>
          </div>

          <div className="shimmer-track-card">
            <div className="shimmer-track-tag shimmer-text"></div>
            <div className="shimmer-track-icons">
              <div className="shimmer-track-icon shimmer-text"></div>
              <div className="shimmer-track-icon shimmer-text"></div>
            </div>
            <div className="shimmer-track-title shimmer-text"></div>
            <div className="shimmer-track-stats">
              <div className="shimmer-track-rating">
                <div className="shimmer-rating-icon shimmer-text"></div>
                <div className="shimmer-rating-text shimmer-text"></div>
              </div>
              <div className="shimmer-track-learners">
                <div className="shimmer-learners-icon shimmer-text"></div>
                <div className="shimmer-learners-text shimmer-text"></div>
              </div>
            </div>
            <div className="shimmer-track-button shimmer-text"></div>
          </div>

          <div className="shimmer-track-card">
            <div className="shimmer-track-tag shimmer-text"></div>
            <div className="shimmer-track-icons">
              <div className="shimmer-track-icon shimmer-text"></div>
              <div className="shimmer-track-icon shimmer-text"></div>
              <div className="shimmer-track-icon shimmer-text"></div>
            </div>
            <div className="shimmer-track-title shimmer-text"></div>
            <div className="shimmer-track-stats">
              <div className="shimmer-track-rating">
                <div className="shimmer-rating-icon shimmer-text"></div>
                <div className="shimmer-rating-text shimmer-text"></div>
              </div>
              <div className="shimmer-track-learners">
                <div className="shimmer-learners-icon shimmer-text"></div>
                <div className="shimmer-learners-text shimmer-text"></div>
              </div>
            </div>
            <div className="shimmer-track-button shimmer-text"></div>
          </div>
        </div>
        <div className="shimmer-track-dots">
          <div className="shimmer-dot active shimmer-text"></div>
          <div className="shimmer-dot shimmer-text"></div>
          <div className="shimmer-dot shimmer-text"></div>
          <div className="shimmer-dot shimmer-text"></div>
        </div>
      </div>
      <div className="shimmer-learn-for-free">
        <div className="shimmer-learn-header">
          <div className="shimmer-learn-title shimmer-text"></div>
          <div className="shimmer-learn-subtitle shimmer-text"></div>
        </div>

        <div className="shimmer-learn-content">
          <div className="shimmer-learn-steps">
            <div className="shimmer-learn-step">
              <div className="shimmer-step-icon shimmer-text"></div>
              <div className="shimmer-step-content">
                <div className="shimmer-step-title shimmer-text"></div>
                <div className="shimmer-step-desc shimmer-text"></div>
              </div>
            </div>

            <div className="shimmer-learn-step">
              <div className="shimmer-step-icon shimmer-text"></div>
              <div className="shimmer-step-content">
                <div className="shimmer-step-title shimmer-text"></div>
                <div className="shimmer-step-desc shimmer-text"></div>
              </div>
            </div>

            <div className="shimmer-learn-step">
              <div className="shimmer-step-icon shimmer-text"></div>
              <div className="shimmer-step-content">
                <div className="shimmer-step-title shimmer-text"></div>
                <div className="shimmer-step-desc shimmer-text"></div>
              </div>
            </div>
          </div>

          <div className="shimmer-learn-duration">
            <div className="shimmer-duration-card">
              <div className="shimmer-duration-title shimmer-text"></div>
              <div className="shimmer-duration-points">
                <div className="shimmer-duration-point">
                  <div className="shimmer-point-number shimmer-text"></div>
                  <div className="shimmer-point-text shimmer-text"></div>
                </div>
                <div className="shimmer-duration-point">
                  <div className="shimmer-point-number shimmer-text"></div>
                  <div className="shimmer-point-text shimmer-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shimmer-whyrefund">
        <div className="shimmer-whyrefund-header">
          <div className="shimmer-whyrefund-title shimmer-text"></div>
          <div className="shimmer-whyrefund-subtitle shimmer-text"></div>
        </div>
        <div className="shimmer-whyrefund-video shimmer-text"></div>
      </div>
      <div className="shimmer-different">
        <div className="shimmer-different-header">
          <div className="shimmer-different-title shimmer-text"></div>
        </div>

        <div className="shimmer-different-table">
          <div className="shimmer-table-header">
            <div className="shimmer-table-col features">
              <div className="shimmer-text"></div>
            </div>
            <div className="shimmer-table-col">
              <div className="shimmer-table-logo shimmer-text"></div>
            </div>
            <div className="shimmer-table-col">
              <div className="shimmer-text"></div>
            </div>
            <div className="shimmer-table-col">
              <div className="shimmer-text"></div>
            </div>
          </div>

          <div className="shimmer-table-rows">
            {[
              "Affordability",
              "Learning Flexibility",
              "Instant Doubt Solving",
              "Personal Mentorship",
              "Dedicated Projects",
              "Guaranteed Paid Internship",
            ].map((feature, index) => (
              <div key={index} className="shimmer-table-row">
                <div className="shimmer-table-col features">
                  <div className="shimmer-text"></div>
                </div>
                <div className="shimmer-table-col">
                  <div className="shimmer-check shimmer-text"></div>
                </div>
                <div className="shimmer-table-col">
                  <div className="shimmer-check shimmer-text"></div>
                </div>
                <div className="shimmer-table-col">
                  <div className="shimmer-check shimmer-text"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="shimmer-video-review">
        <div className="shimmer-video-review-header">
          <div className="shimmer-video-review-title shimmer-text"></div>
          <div className="shimmer-video-review-subtitle shimmer-text"></div>
        </div>

        <div className="shimmer-video-review-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="shimmer-video-review-card">
              <div className="shimmer-video-thumbnail shimmer-text">
                <div className="shimmer-play-button shimmer-text"></div>
              </div>
              <div className="shimmer-reviewer-info">
                <div className="shimmer-reviewer-name shimmer-text"></div>
                <div className="shimmer-reviewer-title shimmer-text"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="shimmer-video-dots">
          <div className="shimmer-dot active shimmer-text"></div>
          <div className="shimmer-dot shimmer-text"></div>
          <div className="shimmer-dot shimmer-text"></div>
        </div>
      </div>
      <div className="shimmer-testimonials">
        <div className="shimmer-testimonials-header">
          <div className="shimmer-testimonials-title shimmer-text"></div>
        </div>

        <div className="shimmer-testimonials-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="shimmer-testimonial-card">
              <div className="shimmer-testimonial-header">
                <div className="shimmer-testimonial-user">
                  <div className="shimmer-user-avatar shimmer-text"></div>
                  <div className="shimmer-user-info">
                    <div className="shimmer-user-name shimmer-text"></div>
                    <div className="shimmer-user-meta shimmer-text"></div>
                  </div>
                </div>
                <div className="shimmer-testimonial-rating">
                  <div className="shimmer-rating shimmer-text"></div>
                  <div className="shimmer-rating-date shimmer-text"></div>
                </div>
              </div>
              <div className="shimmer-testimonial-content shimmer-text"></div>
              <div className="shimmer-testimonial-actions">
                <div className="shimmer-action-button shimmer-text"></div>
                <div className="shimmer-action-button shimmer-text"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shimmer-faq">
        <div className="shimmer-faq-header">
          <div className="shimmer-faq-subtitle shimmer-text"></div>
          <div className="shimmer-faq-title shimmer-text"></div>
        </div>

        <div className="shimmer-faq-sections">
          <div className="shimmer-faq-section">
            <div className="shimmer-faq-section-title shimmer-text"></div>
            <div className="shimmer-faq-list">
              {[1, 2, 3].map((item) => (
                <div key={item} className="shimmer-faq-item">
                  <div className="shimmer-faq-question">
                    <div className="shimmer-question-text shimmer-text"></div>
                    <div className="shimmer-question-icon shimmer-text"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="shimmer-faq-section">
            <div className="shimmer-faq-section-title shimmer-text"></div>
            <div className="shimmer-faq-list">
              {[1, 2, 3].map((item) => (
                <div key={item} className="shimmer-faq-item">
                  <div className="shimmer-faq-question">
                    <div className="shimmer-question-text shimmer-text"></div>
                    <div className="shimmer-question-icon shimmer-text"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="shimmer-footer">
        <div className="shimmer-footer-content">
          <div className="shimmer-footer-left">
            <div className="shimmer-footer-logo">
              <img
                src={logo}
                alt="logo"
                style={{ width: "131px", height: "43px" }}
              />
            </div>
            <div className="shimmer-footer-links">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="shimmer-footer-link shimmer-text"
                ></div>
              ))}
            </div>
            <div className="shimmer-footer-social">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="shimmer-social-icon shimmer-text"
                ></div>
              ))}
            </div>
          </div>

          <div className="shimmer-footer-sections">
            <div className="shimmer-footer-section">
              <div className="shimmer-section-title shimmer-text"></div>
              <div className="shimmer-section-links">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="shimmer-section-link shimmer-text"
                  ></div>
                ))}
              </div>
            </div>

            <div className="shimmer-footer-section">
              <div className="shimmer-section-title shimmer-text"></div>
              <div className="shimmer-section-links">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="shimmer-section-link shimmer-text"
                  ></div>
                ))}
              </div>
            </div>

            <div className="shimmer-footer-section">
              <div className="shimmer-section-title shimmer-text"></div>
              <div className="shimmer-section-links">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="shimmer-section-link shimmer-text"
                  ></div>
                ))}
              </div>
            </div>

            <div className="shimmer-footer-section">
              <div className="shimmer-section-title shimmer-text"></div>
              <div className="shimmer-section-links">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="shimmer-section-link shimmer-text"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
