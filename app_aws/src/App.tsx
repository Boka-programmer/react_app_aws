import React from 'react';
import AuthButton from './components/AuthButton';
import { authStyles } from './styles/AuthStyle';
import { type AuthProvider } from './types/auth';

const App: React.FC = () => {
  const handleAuth = (provider: AuthProvider): void => {
    console.log(`Вибрано метод: ${provider}`);
    // Тут буде виклик API або редирект
  };

  return (
    <div style={authStyles.container}>
      <div style={authStyles.card}>
        <h2>Авторизація</h2>
        <p>Оберіть зручний спосіб</p>
        
        <div style={authStyles.buttonGroup}>
          <AuthButton 
            provider="Email" 
            color="#4CAF50" 
            onClick={handleAuth} 
          />
          <AuthButton 
            provider="Google" 
            color="#db4437" 
            onClick={handleAuth} 
          />
          <AuthButton 
            provider="GitHub" 
            color="#333" 
            onClick={handleAuth} 
          />
        </div>

        <footer style={{ marginTop: '20px', fontSize: '12px' }}>
          Забули пароль? <a href="#">Відновити</a>
        </footer>
      </div>
    </div>
  );
};

export default App;
