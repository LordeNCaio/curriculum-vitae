import { RecordModel } from "src/app/shared/models/record/record.model";

export class ExperienceRecordModel extends RecordModel {
    
    public override getStartToEnd(): string {
        const start = this.getStartDate();
        const end = this.getEndDate();

        const startDateString = `${start.getMonthName().substring(0, 3)} ${start.getYear()}`;
        const endDateString = end.getMonth() ? `${end.getMonthName().substring(0, 3)} ${end.getYear()}` : 'atual';

        return `${startDateString} - ${endDateString}`.toLocaleLowerCase();
    }
}
