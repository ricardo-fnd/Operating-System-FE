import { useLabels } from "src/services";

const LIKES = [
  "apps.about.keywords.space",
  "apps.about.keywords.music",
  "apps.about.keywords.skate",
  "apps.about.keywords.soundtracks",
  "apps.about.keywords.code",
  "apps.about.keywords.travel",
  "apps.about.keywords.beer",
  "apps.about.keywords.metal",
  "apps.about.keywords.avatar",
  "apps.about.keywords.wine",
  "apps.about.keywords.history",
  "apps.about.keywords.hip-hop",
  "apps.about.keywords.games",
  "apps.about.keywords.hans",
  "apps.about.keywords.food",
  "apps.about.keywords.adventure",
  "apps.about.keywords.interstellar",
  "apps.about.keywords.friends",
  "apps.about.keywords.books",
  "apps.about.keywords.2000",
];

const StyledLikes = "flex flex-wrap justify-center items-center gap-1.5";
const StyledLike = "data-[big=true]:font-bold data-[big=true]:text-4xl";

const Likes = () => {
  const getLabel = useLabels();

  return (
    <div className={StyledLikes}>
      {LIKES.map((like) => {
        const big = Math.round(Math.random()) === 0;

        return (
          <span key={like} className={StyledLike} data-big={big}>
            {getLabel(like).toUpperCase()}
          </span>
        );
      })}
    </div>
  );
};

export default Likes;
