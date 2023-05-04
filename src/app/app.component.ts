import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) poModalSped!: PoModalComponent;

  title = 'Assistente para geração da ESCRITURAÇÃO FISCAL DIGITAL – EFD-ICMS/IPI';

  mainForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.poModalSped.open();

    this.mainForm = this.formBuilder.group({
      generalInfoForm: this.formBuilder.group({
        dataInicial: ['', Validators.required],
        dataFinal: ['', Validators.required],
        txtLivro: ['', Validators.required],
        txtSalvarEm: ['', Validators.required],
        txtNomeDoArquivo: ['', Validators.required],
        txtArquivoAnterior: ['', Validators.required],
        regFrete: [false],
        regEFC: [false],
        credST: [false],
        valsPISCOF: [false],
        regsC500C700: [false],
        periodoApuracaoIPI:['']
        //TODO: implementar demais campos
      }), 
      taxpayerInfoForm: this.formBuilder.group({
        aglutinarCNPJ: [false],
        perfilApresentacao: ['A', Validators.required],
        tipoAtividade: ['1', Validators.required],
        classeAtividade: ['09', Validators.required],
        emailContribuinte: ['', Validators.email],
        codigoFinalidadeArquivo: ['']
      }),
      accountantInfoForm: this.formBuilder.group({
        nome: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
        cnpj: ['', Validators.compose([Validators.maxLength(14), Validators.minLength(14)])],
        cpf: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11)])],
        crc: ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        telefone: ['', Validators.compose([Validators.maxLength(11), Validators.minLength(10)])],
        fax: ['', Validators.compose([Validators.maxLength(11)])],
        endereco: ['', Validators.compose([Validators.maxLength(60)])],
        numero: ['', Validators.compose([Validators.maxLength(10)])],
        complemento: ['', Validators.compose([Validators.maxLength(60)])],
        bairro: ['', Validators.compose([Validators.maxLength(60)])],
        cep: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(8)])],
        codMunicipio: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7)])]
    
      })
    });   
    
  }

  canActiveNextStep(form: any): boolean {
    return true;//!form.invalid || false;
  }

  sendData(): boolean {

    if (this.mainForm.valid) {
      const formData = this.mainForm.getRawValue(); //TODO: implementar interface para envio dos dados ao backend
      const serializedForm = JSON.stringify(formData);
      console.log(serializedForm)

      return true
    }

    return false
    
  }



}
