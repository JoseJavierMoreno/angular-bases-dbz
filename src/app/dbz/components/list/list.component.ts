import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
@Output()
onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks', power: 10
  }]

  onDeleteCharacter(id?:string):void{

    if(!id) return;
    this.onDeleteId.emit(id);
    console.log({id});
  }
}
