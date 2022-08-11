import { Component, HostListener, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'portfolio-argprograma';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let current: any = '';
    document.querySelectorAll('section').forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        if (section.getAttribute('id') != null) {
          current = section.getAttribute('id');
        }
      }
    });

    document.querySelectorAll('.nb').forEach((nb) => {
      nb.classList.remove('active');
      if (
        nb.classList.contains(current) &&
        document.getElementById('dialog') === null
      ) {
        nb.classList.add('active');
      }
    });
  }
}
