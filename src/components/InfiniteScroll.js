import React, { useRef, useCallback } from 'react';

const InfiniteScroll = ({ children, fetchMoreData, hasMore }) => {
  const observer = useRef();
  const lastJobRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        fetchMoreData();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <div>
      {children}
      <div ref={lastJobRef}></div>
    </div>
  );
}

export default InfiniteScroll;
