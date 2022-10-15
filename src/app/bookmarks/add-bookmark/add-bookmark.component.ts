import { NotificationService } from './../../shared/notification.service';
import { Bookmark } from './../../shared/bookmark.model';
import { BookmarkService } from './../../shared/bookmark.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return

    const bookmark = new Bookmark(form.value.name, form.value.url)
    this.bookmarkService.addBookmark(bookmark)
    this.router.navigateByUrl('/bookmarks')

    this.notificationService.show('Bookmark created!')
  }

}
