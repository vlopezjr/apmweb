export class Vote {
    voteKey: number;
    user: string;
    voteType: string;
    reason: string;
}

export class Issue {
    changeOrderKey: number;
    partNumber: string;
    description: string;
    pageNumber: string;
    changeType: string;
    originator: string;
    votes: Vote[];
}
