import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Parties }   from '../collections/parties';
import { Mongo }     from 'meteor/mongo';
import { PartiesForm } from './imports/parties-form/parties-form';
import { Party, PartyComponent } from './imports/party/party';


@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [PartiesForm, PartyComponent]
})
class Socially {
  parties: Mongo.Cursor<Object>;

  constructor () {
    this.parties = Parties.find();
  }

  removeParty(party) {
    if (confirm("remove party?")){
      Parties.remove(party._id);
    }
  }
}

bootstrap(Socially);
