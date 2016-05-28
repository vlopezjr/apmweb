System.register(['@angular/core', '../app/Issue'], function(exports_1, context_1) {
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
    var core_1, Issue_1;
    var IssueDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Issue_1_1) {
                Issue_1 = Issue_1_1;
            }],
        execute: function() {
            IssueDetailComponent = (function () {
                function IssueDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Issue_1.Issue)
                ], IssueDetailComponent.prototype, "issue", void 0);
                IssueDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'issue-detail',
                        template: "\n          <div *ngIf=\"!alreadyVoted && !finished\">\n                <div class=\"row\">\n                    <div class=\"col-md-3\"><span style=\"font-weight: bold;\" (click)=\"approve()\">APPROVE <span class=\"glyphicon glyphicon-ok\" style=\"color: green;\"></span></span></div>\n                    <div class=\"col-md-3\"><span style=\"font-weight: bold;\" (click)=\"showReasonInput()\">REJECT <span class=\"glyphicon glyphicon-remove\" style=\"color: red;\"></span></span></div>\n                    <div class=\"col-md-3\"><span style=\"font-weight: bold;\">SKIP <span class=\"glyphicon glyphicon-step-forward\" style=\"color: blue;\" (click)=\"skip()\"></span></span></div>\n                </div>\n\n                <div class=\"bg-danger\" *ngIf=\"showReasonInputBox\" style=\"line-height: 75px; padding-left: 10px;\">\n                    <form class=\"form-inline\" role=\"form\">\n                        <div class=\"form-group\">\n                            <label for=\"reason\">Reason:</label>\n                            <input type=\"text\" class=\"form-control\" style=\"width: 400px;\" id=\"reason\" placeholder=\"Reason\">\n                        </div>\n\n                        <button class=\"btn btn-default\">Submit</button>\n                        <button class=\"btn btn-default\" (click)=\"cancelReasonInput()\">Cancel</button>\n                    </form>\n                </div>\n            </div>\n            <p>&nbsp;</p>\n            <table class=\"table\">\n                <tr><th style=\"width: 20%\">User</th><th style=\"width: 20%\">Vote</th><th>Reason</th></tr>\n                <tr *ngFor=\"let vote of issue.votes\">\n                    <td>{{vote.user}}</td>\n                    <td>\n                        <span class=\"glyphicon glyphicon-ok\" style=\"color: green;\" *ngIf=\"vote.voteType==='approve'\"></span>\n                        <span class=\"glyphicon glyphicon-remove\" style=\"color: red;\" *ngIf=\"vote.voteType==='reject'\"></span>\n                    </td>\n                    <td>{{vote.reason}}</td>\n                </tr>\n            </table>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], IssueDetailComponent);
                return IssueDetailComponent;
            }());
            exports_1("IssueDetailComponent", IssueDetailComponent);
        }
    }
});
//# sourceMappingURL=issue-detail.component.js.map