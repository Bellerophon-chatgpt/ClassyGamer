export const AXES = [
  { n: '01', title: 'Respecteert het je tijd?', desc: 'Zit er padding, grind of filler in, of is elk uur besteed aan iets dat ertoe doet? Dit weegt het zwaarst.' },
  { n: '02', title: 'Blijft het bij je?', desc: 'Denk ik er een week later nog aan? De beste games laten een moment, personage of idee achter dat resoneert.' },
  { n: '03', title: 'Doet het iets eigens?', desc: 'Neemt het een risico, of levert het competent meer van hetzelfde? Een eigen stem tilt een game boven de massa uit.' },
  { n: '04', title: 'Werkt het zoals beloofd?', desc: 'Bugs, crashes, prestaties. Een technische ramp straf ik af; een paar schoonheidsfoutjes wegen licht.' },
  { n: '05', title: 'Is de prijs eerlijk?', desc: 'Wat krijg je voor je geld op moment van release? Een korte game kan alsnog top zijn als de prijs klopt.' },
];

export interface VerdictTile {
  label: string;
  title: string;
  desc: string;
  bg: string;
  border: string;
  fg: string;
  labelfg: string;
  subfg: string;
}

export const METHOD_VERDICTS: VerdictTile[] = [
  { label: 'Verdict 01', title: 'Worth your time', desc: 'Gewoon spelen. Dit is elke minuut waard en verdient je aandacht.', bg: '#6C5CE7', border: '#6C5CE7', fg: '#fff', labelfg: 'rgba(255,255,255,0.7)', subfg: 'rgba(255,255,255,0.9)' },
  { label: 'Verdict 02', title: 'Hidden gem', desc: 'Onterecht over het hoofd gezien. Weinig mensen speelden dit — maar het is elk uur waard. Precies waar Discover voor bestaat.', bg: 'rgba(108,92,231,0.14)', border: 'rgba(108,92,231,0.55)', fg: '#F7F5ED', labelfg: '#b3a9f0', subfg: '#C4CBD6' },
  { label: 'Verdict 03', title: 'Worth it on sale', desc: 'Goed, maar niet urgent. Zet het op je lijst en pak het als de prijs zakt.', bg: '#0b2038', border: 'rgba(247,245,237,0.14)', fg: '#F7F5ED', labelfg: '#b3a9f0', subfg: '#C4CBD6' },
  { label: 'Verdict 04', title: 'For fans only', desc: 'Alleen de moeite waard als je al van het genre of de serie houdt.', bg: '#0b2038', border: 'rgba(247,245,237,0.14)', fg: '#F7F5ED', labelfg: '#b3a9f0', subfg: '#C4CBD6' },
  { label: 'Verdict 05', title: 'Skip it', desc: 'Je tijd is te kostbaar. Hoe groot de hype ook is — dit krijgt je uren niet terug.', bg: '#0b2038', border: 'rgba(247,245,237,0.14)', fg: '#F7F5ED', labelfg: '#8fa0bb', subfg: '#8fa0bb' },
];

export const PROMISES = [
  'Ik speel elke game uit voordat ik een verdict geef — geen oordeel na twee uur.',
  'Ik koop mijn games zelf. Geen reviewcodes met voorwaarden, nooit gesponsord.',
  'Ik schrijf spoilervrij, tenzij duidelijk gemarkeerd.',
  'Verandert mijn mening na een grote update, dan werk ik de review bij.',
];

export const NOTS = [
  'Geen cijfer uit tien — een 7,8 helpt je nergens mee.',
  'Geen aparte scores voor graphics, sound en gameplay.',
  'Geen hype-taal of superlatievenregen.',
  'Geen day-one-oordeel op basis van de eerste paar uur.',
];
