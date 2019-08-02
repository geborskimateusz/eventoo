export interface UserDetails {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: {
        country: string;
        city: string;
        street: string;
        homeNo: string;
        postalCode: string;
    }
}