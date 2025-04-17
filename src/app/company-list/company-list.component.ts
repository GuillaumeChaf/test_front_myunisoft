import { Component, computed, effect, input, output, signal, Signal } from '@angular/core';
import { CompanyItemComponent } from '../company-item/company-item.component';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-list',
  imports: [CompanyItemComponent],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent {
  /** list of company received from parent */
  companyList = input.required<Company[]>();
  /** list of company after treatment */
  companyListTreated: Signal<Company[]> = computed(() =>
    this.companyList().slice((this.pageSelected() - 1) * this.itemMaxPerList, this.pageSelected() * this.itemMaxPerList),
  );
  //#region pagination
  /** number of item displayed in a list */
  readonly itemMaxPerList: number = 10;
  /** index of the selected page */
  pageSelected = signal(1);
  /** list of page index displayed on the bottom */
  pagesDisplayed = computed<number[]>(() => {
    const previous = this.pageSelected() - 1 < 1 ? undefined : this.pageSelected() - 1;
    const current = this.pageSelected();
    const next = this.pageSelected() + 1 > Math.ceil(this.companyList().length / this.itemMaxPerList) ? undefined : this.pageSelected() + 1;
    return [previous, current, next].filter((v) => v !== undefined) as number[];
  });
  //#endregion

  /** action when an item is clicked */
  handleClick = output<Company>();

  constructor() {
    effect(() => {
      const a = this.companyList();
      this.pageSelected.set(1);
    });
  }
}
