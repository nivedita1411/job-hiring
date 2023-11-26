import { JobPosition } from "./job-position.model"

export interface JobApplication {
    id:number;
    jobPositionId:number;
    applicantName:string;
    status:string;

    // jobPosition: JobPosition;
}
