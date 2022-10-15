import { Bookmark } from './../shared/bookmark.model';
import { BookmarkService } from './../shared/bookmark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Bookmark[] = []

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarks = this.bookmarks.concat(this.bookmarkService.getBookmarks())
  }

}
