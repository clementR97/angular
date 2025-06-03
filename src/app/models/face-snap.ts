export class FaceSnap{   
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
}
