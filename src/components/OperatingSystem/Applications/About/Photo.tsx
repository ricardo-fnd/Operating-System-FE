import Image from "next/image";
import me from "public/about/me.jpeg";

const StyledCover =
  "relative w-64 h-64 mx-auto rounded-full border-2 border-gray-400 overflow-hidden";

const Photo = () => (
  <div className={StyledCover}>
    <Image alt="me" src={me} fill />
  </div>
);

export default Photo;
