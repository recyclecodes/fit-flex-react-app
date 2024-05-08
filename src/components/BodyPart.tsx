import { Button } from './ui/button';
import { DumbbellIcon } from './ui/icons';
import { Card, CardContent } from './ui/card';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Card
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <CardContent
        className={
          `justify-center items-center flex flex-col p-4 gap-4 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800 transition-colors ${bodyPart === item? 'border-2' : ''}`
        }
      >
        <DumbbellIcon className="h-12 w-12" />

        <h3 className="text-lg font-semibold text-center">
          {item.name
            .split(' ')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </h3>
        <p className="text-gray-500 text-center line-clamp-2">
          {item.description}
        </p>
        <Button variant={'link'}>View Exercise</Button>
      </CardContent>
    </Card>
  );
};

export default BodyPart;
