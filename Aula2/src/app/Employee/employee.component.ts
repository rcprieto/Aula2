import {Component} from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    nome: string = 'Tom';
    sobreNome: string = 'Hopkins';
    genero: string = 'Male';
    idade: number = 20;
}