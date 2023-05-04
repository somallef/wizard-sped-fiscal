import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-general-info-form',
  templateUrl: './general-info-form.component.html',
  styleUrls: ['./general-info-form.component.css']
})
export class GeneralInfoFormComponent implements OnInit {

  formGroup!: FormGroup;
  @Input() formGroupName: string = '';


  periodosApuracaoIPI: any[] = [{ value: 'Mensal', label: 'Mensal' }, { value: 'Decential', label: 'Decential' }];
  opcoesApuracaoIPI: any[] = [
    { property: 'regFrete', label: 'Gerar registros complementares de frete' },
    { property: 'regEFC', label: 'Gerar registros de ECF' },
    { property: 'credST', label: 'Imprimir créditos de ST' },
    { property: 'valsPISCOF', label: 'Considerar valores de PIS/COFINS' },
    { property: 'regsC500C700', label: 'Gerar registros C500/C700' },
  ]

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {

    this.formGroup = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }

  get formControls(): { [key: string]: AbstractControl; }
  {
    return this.formGroup.controls;
  }

  // isRequired(field: string): boolean {

  //   const form_field = this.formGroup.get(field);
  //   if (!form_field?.validator) {
  //       return false;
  //   }

  //   const validator = form_field?.validator({} as AbstractControl);
  //   return (validator && validator?.['required']);
  // }

}
