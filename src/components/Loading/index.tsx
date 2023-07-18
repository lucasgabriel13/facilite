import React from 'react';

import { LoadingContainer } from './styles';

interface LoadingProps {
  size?: number;
  color?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size = 40, color = '#015F43' }) => {
  return <LoadingContainer size={size} color={color} />;
};

Loading.defaultProps = {
  size: 40,
  color: '#015F43',
};
