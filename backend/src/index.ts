import cors = require('cors');
import dotenv = require('dotenv');
import express = require('express');
import type { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Маршрут для перевірки
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Ендпоінт для авторизації
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { provider, email } = req.body;
  
  console.log(`Спроба входу через ${provider}: ${email || 'Social login'}`);

  // Тимчасова імітація логіки
  res.json({ 
    success: true, 
    token: "fake-jwt-token",
    user: { id: 1, name: "Bogdan" }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
