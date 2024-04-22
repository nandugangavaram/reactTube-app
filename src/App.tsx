import PageHeader from "./layout/PageHeader";
import VideoGridItem from "./components/VideoGridItem";
import { videos } from "./data/home";

const App = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        {/* <div>Sidebar</div> */}
        <div className="gap-4 flex flex-wrap justify-center lg:justify-normal p-4">
          {videos.map((video) => (
            <VideoGridItem key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
