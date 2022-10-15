import { Bookmark } from './../../shared/bookmark.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookmark: Bookmark

  tileIconSource: string
  faviconError: boolean

  constructor() { }

  ngOnInit() {
    this.tileIconSource = this.bookmark.url.origin + '/favicon.ico'
  }

}
