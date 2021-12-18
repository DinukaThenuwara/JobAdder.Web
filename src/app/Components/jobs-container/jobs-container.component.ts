import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';
import { interval, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { CandidateService } from 'src/app/Services/candidate.service';

@Component({
  selector: 'app-jobs-container',
  templateUrl: './jobs-container.component.html',
  styleUrls: ['./jobs-container.component.sass'],
})
export class JobsContainerComponent implements OnInit {
  jobList: Array<any> = [];
  candidates: Array<any> = [];
  filterText : string = ''
  fillterdJobs: Array<any> = [];

  constructor(
    private jobService: JobService,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.getAllJobs();
  }

  async getAllJobs() {
    this.jobList = await firstValueFrom(
      this.jobService.getAllJobs().pipe(map((x) => x.Jobs))
    );
    this.fillterdJobs = this.jobList
    if (this.jobList?.length > 0) this.onJobSelect(this.jobList[0]);
  }

  async onJobSelect(job: any) {
    this.candidates = await firstValueFrom(
      this.candidateService
        .getMostSuitableCandidate({
          JobId: job.JobId,
          SkillTags: job.SkillTags,
          WeightedSkills: job.WeightedSkills,
        })
        .pipe(map((x) => x.Candidates))
    );
  }

  filterValueChange(searchValue: string){
    this.fillterdJobs = this.jobList.filter(a => a.Name.toUpperCase().includes(searchValue.toUpperCase()));
  }
}
