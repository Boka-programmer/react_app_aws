export type AuthProvider = 'Email' | 'Google' | 'GitHub';

export interface AuthButtonProps {
  provider: AuthProvider;
  onClick: (provider: AuthProvider) => void;
  color: string;
}
