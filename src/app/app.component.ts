import { trigger, transition, animate, style, query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: '0'
          }),
          animate(500)
        ], {optional: true})
      ])
    ]),
    trigger('bgAnim', [
      transition(':leave', [
        animate(500, style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  bgs: string[] = ['https://picsum.photos/1920/1080']

  loadingBgRandom = false;

  datetime: Observable<Date>

  ngOnInit() {
    this.datetime = timer(0, 1000).pipe(
      map(() => {
        return new Date
      })
    )
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated){
      return outlet.activatedRoute.snapshot.url;
    }
  }

  async changeBg() {
    this.loadingBgRandom = true;

    const result = await fetch('https://source.unsplash.com/random', {
      method: 'HEAD'
    })
    //console.log(result);

    this.bgs.push(result.url)
  }

  onBgImgLoad(imgEvent: Event) {
    const imgEl = imgEvent.target as HTMLImageElement;
    const src = imgEl.src;

    //bg loaded, remove old stuff
    this.bgs = [src];

    this.loadingBgRandom = false;
  }
}
