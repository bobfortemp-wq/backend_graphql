import * as authService from './auth.service.js';

export const sayHello = async (req, res) => {
  try {
    res.json({ message: 'Hello, World!' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export const signup = async (req, res) => {
  try {
    const result = await authService.signup(req.body);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};