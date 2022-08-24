import { RecordModel } from "src/app/shared/models/record/record.model";

export class CertificationsRecordModel extends RecordModel {

    public override getStartToEnd(): string {
        return 'Certificados';
    }
}
