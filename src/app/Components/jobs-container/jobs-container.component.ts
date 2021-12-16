import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-jobs-container',
  templateUrl: './jobs-container.component.html',
  styleUrls: ['./jobs-container.component.sass']
})
export class JobsContainerComponent implements OnInit {

  constructor(protected jobService : JobService ) { }

  ngOnInit(): void {
    this.getAllJobs()
  }

  async getAllJobs(){
    let jobs = this.jobService.getAllJobs().subscribe(a => {

    })
  }

}
