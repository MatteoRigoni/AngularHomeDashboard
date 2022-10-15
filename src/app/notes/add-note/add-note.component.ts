import { NotificationService } from './../../shared/notification.service';
import { NoteService } from './../../shared/note.service';
import { Note } from './../../shared/note.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService: NoteService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return

    const note = new Note(form.value.title, form.value.content)
    this.noteService.addNote(note)
    this.router.navigateByUrl('/notes')
    this.notificationService.show('Note added!')
  }
}
