const LIKES = [
  "space",
  "music",
  "skate",
  "soundtracks",
  "code",
  "travel",
  "beer",
  "metal",
  "avatar",
  "wine",
  "history",
  "hip hop",
  "games",
  "hans zimmer",
  "food",
  "adventure",
  "interstellar",
  "friends",
  "books",
  "2000s",
];

const StyledLikes = "flex flex-wrap justify-center items-center gap-1.5";
const StyledLike = "data-[big=true]:font-bold data-[big=true]:text-4xl";

const Likes = () => (
  <div className={StyledLikes}>
    {LIKES.map((like) => {
      const big = Math.round(Math.random()) === 0;

      return (
        <span key={like} className={StyledLike} data-big={big}>
          {like.toUpperCase()}
        </span>
      );
    })}
  </div>
);

export default Likes;
