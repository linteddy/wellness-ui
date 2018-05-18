import {Component, OnInit} from '@angular/core';
import {AlertService} from '../_services/alert.service';
import {PatientService} from '../_services/patient.service';
import {Patient} from '../_models/patient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {
  public patient: Patient = new Patient();

  submitted = false;

  constructor(private alertService: AlertService,
              private patientService: PatientService, private route: Router) {
  }

  ngOnInit() {
  }

  save() {
    console.log(this.patient);
    this.patientService.savePatient(this.patient.name, this.patient.surname, this.patient.email, this.patient.weight,
      this.patient.height, this.patient.systolicBloodPressure, this.patient.diastolicBloodPressure)
      .subscribe(
        data => {
          this.route.navigateByUrl('/dashboard');
          this.alertService.success('Patient saved successfully');
        }
        ,
        error => {
          this.alertService.error(error.message);
        });

  };

}
