import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.sass'],
})
export class JobComponent implements OnInit {
  @Input() data: any;
  @Output() onClick = new EventEmitter();

  constructor(protected jobService: JobService) {}

  ngOnInit(): void {}

  async onClickItem() {
    console.log('ON-CLICK');
    this.onClick.emit();
  }
}
