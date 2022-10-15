import { NotificationService } from "./../../shared/notification.service";
import { NgForm } from "@angular/forms";
import { Bookmark } from "./../../shared/bookmark.model";
import { BookmarkService } from "./../../shared/bookmark.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-edit-bookmark",
  templateUrl: "./edit-bookmark.component.html",
  styleUrls: ["./edit-bookmark.component.scss"],
})
export class EditBookmarkComponent implements OnInit {
  bookmark: Bookmark;

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get("id");
      this.bookmark = this.bookmarkService.getBookmark(idParam);
    });
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value;
    this.bookmarkService.updateBookmark(this.bookmark.id, {
      name,
      url: new URL(url),
    })

    this.notificationService.show('Bookmark updated!')
  }

  delete() {
    this.bookmarkService.deleteBookmark(this.bookmark.id);
    this.router.navigate(["../"], { relativeTo: this.route });

    this.notificationService.show('Bookmark deleted!')
  }
}
