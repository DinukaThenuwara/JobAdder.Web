import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.sass']
})
export class CandidateComponent implements OnInit {
  @Input() data : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
