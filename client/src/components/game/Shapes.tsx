interface ShapeProps {
  color: string;
}

export const Triangle = ({ color }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon points="50,20 80,70 20,70" fill={color} stroke="#000" strokeWidth="2" />
  </svg>
);

export const Square = ({ color }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="20" y="20" width="60" height="60" fill={color} stroke="#000" strokeWidth="2" />
  </svg>
);

export const Diamond = ({ color }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon points="50,10 90,50 50,90 10,50" fill={color} stroke="#000" strokeWidth="2" />
  </svg>
);

export const Circle = ({ color }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="30" fill={color} stroke="#000" strokeWidth="2" />
  </svg>
);

export const SHAPE_COMPONENTS = {
  triangle: Triangle,
  square: Square,
  diamond: Diamond,
  circle: Circle
} as const;
