import { Component } from '@angular/core';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from "./models/face-snap";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent,FaceSnapListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  allSnap!: FaceSnap[];
  
  ngOnInit():void{
    this.allSnap = [

      new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      6,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ),
      
      new FaceSnap(
      'new-York',
      'new york city on tne night',
      new Date(),
      130,
      'https://images.pexels.com/photos/32369819/pexels-photo-32369819/free-photo-of-sentiers-de-feux-de-circulation-nocturnes-dynamiques-de-la-ville-de-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ),
    new FaceSnap(
      'miami for work',
      'i love miami',
      new Date(),
      100,
      'https://images.pexels.com/photos/4118101/pexels-photo-4118101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    )
    ];
    
    
    
    this.allSnap[1].setLocation('new-york');
    this.allSnap[2].setLocation('miami');
  }
}
