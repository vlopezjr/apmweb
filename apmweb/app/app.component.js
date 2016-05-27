System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, ISSUES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Change Orders';
                    this.index = 0;
                    this.issue = ISSUES[this.index];
                    this.user = "Harold";
                    this.alreadyVoted = false;
                    this.showReasonInputBox = false;
                    this.skipped = 0;
                    this.remaining = 0;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.checkIfVoted();
                    //this.alreadyVoted = false;
                    //for (var n = 0; n < this.issue.votes.length; n++) {
                    //    //console.log(this.issue.votes[n].user + " === " + this.user);
                    //    //console.log(this.issue.votes[n].voteType + " !=== ''");
                    //    if (this.issue.votes[n].user === this.user && this.issue.votes[n].voteType!=="") {
                    //        this.alreadyVoted = true;
                    //    }
                    //}
                    this.remaining = ISSUES.length;
                };
                AppComponent.prototype.onNextIssueClick = function () {
                    this.index++;
                    if (this.index === ISSUES.length) {
                        this.index = 0;
                    }
                    //this.alreadyVoted = false;
                    this.issue = ISSUES[this.index];
                    this.checkIfVoted();
                    //for (var n = 0; n < this.issue.votes.length; n++) {
                    //    //console.log(this.issue.votes[n].user + " === " + this.user);
                    //    //console.log(this.issue.votes[n].voteType + " !=== ''");
                    //    if (this.issue.votes[n].user === this.user) {
                    //        this.alreadyVoted = true;
                    //    }
                    //}
                };
                AppComponent.prototype.onPrevIssueClick = function () {
                    this.index--;
                    if (this.index === 0) {
                        this.index = ISSUES.length - 1;
                    }
                    //this.alreadyVoted = false;
                    this.issue = ISSUES[this.index];
                    //for (var n = 0; n < this.issue.votes.length; n++) {
                    //    //console.log(this.issue.votes[n].user + " === " + this.user);
                    //    //console.log(this.issue.votes[n].voteType + " !=== ''");
                    //    if (this.issue.votes[n].user === this.user) {
                    //        this.alreadyVoted = true;
                    //    }
                    //}
                    this.checkIfVoted();
                };
                AppComponent.prototype.checkIfVoted = function () {
                    this.alreadyVoted = false;
                    this.showReasonInputBox = false;
                    for (var n = 0; n < this.issue.votes.length; n++) {
                        if (this.issue.votes[n].user === this.user && this.issue.votes[n].voteType !== "") {
                            this.alreadyVoted = true;
                        }
                    }
                };
                AppComponent.prototype.showReasonInput = function () {
                    this.showReasonInputBox = true;
                };
                AppComponent.prototype.approve = function () {
                    this.remaining--;
                    this.onNextIssueClick();
                };
                AppComponent.prototype.reject = function () {
                    this.remaining--;
                    this.onNextIssueClick();
                };
                AppComponent.prototype.skip = function () {
                    this.skipped++;
                    this.onNextIssueClick();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'co-issue',
                        template: "<h1>{{title}}</h1>\n                <div class=\"container-fluid\">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading text-center\">\n                            <a href=\"#\" class=\"pull-left\" style=\"color: white;font-size: 14px;\">Skipped <span class=\"badge\">{{skipped}}</span></a>\n                            <span class=\"text-centered\" >{{issue.partNumber | uppercase}}</span>                            \n                            <a href=\"#\" class=\"pull-right\" style=\"color: white; font-size: 14px;\">Remaining <span class=\"badge\">{{remaining}}</span></a>                          \n                        </div>\n                        <div class=\"panel-body\">\n                                <div class=\"text-warning\">Description:</div>\n                                <div>\n                                    <span style=\"padding-left: 30px;\">{{issue.description}}</span>                                  \n                                </div>\n                                \n                                <div *ngIf=\"!alreadyVoted\">\n                                    <p>&nbsp;</p>\n                                    <div class=\"text-warning\">Vote:</div>\n                                    <div>\n                                        <span style=\"padding: 30px;\" (click)=\"approve()\">APPROVE <span class=\"glyphicon glyphicon-ok\" style=\"color: green;\"></span></span>                    \n                                        <span style=\"padding: 30px;\" (click)=\"showReasonInput()\">REJECT <span class=\"glyphicon glyphicon-remove\" style=\"color: red;\"></span></span>\n                                        <span style=\"padding: 30px;\">SKIP <span class=\"glyphicon glyphicon-step-forward\" style=\"color: blue;\" (click)=\"skip()\"></span></span>\n                                        <span *ngIf=\"showReasonInputBox\">Reason For Rejecting: <input type=\"text\" id=\"rejectReason\"/><button class=\"btn btn-sm btn-primary\" (click)=\"reject()\">Vote</button></span>\n                                    </div> \n                                </div>\n\n                                <p>&nbsp;</p>\n                                <table class=\"table\">\n                                    <tr><th style=\"width: 20%\">User</th><th style=\"width: 20%\">Vote</th><th>Reason</th></tr>\n                                    <tr *ngFor=\"let vote of issue.votes\">\n                                        <td>{{vote.user}}</td>\n                                        <td>\n                                            <span class=\"glyphicon glyphicon-ok\" style=\"color: green;\" *ngIf=\"vote.voteType==='approve'\"></span>\n                                            <span class=\"glyphicon glyphicon-remove\" style=\"color: red;\" *ngIf=\"vote.voteType==='reject'\"></span>\n                                        </td>\n                                        <td>{{vote.reason}}</td>\n                                    </tr>\n                                </table>    \n                        </div>\n\n                            \n\n                    </div>\n               </div>              \n\n   \n                   \n                         \n               ",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            ISSUES = [
                {
                    "changeOrderKey": 1,
                    "partNumber": "2cw",
                    "description": "2cw long description",
                    "pageNumber": "1",
                    "changeType": "add",
                    "originator": "harold",
                    "votes": [
                        { "voteKey": 1, "user": "Harold", "voteType": "", "reason": "" },
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
                        { "voteKey": 6, "user": "Harold", "voteType": "", "reason": "" },
                        { "voteKey": 7, "user": "Bob", "voteType": "reject", "reason": "does not exist" },
                        { "voteKey": 8, "user": "Joanna", "voteType": "approve", "reason": "" },
                        { "voteKey": 9, "user": "Rick", "voteType": "approve", "reason": "" },
                        { "voteKey": 10, "user": "Andy", "voteType": "reject", "reason": "invalid part number" }
                    ]
                },
                {
                    "changeOrderKey": 2,
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
                }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map