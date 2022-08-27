import { RecordModel } from "src/app/shared/models/record/record.model";

export class CertificationsRecordModel extends RecordModel {

    public override getStartToEnd(): string {
        const end = this.getEndDate();       
        const endDateString = end?.getMonth() ? `${end.getMonthName().substring(0, 3)} ${end.getYear()}` : 'atual';

        return `${endDateString}`.toLocaleLowerCase();
    }
}
