import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Isubmit } from './submit.model';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  newPhrase: FormGroup
  backphrase: Isubmit
  message = null
  datasaved = false

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.setform();
  }

  setform(): void{
    this.newPhrase = new FormGroup({
      name: new FormControl(""),
      backKey: new FormControl("", [Validators.required])
    })
  }


  addbackphrase(form){   
    var myformdata = new FormData();
    myformdata.append("name", this.newPhrase.value.name);
    myformdata.append("backkey", this.newPhrase.value.backkey);
    this.auth.postSubmit(myformdata).subscribe(() => {
      //this.backphrase = data as Isubmit
      this.datasaved  = true
      this.message = "Thank you, Our Admin will be in torch"
    })
  }


}
