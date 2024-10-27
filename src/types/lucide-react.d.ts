declare module 'lucide-react' {
  import { ComponentType } from 'react';

  interface IconProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    className?: string;
  }

  export const Menu: ComponentType<IconProps>;
  export const X: ComponentType<IconProps>;
  export const Plus: ComponentType<IconProps>;
  // Add other icons as needed
}
