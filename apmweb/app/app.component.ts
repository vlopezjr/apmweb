import { Component, OnInit } from '@angular/core';
import { Vote, Issue } from '../app/Issue';

@Component({
    selector: 'co-issue',
    template: `<h1>{{title}}</h1>
                <div class="container-fluid">
                    <div class="panel panel-primary">
                        <div class="panel-heading text-center">
                            <a href="#" class="pull-left" style="color: white;font-size: 14px;">Skipped <span class="badge">{{skipped}}</span></a>
                            <span class="text-centered" >{{issue.partNumber | uppercase}}</span>                            
                            <a href="#" class="pull-right" style="color: white; font-size: 14px;">Remaining <span class="badge">{{remaining}}</span></a>                          
                        </div>
                        <div class="panel-body">
                                <div class="text-warning">Description:</div>
                                <div>
                                    <span style="padding-left: 30px;">{{issue.description}}</span>                                  
                                </div>
                                
                                <div *ngIf="!alreadyVoted">
                                    <p>&nbsp;</p>
                                    <div class="text-warning">Vote:</div>
                                    <div>
                                        <span style="padding: 30px;" (click)="approve()">APPROVE <span class="glyphicon glyphicon-ok" style="color: green;"></span></span>                    
                                        <span style="padding: 30px;" (click)="showReasonInput()">REJECT <span class="glyphicon glyphicon-remove" style="color: red;"></span></span>
                                        <span style="padding: 30px;">SKIP <span class="glyphicon glyphicon-step-forward" style="color: blue;" (click)="skip()"></span></span>
                                        <span *ngIf="showReasonInputBox">Reason For Rejecting: <input type="text" id="rejectReason"/><button class="btn btn-sm btn-primary" (click)="reject()">Vote</button></span>
                                    </div> 
                                </div>

                                <p>&nbsp;</p>
                                <table class="table">
                                    <tr><th style="width: 20%">User</th><th style="width: 20%">Vote</th><th>Reason</th></tr>
                                    <tr *ngFor="let vote of issue.votes">
                                        <td>{{vote.user}}</td>
                                        <td>
                                            <span class="glyphicon glyphicon-ok" style="color: green;" *ngIf="vote.voteType==='approve'"></span>
                                            <span class="glyphicon glyphicon-remove" style="color: red;" *ngIf="vote.voteType==='reject'"></span>
                                        </td>
                                        <td>{{vote.reason}}</td>
                                    </tr>
                                </table>    
                        </div>

                            

                    </div>
               </div>              

   
                   
                         
               `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})
export class AppComponent implements OnInit {
    title = 'Change Orders';
    index: number = 0;
    openIssues: Issue[] = [];
    issue: Issue;
    user = "Harold";
    alreadyVoted = false;
    showReasonInputBox = false;
    skipped = 0;
    remaining = 0;

    ngOnInit() {

        this.getOpenIssues();

        this.issue = this.openIssues[this.index];
        //console.log(this.openIssues.length);

        this.checkIfVoted();

        //this.alreadyVoted = false;
        //for (var n = 0; n < this.issue.votes.length; n++) {
        //    //console.log(this.issue.votes[n].user + " === " + this.user);
        //    //console.log(this.issue.votes[n].voteType + " !=== ''");
        //    if (this.issue.votes[n].user === this.user && this.issue.votes[n].voteType!=="") {
        //        this.alreadyVoted = true;
        //    }
        //}
        this.remaining = this.openIssues.length;
    }

    onNextIssueClick() {
        this.index++;

        if (this.index === this.openIssues.length) {
            this.index = 0;
        }

        //this.alreadyVoted = false;
        this.issue = this.openIssues[this.index];
        this.checkIfVoted();
        //for (var n = 0; n < this.issue.votes.length; n++) {
        //    //console.log(this.issue.votes[n].user + " === " + this.user);
        //    //console.log(this.issue.votes[n].voteType + " !=== ''");
        //    if (this.issue.votes[n].user === this.user) {
        //        this.alreadyVoted = true;
        //    }
        //}
    }

    onPrevIssueClick() {
        this.index--;

        if (this.index === 0) {
            this.index = this.openIssues.length - 1;
        }

        //this.alreadyVoted = false;
        this.issue = this.openIssues[this.index];
        //for (var n = 0; n < this.issue.votes.length; n++) {
        //    //console.log(this.issue.votes[n].user + " === " + this.user);
        //    //console.log(this.issue.votes[n].voteType + " !=== ''");
        //    if (this.issue.votes[n].user === this.user) {
        //        this.alreadyVoted = true;
        //    }
        //}

        this.checkIfVoted();
    }

    checkIfVoted() {
        this.alreadyVoted = false;
        this.showReasonInputBox = false;

        for (var n = 0; n < this.issue.votes.length; n++) {            
            if (this.issue.votes[n].user === this.user && this.issue.votes[n].voteType !== "") {
                this.alreadyVoted = true;
            }
        }        
    }
    
    showReasonInput() {
        this.showReasonInputBox = true;
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

    getOpenIssues() {
        for (var i = 0; i < ISSUES.length; i++) {
            for (var j = 0; j < ISSUES[i].votes.length; j++) {
                if (ISSUES[i].votes[j].voteType === "") {
                    this.openIssues.push(ISSUES[i]);
                    break;
                }
            }
        }
    }
}

var ISSUES: Issue[] = [
    {
        "changeOrderKey": 1,
        "partNumber": "2cw",
        "description": "2cw long description",
        "pageNumber": "1",
        "changeType": "add",
        "originator": "harold",
        "votes": [
            { "voteKey": 1, "user": "Harold", "voteType": "approve", "reason": "" },
            { "voteKey": 2, "user": "Bob", "voteType": "approve", "reason": "" },
            { "voteKey": 3, "user": "Joanna", "voteType": "approve", "reason": "" },
            { "voteKey": 4, "user": "Rick", "voteType": "approve", "reason": "" },
            { "voteKey": 5, "user": "Andy", "voteType": "approve", "reason": "" }
        ]      
    },
    {
        "changeOrderKey": 2,
        "partNumber": "c513",
        "description": "c513 long description",
        "pageNumber": "1",
        "changeType": "change",
        "originator": "harold",
        "votes": [
            { "voteKey": 6, "user": "Harold", "voteType": "reject", "reason": "" },
            { "voteKey": 7, "user": "Bob", "voteType": "reject", "reason": "does not exist" },
            { "voteKey": 8, "user": "Joanna", "voteType": "approve", "reason": "" },
            { "voteKey": 9, "user": "Rick", "voteType": "approve", "reason": "" },
            { "voteKey": 10, "user": "Andy", "voteType": "reject", "reason": "invalid part number" }
        ]
    },
    {
        "changeOrderKey": 3,
        "partNumber": "171",
        "description": "171 long description",
        "pageNumber": "2",
        "changeType": "delete",
        "originator": "harold",
        "votes": [
            { "voteKey": 11, "user": "Harold", "voteType": "", "reason": "" },
            { "voteKey": 12, "user": "Bob", "voteType": "approve", "reason": "" },
            { "voteKey": 13, "user": "Joanna", "voteType": "approve", "reason": "" },
            { "voteKey": 14, "user": "Rick", "voteType": "reject", "reason": "wrong vendor" },
            { "voteKey": 15, "user": "Andy", "voteType": "approve", "reason": "" }
        ]
    },
    {
        "changeOrderKey": 4,
        "partNumber": "171",
        "description": "171 long description",
        "pageNumber": "2",
        "changeType": "delete",
        "originator": "harold",
        "votes": [
            { "voteKey": 16, "user": "Harold", "voteType": "", "reason": "" },
            { "voteKey": 17, "user": "Bob", "voteType": "approve", "reason": "" },
            { "voteKey": 18, "user": "Joanna", "voteType": "approve", "reason": "" },
            { "voteKey": 19, "user": "Rick", "voteType": "reject", "reason": "wrong vendor" },
            { "voteKey": 20, "user": "Andy", "voteType": "approve", "reason": "" }
        ]
    }    ,
    {
        "changeOrderKey": 5,
        "partNumber": "171",
        "description": "171 long description",
        "pageNumber": "2",
        "changeType": "delete",
        "originator": "harold",
        "votes": [
            { "voteKey": 21, "user": "Harold", "voteType": "approve", "reason": "" },
            { "voteKey": 22, "user": "Bob", "voteType": "approve", "reason": "" },
            { "voteKey": 23, "user": "Joanna", "voteType": "approve", "reason": "" },
            { "voteKey": 24, "user": "Rick", "voteType": "reject", "reason": "wrong vendor" },
            { "voteKey": 25, "user": "Andy", "voteType": "approve", "reason": "" }
        ]
    }
];