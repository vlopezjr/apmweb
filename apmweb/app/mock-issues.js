System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ISSUES;
    return {
        setters:[],
        execute: function() {
            exports_1("ISSUES", ISSUES = [
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
            ]);
        }
    }
});
//# sourceMappingURL=mock-issues.js.map