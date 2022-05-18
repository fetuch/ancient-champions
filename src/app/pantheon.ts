import { Champion } from './champion';

export interface Pantheon {
  name: string;
  banner: string;
  champions?: Champion[];
}
