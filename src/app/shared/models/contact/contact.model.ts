import { IconName } from "@fortawesome/fontawesome-svg-core";

export class ContactModel {

    private name: IconName;
    private content: String;

    public getName(): IconName {
        return this.name;
    }

    public getContent(): String {
        return this.content;
    }
}
