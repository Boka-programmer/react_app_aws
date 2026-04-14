import type { CSSProperties } from 'react';

export const authStyles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f7f6',
    fontFamily: 'sans-serif',
  },
  card: {
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    width: '320px',
    textAlign: 'center',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '24px',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'opacity 0.2s',
  }
};
