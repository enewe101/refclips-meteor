import { Parties } from '../collections/parties.ts';

export function loadParties() {
  if (Parties.find().count() === 0) {

    var parties = [
      {
        'title': 'Dubstep-Free Zone',
        'authors': 'Can we please just for an evening not listen to dubstep.',
        'url': 'Palo Alto'
      },
      {
        'title': 'All dubstep all the time',
        'authors': 'Get it on!',
        'url': 'Palo Alto'
      },
      {
        'title': 'Savage lounging',
        'authors': 'Leisure suit required. And only fiercest manners.',
        'url': 'San Francisco'
      }
    ];

    for (var i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
    }
  }
}
