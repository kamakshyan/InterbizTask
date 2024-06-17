import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface State {
  value: string;
  label: string;
}

@Component({
  selector: 'app-state-filter',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './state-filter.component.html',
  styleUrl: './state-filter.component.css'
})
export class StateFilterComponent {
  selectedState: string = ''; // Variable to hold selected state value
  states: State[] = [

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
dailyCases: number = 0; // Variable to hold the number of daily cases
positiveCases: number = 0;

constructor(private http: HttpClient) {}

onStateChange() {
  if (this.selectedState) {
    const state = this.selectedState.toLowerCase(); // Convert state code to lowercase
    const apiUrl = `https://api.covidtracking.com/v1/states/${state}/daily.json`;

    // Make HTTP GET request to API
    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => { // Ensure TypeScript understands 'data' as an array of 'any'
        console.log('API Response:', data);
        // Assuming 'positiveIncrease' represents daily new cases in the API response
        if (data.length > 0) {
          this.dailyCases = data[0].total || 0; // Default to 0 if data[0].positiveIncrease is undefined
        } else {
          this.dailyCases = 0; // Set to 0 if no data is returned
        }
      },
      (error) => {
        console.error('API Error:', error);
        this.dailyCases = 0; // Handle errors by setting dailyCases to 0
      }
    );
      // Make HTTP GET request to API for positive cases
      const positiveCasesUrl = `https://api.covidtracking.com/v1/states/${state}/current.json`;
      this.http.get<any>(positiveCasesUrl).subscribe(
        (data) => {
          console.log('Positive Cases API Response:', data);
          this.positiveCases = data.positive || 0;
        },
        (error) => {
          console.error('Positive Cases API Error:', error);
          this.positiveCases = 0;
        }
      );
    }
    }
    }