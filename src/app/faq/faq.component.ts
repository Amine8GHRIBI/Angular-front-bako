import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  questionForm = true;

  constructor() { }

  ngOnInit(): void {
  }

  sendQuestion(){
    this.questionForm = false;
  }

}
