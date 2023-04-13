import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/services/http-client.service';
import { RegisterModel } from '../Model/registerModel';
import { environment } from 'src/environment/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {onSubmit() {
throw new Error('Method not implemented.');
}

  successMessage:string =""

  regForm!:FormGroup

  constructor(private fb: FormBuilder, private readonly httpService:HttpClientService) { }

  postUser:RegisterModel | undefined;

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      //duplicatepassword: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    });
  }

  newUsers(){

    //console.log("form", this.regForm)
    this.httpService.Post(environment.apiUrl+"user",this.regForm.value).subscribe((res: any)=>{
        this.postUser=res.data as RegisterModel;
        console.log(res)
    },(err: any)=>{
        console.log(err);
    })
  }

  register(){
    this.successMessage = "Üye Oluşruldu 🧡"
  }
}

