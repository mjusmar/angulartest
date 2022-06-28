import { Component } from '@angular/core';

import { User } from './models/user';
import {RequestService} from './services/request.service';
// import {IUser} from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
        
  constructor(private readonly requestSVC:RequestService){ }

   Userarray: User[] = [];

  ngOnInit(): void {
    this.requestSVC.getAll().subscribe(res => {
      const users_init = [...res];
      // console.log(this.Usertest[0].name);
      // console.log(typeof(this.Usertest));
      this.Userarray = users_init;
    });
  }

  onDelete(id: number){
    if(confirm('¿Quieres borrar esta información?')){
      const user_id = {'id': id}
      this.requestSVC.deleteUser(user_id).subscribe(res => {
        console.log(res);
        console.log(id);
        this.Userarray.splice(this.Userarray.findIndex(user => user.id === id),1)
      });      
    }
  }
  onEdit(id: number){
    console.log(id);
  }

  onFormSubmit(name_value: string, surname_value: string, cellphone_value: any){
    
    console.log(name_value);
    console.log(surname_value);
    console.log(cellphone_value);

    if( name_value == "" ||  surname_value == "" ||  cellphone_value == ""){
      alert("¡Tienes que llenar todos los campos!");      
    }
    else if (cellphone_value.length != 10){
       alert("¡Ingresa un numero valido de celular!");       
    }
    else{      
      const user_input = {'name': name_value, 'surname': surname_value, 'cellphone': cellphone_value}
      
      this.requestSVC.storeUser(user_input).subscribe(res => {
        const user_stored = res;
        this.Userarray.push(user_stored);
      });
      
    }
  }
}

// interface IRequest {
//   id: string;
//   title: string;
//   body:string;
// }
