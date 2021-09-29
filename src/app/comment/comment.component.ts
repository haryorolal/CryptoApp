import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Icomment } from './comment.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments : Icomment
  newComment: FormGroup
  message = null;
  dataSaved = false;
  //postComment = []

  constructor( private auth: AuthService) { }

  

  ngOnInit() {
    this.setformState();
    this.getComments();
  }

setformState(){
  this.newComment = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    summary: new FormControl('', [Validators.required])
  })
}
 
 /* post(){
    this.postComment.push(this.commentt)
    this.commentt =''
  }*/

  //get and display all comments
getComments(){  
  return this.auth.getAllComments().subscribe(res => {
     this.comments = res;
  })
}

//add new comment
addNewComment(form){
  var myFormData = new FormData();
    myFormData.append('name', this.newComment.value.name)
    myFormData.append('email', this.newComment.value.email)
    myFormData.append('summary', this.newComment.value.summary)

    this.auth.postComment(myFormData).subscribe(() => {
       //this.comments = res as Icomment;
       this.dataSaved = true;
        this.message = "message sent successfully"
    })
    this.resetComment();

}

resetComment(){
  this.newComment.reset();
 }



  comment = [    
      {
        id: '1',
        name: 'David Stone ',
        email: 'davidstone@gmail.com',
        summary: 'Thank you Blomberg, you saved my coins, i will always refer more people here'
      },
      {
        id: '2',
        name: 'Panshek Lilly',
        email: 'pansheklilly@gmail.com',
        summary: 'I just dont know how to say thank you, you are the best. Now i see where the names come from '
      },
      {
        id: '3',
        name: 'Brown Kent',
        email: 'brownkent@gmail.com',
        summary: 'This is the best wallet saver i have encountered, prompt response and prompt solution'
      },
      {
        id: '4',
        name: 'David Brisk',
        email: 'davidbrisk@gmail.com',
        summary: 'Thank you Blomberg, you saved my coins, i will always refer more people here'        
      },
      {
        id: '5',
        name: 'James Kennedy',
        email: 'jaameskennedy@gmail.com',
        summary: 'I just dont know how to say thank you, you are the best. Now i see where the names come from'
      },
      {
        id: '6',
        name: 'Kentuck Brass ',
        email: 'kentuckbrass@gmail.com',
        summary: 'This is the best wallet saver i have encountered, prompt response and prompt solution'
      },
  ]
  
 

}
