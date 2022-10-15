import { Note } from "./note.model";
import { Injectable, OnDestroy } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NoteService implements OnDestroy {
  notes: Note[] = [
    new Note(
      "Lorem ipsum dolor",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    ),
  ];

  storageListenSub: Subscription

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if (event.key === 'notes') this.loadState()
    })
  }

  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find((n) => n.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.saveState();
  }

  updateNote(id: string, updateFields: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note, updateFields);
    this.saveState();
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex == -1) return;

    this.notes.splice(noteIndex, 1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  loadState() {
    try {
      const notesInStorage = JSON.parse(localStorage.getItem("notes"));
      if (notesInStorage) {
        this.notes.length = 0; // clear, keeping reference to avoid additional instances
        this.notes.push(...notesInStorage)
      }
    } catch (error) {
      console.log(`There was an error retrieving the notes from localStorage`);
    }
  }
}
