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
export interface IUser {
    userId: number;
    userName: string;
    emailId: string;
    fullName: string;
    role: string;
    createdDate: string;
    password: string;
    projectName: string;
    refreshToken: any
    refreshTokenExpiryTime: any
}

export interface IApplicationList {
    applicantID: number;
    dateApplied: string;
    applicationStatus: string;
    fullName: string;
    email: string;
    employmentStatus: string;
    customerPhone: string;
    assignedToBankEmployee: string;
}