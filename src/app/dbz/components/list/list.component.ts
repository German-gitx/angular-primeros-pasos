import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Output()
  // public onDelete: EventEmitter<number>  = new EventEmitter();

  @Output()
  public onDelete: EventEmitter<string>  = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  //onDelete = Index value : number;

  // onDeleteCharacter(index: number):void{
  //   // TODO: Emitir el ID del personaje

  //   this.onDelete.emit(index);

  //   console.log({index});
  // }

  onDeleteCharacter(id?: string):void{
    // TODO: Emitir el ID del personaje

    if( !id ) return;

    this.onDelete.emit(id);

    console.log({id});
  }

}
