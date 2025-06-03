import { Input,Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!:FaceSnap;
// title!:string;
// description!:string;
// createdAt!:Date;
// snaps!:number;
// ImageUrl!:string;
isSnap!:boolean;
textButton!:string;
ngOnInit(): void {
  // this.title = 'Archibald';
  // this.description = 'Mon meilleur ami depuis tout petit !';
  // this.createdAt = new Date();
  // this.snaps = 6;
  // this.ImageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  this.isSnap = false;
  this.textButton = 'Oh Snap!';
}
onAddSnap(){
  if(this.isSnap){
    this.unSnap();
  }else{
    this.snap();
    
  } 
}
unSnap(){
  this.faceSnap.removeSnap();
    this.isSnap = false;
    this.textButton = 'Oh Snap!';
}
snap(){
  this.faceSnap.addSnap();
    this.isSnap = true;
    this.textButton = 'Oops, unSnap!';
}
}
