import { Component, OnInit } from '@angular/core';
import { EmailValidation, RequiredTextVaidation, OneCharValidation, BirthDateValidation, USAZipCodeValidation, USAPhoneNumberValidation, OptionaTextValidation } from '../../Shared/validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vacancy-apply',
  templateUrl: './vacancy-apply.component.html',
  styleUrls: ['./vacancy-apply.component.css']
})
export class VacancyApplyComponent implements OnInit {

  datasaved = false;
  message = null;

  userForm: FormGroup;
  //selectedFile:File =null;
  selectedFile:string;
  //fileToUpload: File=null;
  userError = '';  
  imageUrl = 'assets/default-avatar.png';
  //PhoneTypes = $enum(PhoneType).getKeys()
  //states: Observable<IUSState[]>
  myFiles:string [] = [];

  constructor(private formBuilder: FormBuilder,  private auth: AuthService , private http:HttpClient) { }

  get dateOfBirth(){
    return this.userForm.get('dateOfBirth').value || new Date()
  }

  get age(){
    return new Date().getFullYear() - this.dateOfBirth.getFullYear()
  }

  get formControls(){
    return this.userForm["controls"]
  }

  ngOnInit() {
    this.setFormControl(); 
  }

  
setFormControl() {
  this.userForm = this.formBuilder.group({
  firstname: ['', RequiredTextVaidation],
  initials: [ '', OneCharValidation],
  lastname: [ '', RequiredTextVaidation],
  dateOfBirth: [ '', BirthDateValidation],
  email: [ '', EmailValidation],
  address:['', RequiredTextVaidation],
  phones:['', Validators.required],
  Image:['',Validators.required],  
  Image2:['',Validators.required],
  Image3:['',Validators.required]
  //imageFront:['', Validators.required],  
  //imageBack:['', Validators.required],
  //imageName:['', Validators.required],

  
  })
}



onFileSelected(event){

  for(let i =0; i<event.target.files.length; i++){
    this.selectedFile = event.target.files[i];
    this.myFiles.push( event.target.files[i] )

    console.log(this.myFiles);
  }
}


save(){
  var myFormData = new FormData();
    myFormData.append('firstname', this.userForm.value.firstname);
    myFormData.append('initials', this.userForm.value.initials);
    myFormData.append('lastname', this.userForm.value.lastname);
    myFormData.append('dateOfBirth', this.userForm.value.dateOfBirth);
    myFormData.append('email', this.userForm.value.email);
    myFormData.append('address', this.userForm.value.address);
    myFormData.append('phones', this.userForm.value.phones);
    for (let i =0; i < this.myFiles.length; i++){      
      myFormData.append('Image[]', this.myFiles[i]);
    }

    if(myFormData != null){
        this.auth.postCandidate(myFormData).subscribe(() => {
          if (this.datasaved = true){
            this.message = "Your data is saved successfully";
          }else{
            this.message = "Oops! I guess you should try again or check your network.";
          }          
        })
        this.ResetForms();
    }else{
      this.message = "Gotya! Trying to be smart? Your form is empty";
    }


}


ResetForms(){
  this.userForm.reset();
}

}
