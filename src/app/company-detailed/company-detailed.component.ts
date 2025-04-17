import { Component, input } from '@angular/core';
import { Company } from '../../models/company';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-company-detailed',
  imports: [DatePipe],
  templateUrl: './company-detailed.component.html',
  styleUrl: './company-detailed.component.scss',
})
export class CompanyDetailedComponent {
  company = input<Company>();
}
