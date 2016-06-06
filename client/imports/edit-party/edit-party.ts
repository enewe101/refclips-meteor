import 'reflect-metadata';
import { Component, Input, EventEmitter } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Parties } from '../../../collections/parties.ts';
import { Party } from '../party/party.ts';

@Component({
  selector: 'edit-party',
  templateUrl: '/client/imports/edit-party/edit-party.html',
  outputs: ['editSaved', 'editCancelled']
})
export class EditParty {
  @Input('boundParty') boundParty: Party;
  editSaved = new EventEmitter<string>();
  editCancelled = new EventEmitter<string>();
  editForm: ControlGroup;

  ngOnInit() {
    let fb = new FormBuilder();

    this.editForm = fb.group({
      title: [this.boundParty.title, Validators.required],
      authors: [this.boundParty.authors],
      url: [this.boundParty.url]
    })
  }

  save(party) {
    if(this.updateParty(party)) {
      this.editSaved.emit('saved');
    }
  }

  updateParty(party) {
    if (this.editForm.valid) {
      console.log('updating');
      Parties.update(
        {_id:this.boundParty._id},
        {title: party.title, authors: party.authors, url: party.url}
      )
      return true;
    }
    console.log('not updating');
    return false;
  }

  cancel() {
    console.log('cancelling');
    (<Control>this.editForm.controls['title'])
      .updateValue(this.boundParty.title);
    (<Control>this.editForm.controls['authors'])
      .updateValue(this.boundParty.authors);
    (<Control>this.editForm.controls['url'])
      .updateValue(this.boundParty.url);
    this.editCancelled.emit('cancelled');
  }
}
