import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';
import { interval, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-jobs-container',
  templateUrl: './jobs-container.component.html',
  styleUrls: ['./jobs-container.component.sass']
})
export class JobsContainerComponent implements OnInit {


jobList : Array<any> = [];

  constructor(protected jobService : JobService ) { }

  ngOnInit(): void {
    this.getAllJobs()
  }

  async getAllJobs(){
    this.jobList = await firstValueFrom(this.jobService.getAllJobs().pipe(map(x => x.Jobs)))
debugger;
  }

  test(job : any)
  {
    debugger;
  }
  test1()
  {
    debugger;
  }

}
