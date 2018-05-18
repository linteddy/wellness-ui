import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Patient} from '../_models/patient';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) {
  }

  savePatient(name: string, surname: string, email: string,
              weight: number, height: number, systolicBloodPressure: number,
              diastolicBloodPressure: number) {
    return this.http.post<Patient>('/api/v1/patients', {
      'name': name,
      'surname': surname,
      'email': email,
      'weight': weight,
      'height': height,
      'systolicBloodPressure': systolicBloodPressure,
      'diastolicBloodPressure': diastolicBloodPressure
    }, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  getHighRiskPatients() {
    return this.http.get<Patient[]>('/api/v1/patients/high-risk', {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
}
