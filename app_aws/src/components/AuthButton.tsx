import React from 'react';
import type { AuthButtonProps } from '../types/auth';
import { authStyles } from '../styles/AuthStyle';

const AuthButton: React.FC<AuthButtonProps> = ({ provider, onClick, color }) => {
  return (
    <button
      style={{ ...authStyles.button, backgroundColor: color }}
      onClick={() => onClick(provider)}
    >
      Увійти через {provider}
    </button>
  );
};

export default AuthButton;
