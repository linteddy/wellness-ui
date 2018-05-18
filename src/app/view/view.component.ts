import {Component, OnInit} from '@angular/core';
import {PatientService} from '../_services/patient.service';
import {Patient} from '../_models/patient';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  patients: Patient[];
  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.retrieveHighRiskPatients();
  }

  private retrieveHighRiskPatients() {
    this.patientService.getHighRiskPatients().subscribe(
      data => {
            console.log(data);
            this.patients = data;
      }
    );
  }

}
