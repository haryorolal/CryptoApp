import { Component, OnInit } from '@angular/core';
import { WalletFormService } from '../wallet-form.service';
import { Iwallet } from '../wallet.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {map, tap} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-image',
  templateUrl: './new-wallet.component.html',
  //styleUrls: ['./new-wallet.component.css'],
  //providers:[WalletFormService]
})
export class NewWalletComponent implements OnInit {
  imageUrl: string = "assets/default-avatar.png";
  Wallet: Iwallet
  newWallet: FormGroup
  fileToUpload:File = null;


  constructor(private imageService:WalletFormService, private http: HttpClient) { }
 
  ngOnInit() {
      this.setformState();
  }

  setformState():void{
      this.newWallet = new FormGroup({
          wallet_name: new FormControl("", [Validators.required]),
          wallet_image: new FormControl("", [Validators.required])
      })
  }

  /*handleFileInput(file: FileList){
      console.log("i am clicked")
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }*/

  afuConfig = {
    uploadAPI: {
      //url:"https://example-file-upload-api"
      url: `${environment.api}/UploadDishImage`
    }
};

  /*handleFileInput(event){
    this.fileToUpload=<File>event.target.files[0];
  }

  onUpload(){
    const filedata= new FormData();
    filedata.append('image', this.fileToUpload, this.fileToUpload.name);
    this.http.post(environment.api + '/UploadDishImage', filedata).subscribe(res => {
      console.log(res);
    })
  }

  onSubmit(Image){
    this.imageService.postFile(this.fileToUpload).subscribe(
      data => {
        console.log('done');
        this.Wallet = data as Iwallet
        //this.fileToUpload = <File>Image.target.files[0];
        //Image.value = null;
        this.imageUrl = "assets/default-avatar.png";
      }
    );
  }*/

  NewSubmit(data){
    this.imageService.postWallet(data).subscribe(
      res => {
        this.Wallet = res as Iwallet
      }
    )

  }




}
