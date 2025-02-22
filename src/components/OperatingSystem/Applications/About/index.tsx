import Likes from "./Likes";
import Photo from "./Photo";
import WhoAmI from "./WhoAmI";
import History from "./History";
import LookingFor from "./LookingFor";
import Future from "./Future";

const StyledApp = "relative flex flex-col gap-10 py-6 px-4";
const StyledContent = "flex flex-col gap-6";

const About = () => (
  <div className={StyledApp}>
    <Likes />
    <Photo />
    <div className={StyledContent}>
      <WhoAmI />
      <History />
      <LookingFor />
      <Future />
    </div>
  </div>
);

export default About;
