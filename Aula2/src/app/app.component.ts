import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div><h1>Bom dia {{name}} {{getFullName()}}</h1>
        
                <h2>{{'Page Header: ' + pageHeader}}</h2><br>
<img src='{{imagemCaminho}}' />
<br><br><button [disabled]='isDisabled' >Clicar</button>
                <my-employee></my-employee></div>`,

    //styleUrls: '',
    //templateUrl: './app.component.html'
})
export class AppComponent
{
    name: string = "Angular 2";
    pageHeader: string = "Lista de Empregados";
    firstName: string = 'Tom';
    lastName: string = 'Hap';
    isDisabled: boolean = true; //para valores não string usar property binding [disabled]='isDisbled' e não {{}}
    imagemCaminho: string = 'http://gosoftwares.com.br/site/images/logoInicio.png'
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}