import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { APP_ROUTES } from '@/shared/routes';

const Logo: FC = () => {
  return (
    <Link href={APP_ROUTES.home()} className="my-auto">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="w-[70px] h-[57px] my-auto cursor-pointer"
      ></Image>
    </Link>
  );
};

export default Logo;
