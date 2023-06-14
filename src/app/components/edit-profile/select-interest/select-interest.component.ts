import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterestService } from 'src/app/services/interest.service';

@Component({
  selector: 'app-select-interest',
  templateUrl: './select-interest.component.html',
  styleUrls: ['./select-interest.component.css']
})
export class SelectInterestComponent implements OnInit{

  subInterests: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private interestService: InterestService) { }

  ngOnInit(): void {
    this.getSubInterest();
  }

  getSubInterest(){
    let name = this.route.snapshot.paramMap.get('name')!;
    this.interestService.getSubInterests(name).subscribe(
      (subInterests) => { this.subInterests = subInterests; }
    );
  }

}
