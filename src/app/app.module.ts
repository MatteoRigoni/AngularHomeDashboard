import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { BookmarkTileComponent } from './bookmarks/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { NodeCardComponent } from './notes/node-card/node-card.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { TodoComponent } from './todos/todo/todo.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { EditTodoComponent } from './todos/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './bookmarks/add-bookmark/add-bookmark.component';
import { ManageBookmarkComponent } from './bookmarks/manage-bookmark/manage-bookmark.component';
import { EditBookmarkComponent } from './bookmarks/edit-bookmark/edit-bookmark.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NodeCardComponent,
    EditNoteComponent,
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarkComponent,
    EditBookmarkComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
