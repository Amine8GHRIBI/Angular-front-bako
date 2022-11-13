import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterModule } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
  activeSlideChange(cc: any){
    let slideItem = cc.slides[cc.activeSlide];
    let id = slideItem.el.nativeElement.id;
    console.log(id);
     if ( id === 'vid1') {
         cc.interval = 1000 * 15 ; // 5 secs
     } else if ( id === 'img1') { 
       cc.interval = 1000 * 5; // 15 secs
     }else  {
       cc.interval = 5000;
     }
   }
 

    linkfcb() {
     window.open('https://www.facebook.com/bakomotors/');
    }

    linklinkedin() {
      window.open('https://www.linkedin.com/company/bakomotors/mycompany/');
      }

    linkyoutube() {
      window.open('https://www.youtube.com/channel/UCLDzKccjrEImewtTZaPNipA');
      }
       
    linkinstagram() {
        window.open('https://www.instagram.com/bakomotors/?hl=fr%20bakomotors');
        }

        images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

        constructor(config: NgbCarouselConfig) {
          // customize default values of carousels used by this component tree
          config.interval = 2000;
          config.keyboard = true;
          config.pauseOnHover = true;
        }
       
    
    

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      margin: 0,
      navSpeed: 700,
      navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
          940: {
            items: 1
          }
        },
        nav: false
      };

}
