export class Board{
  id:number;
  name:string;
  statuses:Status[]

  constructor(){
    this.id= Math.random()*100
    this.name="";
    this.statuses=[];
  }
}

export class Status{
  id:number;
  name:string;
  vipLimit:number;

  constructor(){
    this.id=Math.random()*100
    this.name="";
    this.vipLimit=12
  }
}
