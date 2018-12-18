import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() notes: any;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    console.log(`made it to list component`)
    this.getNotes()
  }
  getNotes(){
    let observable = this._noteService.getNotes();
    observable.subscribe(data => {
      console.log("getNotes - Data from Note Service", data);
      this.notes = data['notes'];
    })
  }
  deleteNote(id){
    let observable = this._noteService.deleteNote(id);
    observable.subscribe( data => {
      console.log("Deleted Note")
      this.getNotes();
    })
  }

}
