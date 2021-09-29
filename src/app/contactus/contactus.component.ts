import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup
  message = null;
  datasaved = false;

  constructor(private auth:AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setformControl();
  }

  setformControl(){
    this.contactForm = this.formBuilder.group({
      names: ["", Validators.required],
      email: ["", Validators.required],
      messages: ["", Validators.required]
    })
  }

  postContact(){
    //console.log("i am here");
    var myFormData = new FormData();
    myFormData.append('names', this.contactForm.value.names)
    myFormData.append('email', this.contactForm.value.email)
    myFormData.append('messages', this.contactForm.value.messages)

    if(myFormData != null){
        this.auth.postcontact(myFormData).subscribe(() => {
          this.datasaved = true;
          this.message = "message sent successfully"
        })
        this.resetForm();
    }else{
      console.log("contact form is empty");
    }
  }

  resetForm(){
    this.contactForm.reset();
  }
}
