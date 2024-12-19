import Image from 'next/image';
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={100}
      height={100}
      className="w-[70px] h-[57px] my-auto cursor-pointer"
    ></Image>
  );
};

export default Logo;
