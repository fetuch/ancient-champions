import { Champion } from './champion';

export const baseImgUrl = '/assets/champions';
export const baseHP = 10;
export const baseAttack = 5;
export const baseDefence = 2;

export const CHAMPIONS: Champion[] = [
  {
    id: 1,
    pantheon: 'Egyptian',
    name: 'Anubis',
    avatar: baseImgUrl + '/anubis.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 2,
    pantheon: 'Egyptian',
    name: 'Apophis',
    avatar: baseImgUrl + '/apophis.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 3,
    pantheon: 'Egyptian',
    name: 'Hathor',
    avatar: baseImgUrl + '/hathor.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 4,
    pantheon: 'Egyptian',
    name: 'Isis',
    avatar: baseImgUrl + '/isis.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 5,
    pantheon: 'Egyptian',
    name: 'Ra',
    avatar: baseImgUrl + '/ra.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 6,
    pantheon: 'Egyptian',
    name: 'Osiris',
    avatar: baseImgUrl + '/osiris.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },

  {
    id: 7,
    pantheon: 'Greek',
    name: 'Ares',
    avatar: baseImgUrl + '/ares.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 8,
    pantheon: 'Greek',
    name: 'Poseidon',
    avatar: baseImgUrl + '/poseidon.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 9,
    pantheon: 'Greek',
    name: 'Artemis',
    avatar: baseImgUrl + '/artemis.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 10,
    pantheon: 'Greek',
    name: 'Athena',
    avatar: baseImgUrl + '/athena.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 11,
    pantheon: 'Greek',
    name: 'Hephaestus',
    avatar: baseImgUrl + '/hephaestus.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 12,
    pantheon: 'Greek',
    name: 'Zeus',
    avatar: baseImgUrl + '/zeus.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },

  {
    id: 13,
    pantheon: 'Hindu',
    name: 'Ganesha',
    avatar: baseImgUrl + '/ganesha.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 14,
    pantheon: 'Hindu',
    name: 'Rama',
    avatar: baseImgUrl + '/rama.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 15,
    pantheon: 'Hindu',
    name: 'Shakti',
    avatar: baseImgUrl + '/shakti.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 16,
    pantheon: 'Hindu',
    name: 'Shiva',
    avatar: baseImgUrl + '/shiva.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 17,
    pantheon: 'Hindu',
    name: 'Vishnu',
    avatar: baseImgUrl + '/vishnu.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 18,
    pantheon: 'Hindu',
    name: 'Devi',
    avatar: baseImgUrl + '/devi.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },

  {
    id: 19,
    pantheon: 'Nordic',
    name: 'Freya',
    avatar: baseImgUrl + '/freya.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 20,
    pantheon: 'Nordic',
    name: 'Hel',
    avatar: baseImgUrl + '/hel.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 21,
    pantheon: 'Nordic',
    name: 'Loki',
    avatar: baseImgUrl + '/loki.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 22,
    pantheon: 'Nordic',
    name: 'Odin',
    avatar: baseImgUrl + '/odin.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 23,
    pantheon: 'Nordic',
    name: 'Thor',
    avatar: baseImgUrl + '/thor.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
  {
    id: 24,
    pantheon: 'Nordic',
    name: 'Baldur',
    avatar: baseImgUrl + '/baldur.jpg',
    attack: baseAttack + Math.floor(Math.random() * 3) + 1,
    defence: baseDefence + Math.floor(Math.random() * 3) + 1,
    hp: baseHP + Math.floor(Math.random() * 3) + 1,
  },
];
