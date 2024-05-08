// import { Button } from './ui/button';

const HeroBanner = () => {
  
  return (
    
    <section className="bg-gray-900 text-primary-foreground pt-40 pb-6 md:pt-20 md:pb-8">
      <div className="container px-4 md:px-6 grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Get Fit with Fit Flex
          </h1>
          <p className="text-gray-300 md:text-lg">
            Discover a wide range of exercises tailored to your fitness goals.
            Stay motivated and track your progress with our user-friendly app.
          </p>
          {/* <Button className='text-primary' variant="outline">Get Started</Button> */}
        </div>
        <div>
          <img
            alt="Fitness App"
            className="w-full h-full object-cover"
            height="700"
            src="/src/assets/LoopImage.svg"
            style={{
              aspectRatio: '800/700',
              objectFit: 'contain',
            }}
            width="800"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
