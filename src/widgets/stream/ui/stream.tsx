import { FC } from 'react';

interface IStream {
  name: string;
}

const Stream: FC<IStream> = ({ name }) => {
  return <div>stream</div>;
};

export default Stream;
