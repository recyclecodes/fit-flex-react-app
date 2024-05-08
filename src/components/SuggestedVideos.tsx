import { PacmanLoader } from 'react-spinners';

const SuggestedVideos = ({ suggestedVideos, name }) => {
  if (!suggestedVideos.length) return <PacmanLoader />;
  console.log(suggestedVideos);
  return (
    <div className="mt-20 lg:mt-20 px-20 pb-12">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
        Watch{' '}
        <span className="underline-offset-8 underline capitalize">{name}</span>{' '}
        exercise videos.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestedVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video flex flex-col items-start bg-white rounded-lg shadow-lg overflow-hidden"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-lg w-full h-48 object-cover"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div className="p-4">
              <h3 className="text-base lg:text-lg font-semibold text-black mb-2 lg:mb-4">
                {item.video.title}
              </h3>
              <p className="text-sm lg:text-base text-black">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SuggestedVideos;
