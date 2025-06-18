import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snap.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe, 
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!:FaceSnap;
  snapButtonText!: string;
  isSnap!: boolean;

constructor(private faceSnapService: FaceSnapService,private route: ActivatedRoute){}
ngOnInit(): void {
this.getFaceSnap();

}
private getFaceSnap(){
  const facesnapID= this.route.snapshot.params['id'];
  this.faceSnap = this.faceSnapService.getFaceSnapById(facesnapID);
}
private prepareInterface(){
  this.snapButtonText = 'Oh Snap!';
  this.isSnap = false;
}
onAddSnap(){
  if(this.isSnap){
    this.unSnap();
  }else{
    this.snap();
  }
}

private snap(){
  this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
  this.snapButtonText = 'Oops, unSnap!';
  this.isSnap = true;
}

private unSnap(){
  this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
  this.snapButtonText = 'Oh Snap!';
  this.isSnap = false;
}

}
