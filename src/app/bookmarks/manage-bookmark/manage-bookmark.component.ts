import { BookmarkService } from './../../shared/bookmark.service';
import { Bookmark } from './../../shared/bookmark.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-bookmark',
  templateUrl: './manage-bookmark.component.html',
  styleUrls: ['./manage-bookmark.component.scss']
})
export class ManageBookmarkComponent implements OnInit {

  bookmarks: Bookmark[]
  private showDefaultMessage = true; // default state

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarks = this.bookmarkService.getBookmarks()
  }

  toggleDefaultMessage(state: boolean) {
    this.showDefaultMessage = state;
  }
}
