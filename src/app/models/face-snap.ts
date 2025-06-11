import { SnapType } from "./snap-type.type";
export class FaceSnap{  
    location?:string; 
    id:string;
constructor(public title:string, 
    public description:string, 
    public createdAt:Date, 
    public snaps:number, 
    public ImageUrl:string){
       this.id = crypto.randomUUID().substring(0,8); 
       
    }
    

    snap(snapType:SnapType):void{
        if(snapType === 'snap'){
            this.addSnap();
        }else if(snapType === 'unSnap'){
            this.removeSnap();
        }
    }

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
