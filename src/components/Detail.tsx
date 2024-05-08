import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const iconDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="container w-full flex lg:gap-48 flex-col lg:flex-row items-center pt-20 px-20">
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="md:w-[600px] md:h-[600px]"
      />
      <div className="flex flex-col xs:gap-20">
        <h1 className="text-2xl lg:text-4xl font-semibold capitalize mb-4">
          {name}
        </h1>
        <p className="text-lg lg:text-2xl text-gray-600 mb-4">
          Strengthen your body, empower your mind!{' '}
          <span className="capitalize">{name}</span> is the ultimate exercise to
          sculpt your {target}, ignite your spirit, and unleash boundless
          energy.
        </p>
        {iconDetail?.map((item, index) => (
          <div key={index} className="flex items-center gap-14 mb-3">
            <button className="bg-gray-400 rounded-full w-14 h-14 flex items-center justify-center">
              <img
                src={item.icon}
                alt={bodyPart}
                className="w-7 h-7 text-primary"
              />
            </button>
            <p className="text-lg lg:text-2xl capitalize">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
