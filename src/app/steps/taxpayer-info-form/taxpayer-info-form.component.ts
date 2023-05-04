import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { PoDynamicFormField, PoSelectOption } from '@po-ui/ng-components';
import { Subject, filter, map } from 'rxjs';

@Component({
  selector: 'app-taxpayer-info-form',
  templateUrl: './taxpayer-info-form.component.html',
  styleUrls: ['./taxpayer-info-form.component.css']
})
export class TaxpayerInfoFormComponent implements OnInit {

  // @Input() formGroup: FormGroup = new FormGroup({
  //   aglutinarCNPJ: new FormControl(),
  //   perfilApresentacao: new FormControl(),
  //   tipoAtividade: new FormControl(),
  //   classeAtividade: new FormControl(),
  //   email: new FormControl(),
  //   codigoFinalidadeArquivo: new FormControl()
  // });

  //@Input() formGroup!: FormGroup;

  formGroup!: FormGroup;
  @Input() formGroupName: string = '';

  perfilApresentacaoOptions: PoSelectOption[] = [
    { value: 'A', label: 'Perfil A' },
    { value: 'B', label: 'Perfil B' },
    { value: 'C', label: 'Perfil C' }
  ]

  classeAtividadeOptions: PoSelectOption[] = [
    { value: '00', label: 'Industrial transformacão' }, 
    { value: '01', label: 'Industrial beneficiamento' },
    { value: '02', label: 'Industrial montagem' },
    { value: '03', label: 'Industrial - acondicionamento ou reacondicionamento' },
    { value: '04', label: 'Industrial - renovação ou recondicionamento' },
    { value: '05', label: 'Equiparado a industrial - por opção' },
    { value: '06', label: 'Equiparado a industrial - importação direta' },
    { value: '07', label: 'Equiparado a industrial - por lei específica' },
    { value: '08', label: 'Equiparado a industrial - não enquadrado nos códigos 05, 06 ou 07' },
    { value: '09', label: 'Outros' }
  ]

  tipoAtividadeOptions: PoSelectOption[] = [
    { value: '0', label: 'Industrial ou equiparado' },
    { value: '1', label: 'Outros' }
  ]  

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {

    this.formGroup = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }


}
