import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ExerciseCard = ({ exercise }) => {
  return (
    <Card className='shadow-lg hover:scale-105'>
      <CardContent >
        <Link to={`/exercise/${exercise.id}`}>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          <Badge variant={'outline'} className='capitalize mr-2'>
            {exercise.bodyPart}
          </Badge>
          <Badge variant={'default'} className='capitalize ml-2'>
            {exercise.target}
          </Badge>
        </Link>
        <h3 className='capitalize font-semibold pt-2'>
            {exercise.name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
