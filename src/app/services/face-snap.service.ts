import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
   private faceSnaps: FaceSnap[] = [
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
      ).withHashLocation('new-york'),
      new FaceSnap(
        'miami for work',
        'i love miami',
        new Date(),
        100,
        'https://images.pexels.com/photos/4118101/pexels-photo-4118101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ).withHashLocation('miami')
    ];
    getFaceSnaps(): FaceSnap[]{
        return [...this.faceSnaps]

}
}