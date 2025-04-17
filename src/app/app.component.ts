import { ChangeDetectionStrategy, Component, effect, inject, model, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { CompaniesService } from '../services/companies.service';
import { CompanyDetailedComponent } from './company-detailed/company-detailed.component';
import { Company } from '../models/company';
import { CompanyListComponent } from './company-list/company-list.component';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CompanyDetailedComponent, CompanyListComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  private _companiesService = inject(CompaniesService);
  /** subscription to the request of companies getter */
  inseeCompaniesSubscription?: Subscription;
  /** company displayed in the detail card */
  detailedCompany: WritableSignal<Company | undefined> = signal(undefined);
  /** user value in the input text */
  textualFilter = model<any>('');
  /** result of the request made to the api insee */
  companyListUntouched: WritableSignal<Company[]> = signal([]);

  ngOnInit() {
    this.refreshData();
  }

  /** refresh the data by requesting the api */
  refreshData() {
    this.inseeCompaniesSubscription?.unsubscribe();
    this.inseeCompaniesSubscription = this._companiesService
      .getCompaniesList(this.textualFilter())
      .pipe(take(1))
      .subscribe((v) => {
        this.companyListUntouched.set(v);
      });
  }

  /** casting of the target to overwrite textualfilter */
  setTextualFilter(e: EventTarget | null) {
    const target = e as HTMLTextAreaElement;
    this.textualFilter.set(target?.value?.trim()?.toLocaleLowerCase() ?? '');
    this.refreshData();
  }

  ngOnDestroy() {
    this.inseeCompaniesSubscription?.unsubscribe();
  }
}
