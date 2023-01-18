import { Markets, Trending } from "@components";

function HomePage() {
  return (
    <div className="wrapper-container">
      <Trending />
      <Markets />
    </div>
  );
}

export default HomePage;
