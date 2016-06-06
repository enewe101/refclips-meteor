import 'reflect-metadata';
import { Component, Input } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Parties } from '../../../collections/parties.ts';
import { EditParty } from '../edit-party/edit-party.ts';

export interface Party{
  title: string;
  authors: string;
  url: string;
  _id?: string;
}

@Component({
  selector: 'party',
  templateUrl: '/client/imports/party/party.html',
  styleUrls: ['/client/imports/party/party.css'],
  directives: [EditParty]
})
export class PartyComponent {
  @Input('party') party: Party;
  editing: boolean = false;

  deleteParty(){
    if(confirm(`really delete ${this.party.title}?`)) {
      Parties.remove({_id:this.party._id});
    };
  }

  startEditing() {
    console.log('Start editing');
    this.editing = true;
  }
  stopEditing() {
    console.log('Stopping editing');
    this.editing = false;
  }
}
