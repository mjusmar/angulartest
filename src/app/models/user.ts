export class User {
    id: number;
    name : string;
    surname : string;
    cellphone: number;
    updated_at: string;

    constructor () {
        this.id = 0
        this.name = '';
        this.surname = '';
        this.cellphone = 12345678;
        this.updated_at = '';
    }
}
