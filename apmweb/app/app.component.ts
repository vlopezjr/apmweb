import { Component, OnInit } from '@angular/core';
import { Vote, Issue } from './issue';
import { IssueDetailComponent } from './issue-detail.component';
import { IssueService } from './issue.service';


@Component({
    selector: 'co-issue',
    templateUrl: '../app/app.component.html',
    styles: ['app.component.css'],
    directives: [IssueDetailComponent],
    providers: [IssueService]
})
export class AppComponent implements OnInit {
    title = 'Change Orders';
    index: number;
    openIssues: Issue[];
    currentIssue: Issue;
    user = "Harold";
    alreadyVoted = false;
    showReasonInputBox = false;
    skipped = 0;
    remaining = 0;
    finished = false;

    constructor(private issueService: IssueService) { }

    ngOnInit() {
        this.getIssues();
        this.index = 0;
        this.currentIssue = this.openIssues[this.index];
        this.checkIfVoted();
        this.remaining = this.openIssues.length;
    }

    onNextIssueClick() {
        this.index++;

        if (this.index === this.openIssues.length) {
            this.finished = true;
        }
       
        this.currentIssue = this.openIssues[this.index];
        this.checkIfVoted();     
    }

    onPrevIssueClick() {
        this.index--;

        if (this.index === 0) {
            this.index = this.openIssues.length - 1;
        }
       
        this.currentIssue = this.openIssues[this.index];
      
        this.checkIfVoted();
    }

    checkIfVoted() {
        this.alreadyVoted = false;
        this.showReasonInputBox = false;

        for (var n = 0; n < this.currentIssue.votes.length; n++) {            
            if (this.currentIssue.votes[n].user === this.user && this.currentIssue.votes[n].voteType !== "") {
                this.alreadyVoted = true;
            }
        }        
    }
    
    showReasonInput() {
        this.showReasonInputBox = true;
    }

    cancelReasonInput() {
        this.showReasonInputBox = false;
        return false;
    }

    approve() {
        this.remaining--;
        this.onNextIssueClick();
    }

    reject() {
        this.remaining--;
        this.onNextIssueClick();
    }

    skip() {
        this.skipped++;
        this.onNextIssueClick();
    }

    getIssues() {
        this.openIssues = this.issueService.getIssues();//.then(issues => this.openIssues = issues);
        
    }

    //initIssues(issues: Issue[]) {
    //    this.openIssues = issues
    //    console.log("Issues Count: " + this.openIssues.length);
    //    this.index = 0;
    //    this.currentIssue = this.openIssues[this.index];
    //    this.checkIfVoted();
    //    this.remaining = this.openIssues.length;
    //}
    //getOpenIssues() {
    //    for (var i = 0; i < ISSUES.length; i++) {
    //        for (var j = 0; j < ISSUES[i].votes.length; j++) {
    //            if (ISSUES[i].votes[j].voteType === "") {
    //                this.openIssues.push(ISSUES[i]);
    //                break;
    //            }
    //        }
    //    }
    //}
}

//var ISSUES: Issue[] = [
//    {
//        "changeOrderKey": 1,
//        "partNumber": "2cw",
//        "description": "2cw long description",
//        "pageNumber": "1",
//        "changeType": "add",
//        "originator": "harold",
//        "votes": [
//            { "voteKey": 1, "user": "Harold", "voteType": "approve", "reason": "" },
//            { "voteKey": 2, "user": "Bob", "voteType": "approve", "reason": "" },
//            { "voteKey": 3, "user": "Joanna", "voteType": "approve", "reason": "" },
//            { "voteKey": 4, "user": "Rick", "voteType": "approve", "reason": "" },
//            { "voteKey": 5, "user": "Andy", "voteType": "approve", "reason": "" }
//        ]      
//    },
//    {
//        "changeOrderKey": 2,
//        "partNumber": "c513",
//        "description": "c513 long description",
//        "pageNumber": "1",
//        "changeType": "change",
//        "originator": "harold",
//        "votes": [
//            { "voteKey": 6, "user": "Harold", "voteType": "reject", "reason": "" },
//            { "voteKey": 7, "user": "Bob", "voteType": "reject", "reason": "does not exist" },
//            { "voteKey": 8, "user": "Joanna", "voteType": "approve", "reason": "" },
//            { "voteKey": 9, "user": "Rick", "voteType": "approve", "reason": "" },
//            { "voteKey": 10, "user": "Andy", "voteType": "reject", "reason": "invalid part number" }
//        ]
//    },
//    {
//        "changeOrderKey": 3,
//        "partNumber": "171",
//        "description": "171 long description",
//        "pageNumber": "2",
//        "changeType": "delete",
//        "originator": "harold",
//        "votes": [
//            { "voteKey": 11, "user": "Harold", "voteType": "", "reason": "" },
//            { "voteKey": 12, "user": "Bob", "voteType": "approve", "reason": "" },
//            { "voteKey": 13, "user": "Joanna", "voteType": "approve", "reason": "" },
//            { "voteKey": 14, "user": "Rick", "voteType": "reject", "reason": "wrong vendor" },
//            { "voteKey": 15, "user": "Andy", "voteType": "approve", "reason": "" }
//        ]
//    },
//    {
//        "changeOrderKey": 4,
//        "partNumber": "172",
//        "description": "172 long description",
//        "pageNumber": "3",
//        "changeType": "delete",
//        "originator": "harold",
//        "votes": [
//            { "voteKey": 16, "user": "Harold", "voteType": "", "reason": "" },
//            { "voteKey": 17, "user": "Bob", "voteType": "approve", "reason": "" },
//            { "voteKey": 18, "user": "Joanna", "voteType": "approve", "reason": "" },
//            { "voteKey": 19, "user": "Rick", "voteType": "reject", "reason": "wrong vendor" },
//            { "voteKey": 20, "user": "Andy", "voteType": "approve", "reason": "" }
//        ]
//    }    ,
//    {
//        "changeOrderKey": 5,
//        "partNumber": "173",
//        "description": "173 long description",
//        "pageNumber": "3",
//        "changeType": "delete",
//        "originator": "harold",
//        "votes": [
//            { "voteKey": 21, "user": "Harold", "voteType": "approve", "reason": "" },
//            { "voteKey": 22, "user": "Bob", "voteType": "approve", "reason": "" },
//            { "voteKey": 23, "user": "Joanna", "voteType": "approve", "reason": "" },
//            { "voteKey": 24, "user": "Rick", "voteType": "reject", "reason": "wrong vendor" },
//            { "voteKey": 25, "user": "Andy", "voteType": "approve", "reason": "" }
//        ]
//    }
//];