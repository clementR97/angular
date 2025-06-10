export class FaceSnap{  
    location?:string; 
constructor(public title:string, 
    public description:string, 
    public createdAt:Date, 
    public snaps:number, 
    public ImageUrl:string){}

   addSnap(){
    this.snaps++;
   }
   removeSnap(){
    this.snaps--;
   }
   setLocation(location:string){
    this.location = location;
   }
   withHashLocation(location:string):FaceSnap{
    this.setLocation(location);
    return this;
   }
}
