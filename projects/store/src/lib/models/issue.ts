export class Issue{
    id:number;
    summary:string;
    description:string;
    boardId:number;
    statusId:number;

    constructor(summary:string="",description:string="",boardId:number=-1,statusId:number=-1){
        this.id= Math.random()*100;

        this.summary=summary;
        this.description=description;
        this.boardId=boardId;
        this.statusId=statusId;
    }
}