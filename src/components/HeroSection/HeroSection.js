import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/mainImg.jpg";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-img-content">
        <img src={heroImage} alt="Hero Section" className="hero-image" />
        <div className="hero-text">
          <h1>Vestibulum mauris</h1>
          <p>最新技術と自然との調和を目指す</p>
        </div>
      </div>

      <div className="hero-details-text">
        <h4>VISION</h4>
        <p>
          ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいうには及ばないはずである。上に行ったような事柄については、曖昧な態度をとり、または真実でない知識を強いて注入していたことも、明らかな事実である。
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
