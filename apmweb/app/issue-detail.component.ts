import { Component, Input } from '@angular/core';
import { Vote, Issue } from '../app/Issue';

@Component({
    selector: 'issue-detail',
    template: `
          <div *ngIf="!alreadyVoted && !finished">
                <div class="row">
                    <div class="col-md-3"><span style="font-weight: bold;" (click)="approve()">APPROVE <span class="glyphicon glyphicon-ok" style="color: green;"></span></span></div>
                    <div class="col-md-3"><span style="font-weight: bold;" (click)="showReasonInput()">REJECT <span class="glyphicon glyphicon-remove" style="color: red;"></span></span></div>
                    <div class="col-md-3"><span style="font-weight: bold;">SKIP <span class="glyphicon glyphicon-step-forward" style="color: blue;" (click)="skip()"></span></span></div>
                </div>

                <div class="bg-danger" *ngIf="showReasonInputBox" style="line-height: 75px; padding-left: 10px;">
                    <form class="form-inline" role="form">
                        <div class="form-group">
                            <label for="reason">Reason:</label>
                            <input type="text" class="form-control" style="width: 400px;" id="reason" placeholder="Reason">
                        </div>

                        <button class="btn btn-default">Submit</button>
                        <button class="btn btn-default" (click)="cancelReasonInput()">Cancel</button>
                    </form>
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
    `
    //templateUrl: '../app/issue-detail.html',
    //styles: ['app.component.css']
})
export class IssueDetailComponent {
    @Input()
    issue: Issue;

}