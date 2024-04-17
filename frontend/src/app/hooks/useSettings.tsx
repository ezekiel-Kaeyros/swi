import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const useSettings = () => {
  const channelClusters = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.channelCluster
  );

  const activities = useSelector(
    (state: RootState) => state?.ActivityReducer.activities
  );

  const dispatch = useDispatch<AppDispatch>();

  return { dispatch, channelClusters, activities };
};
