import InfiniteScroll, { Props } from 'react-infinite-scroll-component';

type XProps = Pick<Props, 'children' | 'dataLength' | 'next' | 'hasMore'>;

export const XInfiniteScroll: React.FC<XProps> = (props) => (
  <InfiniteScroll
    style={{ overflow: 'hidden' }}
    dataLength={props.dataLength}
    next={props.next}
    hasMore={props.hasMore}
    loader={<h4>Loading...</h4>}
  >
    {props.children}
  </InfiniteScroll>
);
