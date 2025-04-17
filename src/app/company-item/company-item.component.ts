import { Component, input, InputSignal } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-item',
  imports: [],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss',
})
export class CompanyItemComponent {
  /** item of the company displayed */
  item: InputSignal<Company | undefined> = input<Company | undefined>();
}
