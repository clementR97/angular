import { Component } from '@angular/core';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from "./models/face-snap";
//import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  
  ngOnInit():void{
   
      
  }}
