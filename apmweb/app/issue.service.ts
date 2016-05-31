import { Injectable } from '@angular/core';

import { ISSUES } from './mock-issues';


@Injectable()
export class IssueService{
    getIssues() {
        //return Promise.resolve(ISSUES);
        return ISSUES;
    }
}

