import { YearMonthModel } from "../year-month/year-month.model";

export class RecordModel {

    private title: string;
    private company: string;
    private city: string;
    private startDate: YearMonthModel;
    private endDate: YearMonthModel;
    private description: string;

    constructor(
        title?: string,
        company?: string,
        city?: string,
        startDate?: YearMonthModel,
        endDate?: YearMonthModel,
        description?: string,
    ) {
        this.title = title;
        this.company = company;
        this.city = city;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }

    public getStartToEnd(): string {
        return null;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(value: string) {
        this.title = value;
    }

    public getCompany(): string {
        return this.company;
    }

    public setCompany(value: string) {
        this.company = value;
    }

    public getCity(): string {
        return this.city;
    }
    
    public setCity(value: string) {
        this.city = value;
    }

    public getStartDate(): YearMonthModel {
        return this.startDate;
    }

    public setStartDate(value: YearMonthModel) {
        this.startDate = value;
    }

    public getEndDate(): YearMonthModel {
        return this.endDate;
    }

    public setEndDate(value: YearMonthModel) {
        this.endDate = value;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(value: string) {
        this.description = value;
    }
}
