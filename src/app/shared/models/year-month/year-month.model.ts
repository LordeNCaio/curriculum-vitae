import { Month } from "../../enums/month.enum";

export class YearMonthModel {

    private year: number;
    private month: Month;

    public constructor(year?: number, month?: Month) {
        this.year = year;
        this.month = month;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number) {
        this.setYear(year);
    }

    public getMonth(): Month {
        return this.month;
    }

    public getMonthName(): string {
        return Object.keys(Month)[Object.values(Month).indexOf(this.month)];
    }

    public setMonth(month: Month) {
        this.month = month;
    }

}
