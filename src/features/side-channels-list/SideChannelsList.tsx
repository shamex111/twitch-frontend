import { FC, Fragment, useState } from 'react';

import styles from './SideChannelsList.module.scss';
import SideChannelsListItem, {
  ISideChannelsListItem
} from './SideChannelsListItem';

interface ISideChannelList {
  data: ISideChannelsListItem[];
  defaultCount?: number;
}

const SideChannelsList: FC<ISideChannelList> = ({ data, defaultCount = 4 }) => {
  const [countElements, setCountElements] = useState(defaultCount);

  const handleIncrease = () => {
    setCountElements(countElements + 3);
  };
  const handleClear = () => {
    setCountElements(defaultCount);
  };

  return (
    <div className={styles.channelListWrapper}>
      {data.slice(0, countElements).map(i => (
        <Fragment key={i.name + i.avatar}>
          <SideChannelsListItem
            name={i.name}
            avatar={i.avatar}
            category={i.category}
            isOnline={i.isOnline}
            online={i?.online}
          />
        </Fragment>
      ))}
      <div className={styles.actionButtons}>
        {countElements !== defaultCount && (
          <div onClick={handleClear} className={styles.clear}>
            Скрыть
          </div>
        )}
        <div onClick={handleIncrease} className={styles.more}>
          Показать еще...
        </div>
      </div>
    </div>
  );
};

export default SideChannelsList;
