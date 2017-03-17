/**
 * Created by Anushavan on 3/17/17.
 */

export class DishType {
    
    private id: number;
    private name: string;
    
    public constructor() { }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
    
}