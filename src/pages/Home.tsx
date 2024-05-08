// import BodyParts from '@/components/BodyParts';
import Exercises from '@/components/Exercises';
import HeroBanner from '@/components/HeroBanner';
import SearchExercises from '@/components/SearchExercises';
import { useState } from 'react';

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState<string>('all');
  const [exercises, setExercises] = useState<string[]>([]);

  console.log(bodyPart)

  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />

    </div>
  );
};

export default HomePage;
