import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iwallet } from './wallet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletFormService {

  constructor(private http: HttpClient) { }
 
  postFile(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    //formData.append('Imagecaption', caption);
    return this.http.post(environment.api + '/UploadDishImage', formData);
  }

  getWallets():Observable<Iwallet>{
      return this.http.get<Iwallet>(`${environment.api}/getwallets`);
  }

  postWallet(wallet:Iwallet):Observable<Iwallet>{
    return this.http.post<Iwallet>(`${environment.api}/postwallets`, wallet);
  }
}
