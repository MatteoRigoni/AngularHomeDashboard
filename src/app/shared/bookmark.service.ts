import { Bookmark } from './bookmark.model';
import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] = [
    new Bookmark("Wikipedia", "https://wikipedia.org"),
    new Bookmark("Amazon", "https://amazon.com")
  ]

  storageListenSub: Subscription

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if (event.key === 'bookmarks') this.loadState()
    })
  }

  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }

  getBookmarks() {
    return this.bookmarks
  }

  getBookmark(id: string) {
    return this.bookmarks.find(n => n.id === id);
  }

  addBookmark(note: Bookmark) {
    this.bookmarks.push(note);
    this.saveState()
  }

  updateBookmark(id: string, updateFields: Partial<Bookmark>) {
    const note = this.getBookmark(id)
    Object.assign(note, updateFields);
    this.saveState()
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex(n => n.id === id)
    if (bookmarkIndex == -1) return

    this.bookmarks.splice(bookmarkIndex, 1);
    this.saveState()
  }

  saveState() {
    localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
  }

  loadState() {
    try {
      const bookmarksInStorage = JSON.parse(localStorage.getItem("bookmarks"));
      if (bookmarksInStorage) {
        this.bookmarks.length = 0;
        this.bookmarks.push(...bookmarksInStorage)
      }
    } catch (error) {
      console.log(`There was an error retrieving the bookmarks from localStorage`);
    }
  }
}
