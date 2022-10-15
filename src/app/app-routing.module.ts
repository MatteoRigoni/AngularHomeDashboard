import { EditBookmarkComponent } from './bookmarks/edit-bookmark/edit-bookmark.component';
import { ManageBookmarkComponent } from './bookmarks/manage-bookmark/manage-bookmark.component';
import { AddBookmarkComponent } from './bookmarks/add-bookmark/add-bookmark.component';
import { EditTodoComponent } from './todos/edit-todo/edit-todo.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'bookmarks/add', component: AddBookmarkComponent},
  {path: 'bookmarks/manage', component: ManageBookmarkComponent, children: [
    {path: ':id', component: EditBookmarkComponent}
  ]},
  {path: 'todos', component: TodosComponent},
  {path: 'todos/add', component: AddTodoComponent},
  {path: 'todos/:id', component: EditTodoComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'notes/add', component: AddNoteComponent},
  {path: 'notes/:id', component: EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
