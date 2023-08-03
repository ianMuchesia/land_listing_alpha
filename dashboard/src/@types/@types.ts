export interface userAuth {
  name: string;
  userId: string;
  role: string;
}

export interface typeImage{
  url:string;
}

export interface typeProperties {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  area: number;
  mainImage:typeImage;
  images: typeImage[];
  location: string;
}
export type PaginationState = {
  currentPage: number;
};

interface Location{
  
    name:string;
    _id:string;
  
}
export interface typeLocation{
  data:{};
  locations:Location[];
  
  

  error:any;
}

export type PaginationAction =
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "NEXT_PAGE" }
  | { type: "PREVIOUS_PAGE" };
