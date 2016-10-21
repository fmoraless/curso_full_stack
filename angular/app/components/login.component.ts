import {Component, OnInit} from '@angular/core';
 
@Component({
    selector: 'login',
    templateUrl: 'app/view/login.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class LoginComponent implements OnInit { 
	public titulo: string = "Identificate";
    public user;
	
	ngOnInit(){
		this.user = {
			"email": "",
			"password": "",
			"gethash": "false"
        };
    }
    
    OnSubmit(){
        console.log(this.user);
    }
}