System.register(['@angular/core', './issue-detail.component'], function(exports_1, context_1) {
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
    var core_1, issue_detail_component_1;
    var AppComponent, ISSUES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_detail_component_1_1) {
                issue_detail_component_1 = issue_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Change Orders';
                    this.openIssues = [];
                    this.user = "Harold";
                    this.alreadyVoted = false;
                    this.showReasonInputBox = false;
                    this.skipped = 0;
                    this.remaining = 0;
                    this.finished = false;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getOpenIssues();
                    this.index = 0;
                    this.currentIssue = this.openIssues[this.index];
                    this.checkIfVoted();
                    this.remaining = this.openIssues.length;
                };
                AppComponent.prototype.onNextIssueClick = function () {
                    this.index++;
                    if (this.index === this.openIssues.length) {
                        this.finished = true;
                    }
                    this.currentIssue = this.openIssues[this.index];
                    this.checkIfVoted();
                };
                AppComponent.prototype.onPrevIssueClick = function () {
                    this.index--;
                    if (this.index === 0) {
                        this.index = this.openIssues.length - 1;
                    }
                    this.currentIssue = this.openIssues[this.index];
                    this.checkIfVoted();
                };
                AppComponent.prototype.checkIfVoted = function () {
                    this.alreadyVoted = false;
                    this.showReasonInputBox = false;
                    for (var n = 0; n < this.currentIssue.votes.length; n++) {
                        if (this.currentIssue.votes[n].user === this.user && this.currentIssue.votes[n].voteType !== "") {
                            this.alreadyVoted = true;
                        }
                    }
                };
                AppComponent.prototype.showReasonInput = function () {
                    this.showReasonInputBox = true;
                };
                AppComponent.prototype.cancelReasonInput = function () {
                    this.showReasonInputBox = false;
                    return false;
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
                AppComponent.prototype.getOpenIssues = function () {
                    for (var i = 0; i < ISSUES.length; i++) {
                        for (var j = 0; j < ISSUES[i].votes.length; j++) {
                            if (ISSUES[i].votes[j].voteType === "") {
                                this.openIssues.push(ISSUES[i]);
                                break;
                            }
                        }
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'co-issue',
                        templateUrl: '../app/app.component.html',
                        styles: ['app.component.css'],
                        directives: [issue_detail_component_1.IssueDetailComponent]
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
                    "partNumber": "172",
                    "description": "172 long description",
                    "pageNumber": "3",
                    "changeType": "delete",
                    "originator": "harold",
                    "votes": [
                        { "voteKey": 16, "user": "Harold", "voteType": "", "reason": "" },
                        { "voteKey": 17, "user": "Bob", "voteType": "approve", "reason": "" },
                        { "voteKey": 18, "user": "Joanna", "voteType": "approve", "reason": "" },
                        { "voteKey": 19, "user": "Rick", "voteType": "reject", "reason": "wrong vendor" },
                        { "voteKey": 20, "user": "Andy", "voteType": "approve", "reason": "" }
                    ]
                },
                {
                    "changeOrderKey": 5,
                    "partNumber": "173",
                    "description": "173 long description",
                    "pageNumber": "3",
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
        }
    }
});
//# sourceMappingURL=app.component.js.map