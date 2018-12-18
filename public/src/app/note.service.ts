import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http: HttpClient) { 

  }
  getNotes(){
    return this._http.get('/notes');
  }
  // getNote(id){
  //   return this._http.get(`/notes/${id}`);
  // }
  createNote(newNote){
    return this._http.post('/notes', newNote);
  }
  // updateNote(id, selectedNote){
  //   return this._http.put(`/notes/${id}`, selectedNote);
  // }
  deleteNote(id){
    return this._http.delete(`/notes/${id}`);
  }
}
