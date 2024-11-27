import Category from "../components/Category/Category";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Location from "../components/Location/Location";
import Message from "../components/Message/Message";
import Success_story from "../components/Success_story/Success_story";

const Home = () => (
  <>
    <div className="App max-w-[1400px] w-full m-auto">
      <Header />
      <HeroSection />
      <Message />
      <Category/>
      <Success_story/>
      <Location/>
      <Footer/>
    </div>
  </>
);

export default Home;
