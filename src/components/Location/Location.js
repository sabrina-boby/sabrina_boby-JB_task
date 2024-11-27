import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="location">
      <div className="location-details">
        <div className="single-info">
          <h3>社名</h3>
          <h4>Sample Company</h4>
        </div>
        <div className="single-info">
          <h3>代表取締役</h3>
          <h4>見本 太郎</h4>
        </div>
        <div className="single-info">
          <h3>住所</h3>
          <h4>見本県見本市仮区見本町1-3-5</h4>
        </div>
        <div className="single-info">
          <h3>電話番号</h3>
          <h4>01234-567-8901</h4>
        </div>
        <div className="single-info">
          <h3>設立</h3>
          <h4>20XX年5月5日</h4>
        </div>
        <div className="single-info">
          <h3>資本金</h3>
          <h4>1,000,000円</h4>
        </div>
        <div className="single-info">
          <h3>主な取引先</h3>
          <h4>
            <span>
              見本商事株式会社 <br />
              株式会社年中無休商事 <br />
              株式会社仮称 <br />
            </span>
          </h4>
        </div>
      </div>
      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.856891032267!2d139.7515334153209!3d35.70902548018996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c067bcf33%3A0x7a49a9b40f2bdf11!2z5pel5pys44CB5p2x5Lqs6YOoIOODpeODiOODqeODg-OCv-ODvOOCueODvOODl-OCt-OCqA!5e0!3m2!1sja!2sjp!4v1694535312938!5m2!1sja!2sjp"
          width="300"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
