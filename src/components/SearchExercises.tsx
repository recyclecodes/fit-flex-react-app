import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { exerciseOptions, fetchData } from '@/lib/fetchData';
import HorizontalSlider from './HorizontalSlider';

interface BodyPart {
  id: string;
  name: string;
  description: string;
}

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState<BodyPart[]>([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const bodyPartsData: string[] = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          exerciseOptions
        );

        const bodyPartDescriptionsData: Record<string, string> = {
          back: 'Strengthen and tone your back with our targeted exercises.',
          cardio:
            'Get your heart pumping with our high-intensity cardio workouts.',
          chest:
            'Build strength and definition in your chest with our exercises.',
          'lower arms':
            'Tone and strengthen your lower arms with our targeted workouts.',
          'lower legs':
            'Build muscle and improve leg strength with our lower leg exercises.',
          neck: 'Improve neck strength and flexibility with our targeted exercises.',
          shoulders:
            'Strengthen and tone your shoulders with our shoulder-focused workouts.',
          'upper arms':
            'Build muscle and definition in your upper arms with our exercises.',
          'upper legs':
            'Strengthen and tone your upper legs with our targeted workouts.',
          waist:
            'Improve core strength and definition with our waist-focused exercises.',
        };

        const formattedBodyParts: BodyPart[] = bodyPartsData.map(
          (name, index) => ({
            id: index.toString(),
            name,
            description: bodyPartDescriptionsData[name] || '',
          })
        );

        setBodyParts(formattedBodyParts);
      } catch (error) {
        console.error('Failed to fetch body parts:', error);
      }
    };

    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/name/${search}?limit=50`,
          exerciseOptions
        );

        console.log(exercisesData);
        setExercises(exercisesData);
      } catch (error) {
        console.error('Failed to fetch exercises:', error);
      }
    }
  };

  return (
    <>
      <div className="pt-12 md:pt-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Discover Your Next Workout
            </h2>
            <p className="text-gray-500 md:text-lg  ">
              Explore our extensive exercise database and find the perfect
              workouts to suit your fitness goals.
            </p>
          </div>
          <div className=" w-full lg:w-[50vw] md:w-[70vw] flex mx-auto py-12 space-x-1 h-16">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search exercises"
              className="rounded-l-md rounded-r-none"
            />
            <Button
              onClick={handleSearch}
              type="submit"
              className="rounded-l-none rounded-r-md"
            >
              Search
            </Button>
          </div>
        </div>
        <div className='mx-auto w-[90vw]'>
          <div className="flex justify-center items-center">
            <HorizontalSlider
              data={bodyParts}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchExercises;
