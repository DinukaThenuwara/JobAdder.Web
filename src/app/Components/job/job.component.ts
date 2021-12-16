import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.sass']
})
export class JobComponent implements OnInit {

  @Input() data : any;
  
  constructor(protected jobService : JobService ) { }

  ngOnInit(): void {
    debugger;
  }

  Test(){
    debugger;
  }

}
