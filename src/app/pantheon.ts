import { Champion } from './champion';

export interface Pantheon {
  id: number;
  name: string;
  banner: string;
  champions: Champion[];
}
