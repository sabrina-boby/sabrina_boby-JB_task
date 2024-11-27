import React from "react";
import "./Message.css";
import sec02_01 from "../../assets/sec02_01.jpg";
import sec02_02 from "../../assets/sec02_02.jpg";
const Message = () => {
  return (
    <section className="message">
      <div className="part">
        <img src={sec02_01} alt="message Section" className="message-image" />
        <div className="text">
          <h4>MESSAGE</h4>
          <p>
          ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </div>
      </div>

      <div className="part part2">
        <div className="text">
          <h4>MESSAGE</h4>
          <p>
          ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </div>
        <img src={sec02_02} alt="message Section" className="message-image" />
      </div>
    </section>
  );
};

export default Message;
