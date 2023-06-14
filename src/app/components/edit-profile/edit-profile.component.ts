import { Component, OnInit } from '@angular/core';
import { InterestService } from 'src/app/services/interest.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  selectedPreference: string | undefined;
  interests: any[] = [];

  constructor(private interestService: InterestService){}

  ngOnInit(): void {
    this.getInterests();
  }

  getInterests(){
    this.interestService.getInterests().subscribe(
      (interests) => { this.interests = interests; }
    );
  }

  onPreferenceChange() {
     this.selectedPreference = (<HTMLInputElement>document.getElementById("preferencia")).value;
  }
}
