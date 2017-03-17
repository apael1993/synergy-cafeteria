/**
 * Created by Anushavan on 3/17/17.
 */

export class Customer {

    private id: number;
    private firstName: string;
    private lastName: string;
    private company: string;

    constructor() { }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }
    
    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }
    
    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string) {
        this.lastName = lastName;
    }
    
    public getCompany(): string {
        return this.company;
    }

    public setCompany(company: string) {
        this.company = company;
    }
    
}