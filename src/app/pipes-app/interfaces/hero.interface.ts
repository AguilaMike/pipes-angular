export enum Color {
  red='red',
  black='black',
  blue='blue',
  green='green',
  yellow='yellow',
  orange='orange',
  purple='purple',
  pink='pink',
  brown='brown',
  white='white',
  gray='gray'
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
