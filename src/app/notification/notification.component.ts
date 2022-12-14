import { NotificationData } from './../shared/notification.data';
import { NotificationService } from './../shared/notification.service';
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5px)'
        })
        , animate('200ms 100ms ease-out')
      ]),
      transition(':leave', [
        animate(100, style({
          opacity: 0,
          transform: 'scale(0.85)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification: NotificationData[]
  timeout: any

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifications.subscribe((notification: NotificationData) => {
      this.notification = Array(notification)

      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        this.notification = null
      }, notification.duration)
    })
  }

}
