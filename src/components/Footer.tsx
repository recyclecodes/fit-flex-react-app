import { DumbbellIcon } from './ui/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="flex items-center gap-2">
          <DumbbellIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Fit Flex</span>
        </div>
        <p className="text-sm mt-4 sm:mt-0">
          © 2024 Fit Flex. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
