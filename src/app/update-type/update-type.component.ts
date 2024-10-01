import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Type } from '../model/type.model'; // Make sure this path is correct

@Component({
  selector: 'app-update-type',  // Change selector to reflect the new component
  templateUrl: './update-type.component.html', // Update template path
  styles: []
})
export class UpdateTypeComponent implements OnInit {

  @Input()
  type!: Type;  // Change the type from Categorie to Type

  @Input()
  ajout!: boolean;

  @Output() 
  typeUpdated = new EventEmitter<Type>();  // Change the event emitter type to Type

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateType ", this.type);
  }

  saveType() {  // Change method name to saveType
    this.typeUpdated.emit(this.type);  // Emit the updated Type
  }

}
