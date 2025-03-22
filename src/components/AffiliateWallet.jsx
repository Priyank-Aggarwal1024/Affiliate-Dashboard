import { useState } from "react";
import "../styles/AffiliateWallet.css";
function AffiliateWallet() {
  const paymentHistory = [
    {
      tid: "#001",
      date: "14, Jan, 2025",
      earning: "₹3500",
      status: "Complete",
    },
    {
      tid: "#002",
      date: "14, Feb, 2025",
      earning: "₹3500",
      status: "Complete",
    },
    {
      tid: "#003",
      date: "14, March, 2025",
      earning: "₹3500",
      status: "Complete",
    },
    {
      tid: "#004",
      date: "14, April, 2025",
      earning: "₹3500",
      status: "Pending",
    },
  ];
  const [walletData, setWalletData] = useState({
    name: "",
    bank_name: "",
    account_number: "",
    ph_no: "",
    upi_id: "",
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setWalletData({ ...walletData, [name]: value });
  };
  return (
    <>
      <div className="affiliate-wallet">
        <div className="affiliate-wallet-section">
          <div className="affiliate-wallet-section-top-history">
            Payment history
          </div>
          <div className="affiliate-wallet-section-history-outer">
            <div className="affiliate-wallet-section-history">
              <div className="affiliate-wsh-row">
                <div className="affiliate-wsh-col-title">Transaction ID</div>
                <div className="affiliate-wsh-col-title">Payment date</div>
                <div className="affiliate-wsh-col-title">Total earning</div>
                <div className="affiliate-wsh-col-title">Payment status</div>
              </div>
              {paymentHistory.map((trans, idx) => (
                <div className="affiliate-wsh-row" key={idx}>
                  <div className="affiliate-wsh-col-data">{trans.tid}</div>
                  <div className="affiliate-wsh-col-data">{trans.date}</div>
                  <div className="affiliate-wsh-col-data">{trans.earning}</div>
                  <div
                    className={`affiliate-wsh-col-data ${
                      trans.status == "Complete"
                        ? "status-complete"
                        : "status-pending"
                    }`}
                  >
                    {trans.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="affiliate-wallet-section">
          <div className="affiliate-wallet-details-top">
            <div className="affiliate-wallet-details-top-head">
              Payment details
            </div>
            <div className="affiliate-wallet-details-top-edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M15.3839 1.27881L13.3987 3.26396L18.7308 8.59599L20.7159 6.61084C21.7413 5.58545 21.7413 3.92432 20.7159 2.89893L19.0999 1.27881C18.0745 0.253418 16.4134 0.253418 15.388 1.27881H15.3839ZM12.4718 4.19092L2.91104 13.7558C2.48448 14.1823 2.17276 14.7114 2.0005 15.2897L0.548544 20.2239C0.446005 20.5726 0.540341 20.9458 0.794638 21.2001C1.04893 21.4544 1.42218 21.5487 1.76671 21.4503L6.70089 19.9983C7.27921 19.8261 7.80831 19.5144 8.23487 19.0878L17.8038 9.52295L12.4718 4.19092Z"
                  fill="#902190"
                />
              </svg>
              <p>Edit</p>
            </div>
          </div>
          <form className="affiliate-wallet-details-bottom">
            <div className="affiliate-wallet-details-bottom-row">
              <label
                htmlFor="name"
                className="affiliate-wallet-details-bottom-label"
              >
                Account holder name
              </label>
              <input
                name="name"
                id="name"
                value={walletData.name}
                className="affiliate-wallet-details-bottom-input"
                onChange={handleChange}
                placeholder="Enter Account holder name"
              />
            </div>
            <div className="affiliate-wallet-details-bottom-row">
              <label
                htmlFor="bank_name"
                className="affiliate-wallet-details-bottom-label"
              >
                Bank name
              </label>
              <input
                name="bank_name"
                id="bank_name"
                value={walletData.bank_name}
                className="affiliate-wallet-details-bottom-input"
                onChange={handleChange}
                placeholder="Enter Bank name"
              />
            </div>
            <div className="affiliate-wallet-details-bottom-row">
              <label
                htmlFor="account_number"
                className="affiliate-wallet-details-bottom-label"
              >
                Account number
              </label>
              <input
                name="account_number"
                id="account_number"
                value={walletData.account_number}
                className="affiliate-wallet-details-bottom-input"
                onChange={handleChange}
                placeholder="Enter Account number"
              />
            </div>
            <div className="affiliate-wallet-details-bottom-row">
              <label
                htmlFor="ph_no"
                className="affiliate-wallet-details-bottom-label"
              >
                Phone number
              </label>
              <input
                name="ph_no"
                id="ph_no"
                value={walletData.ph_no}
                className="affiliate-wallet-details-bottom-input"
                onChange={handleChange}
                placeholder="Enter Phone number"
              />
            </div>
            <div className="affiliate-wallet-details-bottom-row">
              <label
                htmlFor="upi_id"
                className="affiliate-wallet-details-bottom-label"
              >
                UPI id
              </label>
              <input
                name="upi_id"
                id="upi_id"
                value={walletData.upi_id}
                className="affiliate-wallet-details-bottom-input"
                onChange={handleChange}
                placeholder="Enter UPI id"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AffiliateWallet;
