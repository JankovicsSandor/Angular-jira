import { Issue } from "@store";

export class BoardModel {
    id: number;
    boardName: string;
    stages: BoardStageIssueModel[];

    constructor(id: number = -1, boardName: string = "") {
        this.id = id;
        this.boardName = boardName;
        this.stages = [];
    }
}

export class BoardStageIssueModel {
    id: number;
    stageName: string;
    vipLimit: number;
    issues: Issue[]

    constructor(stageId: number = -1, name: string = "", vipLimit: number = 16, issues = <Issue[]>[]) {
        this.id = stageId;
        this.stageName = name;
        this.vipLimit = vipLimit;
        this.issues = issues;
    }
}