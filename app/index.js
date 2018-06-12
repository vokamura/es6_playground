import {addParagraph} from './helpers';
import SuperPerson from './person';

const vikki = new SuperPerson('Vikki', 'flying');

addParagraph(vikki.talk('Yo yo yo'));

addParagraph(vikki.saySuperpower('invisible'));