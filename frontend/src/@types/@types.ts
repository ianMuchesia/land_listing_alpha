export interface userAuth {
    name: string;
    userId: string;
    role: string;
  }


  export interface typeProperties{
    _id:string;
    title:string;
    description:string;
    price:number;
    category:string;
    area:number;
    imageUrls:string[];
    
}