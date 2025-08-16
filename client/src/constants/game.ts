export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5001';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export const COLOR_MAP = {
  red: '#EF4444',
  green: '#10B981', 
  blue: '#3B82F6',
  yellow: '#F59E0B'
} as const;

export const SHAPE_NAMES = {
  triangle: 'Triangle',
  square: 'Square',
  diamond: 'Diamond',
  circle: 'Circle'
} as const;
