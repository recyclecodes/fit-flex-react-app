import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Detail from '@/components/Detail';
import SuggestedVideos from '@/components/SuggestedVideos';
import { exerciseOptions, fetchData, youtubeOptions } from '../lib/fetchData';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const suggestedVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}&type=v&sort=ra`,
        youtubeOptions
      );
      setSuggestedVideos(suggestedVideosData.contents);


    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <SuggestedVideos
        suggestedVideos={suggestedVideos}
        name={exerciseDetail.name}
      />
    </div>
  );
};

export default ExerciseDetails;
