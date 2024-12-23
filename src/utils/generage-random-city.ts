import { CITIES } from '../constants/cities';

export const generateRandomCity = () => CITIES[Math.floor(Math.random() * CITIES.length)];
