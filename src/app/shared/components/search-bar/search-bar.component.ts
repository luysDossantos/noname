import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FilterItem } from '../../../features-modules/gestao-bolseiros/components/api/models/filterItem.model';

@Component({
  selector: 'app-search-bar',
  imports: [
    CommonModule, IconField, InputIcon, InputTextModule, FormsModule, ReactiveFormsModule, Select, ButtonModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  @Input() showPrimaryBtn = true;
  @Output() onPrimaryBtnClick = new EventEmitter<void>();
  @Input() primaryBtnLabel = "Ação";
  @Input() primaryBtnIcon?: string;

  @Input() showSecondBtn = false;
  @Output() onSecondBtnClick = new EventEmitter<void>();
  @Input() secondBtnLabel = "Second Action";
  @Input() secondBtnIcon?: string;

  @Output() formValueChange = new EventEmitter<any>();

  @Input() filters: FilterItem[] = [];

  constructor() {
    this.searchForm = new FormGroup({});
  }

  ngOnInit() {
    this.initializeForm();

    this.searchForm.valueChanges.subscribe(value => {
      this.formValueChange.emit(value);
    });
  }

  initializeForm() {
    this.filters.forEach(filter => {
      this.searchForm.addControl(filter.controlName, new FormControl(''));
    });
  }

  primaryBtnClick() {
    this.onPrimaryBtnClick.emit();
  }

  secondBtnClick() {
    this.onSecondBtnClick.emit();
  }
}
