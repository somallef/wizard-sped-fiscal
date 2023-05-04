import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-accountant-info-form',
  templateUrl: './accountant-info-form.component.html',
  styleUrls: ['./accountant-info-form.component.css']
})
export class AccountantInfoFormComponent implements OnInit {

  formGroup!: FormGroup;
  @Input() formGroupName: string = '';

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {

    this.formGroup = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }


}
