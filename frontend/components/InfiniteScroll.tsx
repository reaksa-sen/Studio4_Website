import InfiniteScroll, { Props } from 'react-infinite-scroll-component';
import { Spinner } from './Loading/Spinner';

type XProps = Pick<Props, 'children' | 'dataLength' | 'next' | 'hasMore'>;

export const XInfiniteScroll: React.FC<XProps> = props => (
  <InfiniteScroll
    style={{ overflow: 'hidden' }}
    dataLength={props.dataLength}
    next={props.next}
    hasMore={props.hasMore}
    loader={<Spinner />}
  >
    {props.children}
  </InfiniteScroll>
);
