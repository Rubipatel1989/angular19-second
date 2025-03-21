export interface ILoan {
    applicationId: number;
    fullName: string;
    applicationStatus: string;
    panCard: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    annualIncome: number;
    employmentStatus: string;
    creditScore: number;
    assets: number;
    dateApplied: string;
    customerId: number;
    loans: ILoan[];
}

export interface IAPIResponse {
    message: string;
    result: boolean;
    data: any;
}