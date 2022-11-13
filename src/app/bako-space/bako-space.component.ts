import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-bako-space',
  templateUrl: './bako-space.component.html',
  styleUrls: ['./bako-space.component.css']
})
export class BakoSpaceComponent implements OnInit {

  bDix = true;
  bVingt = false;
  bTrente = false;
  bakoB10 = true;
  bakoB15 = false;
  bakoB20 = false;
  left = true;
  top = false;
  before = false;
  face = false;
  right = false;
  rendering = true;
  gallery = false;

  constructor() { }

  ngOnInit(): void {
  }

  showTop(){
    this.top = true;
    this.face = false;
    this.left = false;
    this.before = false;
    this.right = false;
  }

  showFace(){
    this.top = false;
    this.face = true;
    this.left = false;
    this.before = false;
    this.right = false;
  }

  showLeft(){
    this.top = false;
    this.face = false;
    this.left = true;
    this.before = false;
    this.right = false;
  }

  showBefore(){
    this.top = false;
    this.face = false;
    this.left = false;
    this.before = true;
    this.right = false;
  }

  showRight(){
    this.top = false;
    this.face = false;
    this.left = false;
    this.before = false;
    this.right = true;
  }



  changeDix(){
     this.bDix = true;
     this.bVingt = false;
     this.bTrente = false;
     this.bakoB10 = true;
     this.bakoB15 = false;
     this.bakoB20 = false;
  }

  changeQuinze(){
    this.bDix = false;
    this.bVingt = true;
    this.bTrente = false;
    this.bakoB10 = false;
    this.bakoB15 = true;
    this.bakoB20 = false;
  }

  changeVingt(){
     this.bDix = false;
     this.bVingt = false;
     this.bTrente = true;
     this.bakoB10 = false;
    this.bakoB15 = false;
    this.bakoB20 = true;
  }

  openRendering(){
    this.rendering  = true;
    this.gallery =  false;
  }

  openGallery(){
    this.rendering  = false;
    this.gallery =  true;
  }
}
