import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Parties } from '../../../collections/parties.ts';

@Component({
  selector: 'parties-form',
  templateUrl: '/client/imports/parties-form/parties-form.html'
})
export class PartiesForm {
  partiesForm: ControlGroup;

  constructor() {
    let fb = new FormBuilder();

    this.partiesForm = fb.group({
      title: ['', Validators.required],
      authors: [''],
      url: ['']
    })
  }

  addParty(party) {
    if (this.partiesForm.valid) {
      Parties.insert({
        title: party.title,
        authors: party.authors,
        url: party.url
      });

      (<Control>this.partiesForm.controls['title']).updateValue('');
      (<Control>this.partiesForm.controls['authors']).updateValue('');
      (<Control>this.partiesForm.controls['url']).updateValue('');
    }

  }
}
