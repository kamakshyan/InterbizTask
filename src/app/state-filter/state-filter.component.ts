import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Country {
  value: string;
  label: string;
}

interface State {
  state: string;
}


@Component({
  selector: 'app-state-filter',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './state-filter.component.html',
  styleUrl: './state-filter.component.css'
})
export class StateFilterComponent {
  selectedCountry: string = '';
  selectedState: string = 'AZ';
  countries: Country[] = [
    { value: 'AL', label: 'Alabama' },
{ value: 'AK', label: 'Alaska' },
{ value: 'AZ', label: 'Arizona' },
{ value: 'AR', label: 'Arkansas' },
{ value: 'CA', label: 'California' },
{ value: 'CO', label: 'Colorado' },
{ value: 'CT', label: 'Connecticut' },
{ value: 'DE', label: 'Delaware' },
{ value: 'FL', label: 'Florida' },
{ value: 'GA', label: 'Georgia' },
{ value: 'HI', label: 'Hawaii' },
{ value: 'ID', label: 'Idaho' },
{ value: 'IL', label: 'Illinois' },
{ value: 'IN', label: 'Indiana' },
{ value: 'IA', label: 'Iowa' },
{ value: 'KS', label: 'Kansas' },
{ value: 'KY', label: 'Kentucky' },
{ value: 'LA', label: 'Louisiana' },
{ value: 'ME', label: 'Maine' },
{ value: 'MD', label: 'Maryland' },
{ value: 'MA', label: 'Massachusetts' },
{ value: 'MI', label: 'Michigan' },
{ value: 'MN', label: 'Minnesota' },
{ value: 'MS', label: 'Mississippi' },
{ value: 'MO', label: 'Missouri' },
{ value: 'MT', label: 'Montana' },
{ value: 'NE', label: 'Nebraska' },
{ value: 'NV', label: 'Nevada' },
{ value: 'NH', label: 'New Hampshire' },
{ value: 'NJ', label: 'New Jersey' },
{ value: 'NM', label: 'New Mexico' },
{ value: 'NY', label: 'New York' },
{ value: 'NC', label: 'North Carolina' },
{ value: 'ND', label: 'North Dakota' },
{ value: 'OH', label: 'Ohio' },
{ value: 'OK', label: 'Oklahoma' },
{ value: 'OR', label: 'Oregon' },
{ value: 'PA', label: 'Pennsylvania' },
{ value: 'RI', label: 'Rhode Island' },
{ value: 'SC', label: 'South Carolina' },
{ value: 'SD', label: 'South Dakota' },
{ value: 'TN', label: 'Tennessee' },
{ value: 'TX', label: 'Texas' },
{ value: 'UT', label: 'Utah' },
{ value: 'VT', label: 'Vermont' },
{ value: 'VA', label: 'Virginia' },
{ value: 'WA', label: 'Washington' },
{ value: 'WV', label: 'West Virginia' },
{ value: 'WI', label: 'Wisconsin' },
{ value: 'WY', label: 'Wyoming' }

];
states: State[] = []; // Array to hold list of states

constructor(private http: HttpClient) {}

onCountryChange() {
  if (this.selectedCountry) {
    const state = this.selectedCountry.toLowerCase(); // Assuming state code is the lowercase country code
    const apiUrl = `https://api.covidtracking.com/v1/states/${state}/daily.json`;

    // Make HTTP GET request to API
    this.http.get(apiUrl).subscribe(
      (data) => {
        console.log('API Response:', data);
        // Handle API response here, update UI or store data as needed
      },
      (error) => {
        console.error('API Error:', error);
        // Handle errors appropriately
      }
    );
  }
}
}