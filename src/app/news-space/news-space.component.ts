import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-news-space',
  templateUrl: './news-space.component.html',
  styleUrls: ['./news-space.component.css']
})
export class NewsSpaceComponent implements OnInit {

  awards = true;
  certif = false;
  partner = false;
  mosaique = false;
  cartage = false;
  euronews = false;
  reuter = true;
  derSpiegel = false;
  expressfm = false;
  cnn = false;
  rtci = false;
  amazingWorld = false;
  watania = false;
  maghrebVoices = false;


  constructor() { }

  ngOnInit(): void {
  }

  gotoMosaique(){
    this.mosaique = true;
    this.cartage = false;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoCartage(){
    this.mosaique = false;
    this.cartage = true;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoEuronews(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = true;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoReuter(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = false;
    this.reuter = true;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoSpiegel(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = true;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoExpressfm(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = true;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoCnn(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = true;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoRtci(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = true;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoAmazingWorld(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = true;
    this.watania = false;
    this.maghrebVoices = false;
  }

  gotoWatania(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = true;
    this.maghrebVoices = false;
  }

  gotoMaghrebVoices(){
    this.mosaique = false;
    this.cartage = false;
    this.euronews = false;
    this.reuter = false;
    this.derSpiegel = false;
    this.expressfm = false;
    this.cnn = false;
    this.rtci = false;
    this.amazingWorld = false;
    this.watania = false;
    this.maghrebVoices = true;
  }


    changeDix(){
       this.awards = true;
       this.certif = false;
       this.partner = false;
    }

    changeVingt(){
      this.awards = false;
      this.certif = true;
      this.partner = false;
    }

    changeTrente(){
       this.awards = false;
       this.certif = false;
       this.partner = true;
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
          items: 2
        },
        740: {
          items: 2
        },
        940: {
          items: 3
        }
      },
      nav: false
    };

}
