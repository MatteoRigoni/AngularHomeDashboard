import { NotificationService } from './../../shared/notification.service';
import { NgForm } from '@angular/forms';
import { Note } from './../../shared/note.model';
import { NoteService } from './../../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')
      this.note = this.noteService.getNote(idParam)
    })
  }

  onFormSubmit(form: NgForm) {
    this.noteService.updateNote(this.note.id, form.value)
    this.router.navigateByUrl('/notes')
    this.notificationService.show('Note updated!')
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id)
    this.router.navigateByUrl('/notes')
    this.notificationService.show('Note deleted!')
  }
}
