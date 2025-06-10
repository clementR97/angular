import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../services/face-snap.service';
@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent {
  
  allSnap!: FaceSnap[];
  constructor(private faceSnapService: FaceSnapService){}
  ngOnInit():void{
    
      this.allSnap = this.faceSnapService.getFaceSnaps();
      this.allSnap[1].setLocation('new-york');
      this.allSnap[2].setLocation('miami');
    }
    
  }

