import React from "react";
import "./Category.css";
import circleImg01 from "../../assets/circleImg01.png";
import circleImg02 from "../../assets/circleImg02.png";
import circleImg03 from "../../assets/circleImg03.png";
const Category = () => {
  return (
    <section className="category">
      <div className="all-category">
        <div className="single-category">
          <h4>SERVICE</h4>
          <img
            src={circleImg01}
            alt="category Section"
            className="category-image"
          />
          <p>
            科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう
          </p>
        </div>
        <div className="single-category">
          <h4>MESSAGE</h4>
          <img
            src={circleImg02}
            alt="category Section"
            className="category-image"
          />
          <p>
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば。
          </p>
        </div>
        <div className="single-category">
          <h4>STORY</h4>
          <img
            src={circleImg03}
            alt="category Section"
            className="category-image"
          />
          <p>
            科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Category;
