import { IconName } from "@fortawesome/fontawesome-svg-core";

export class ContactModel {

    private name: IconName;
    private content: string;

    constructor(name: IconName, content: string) {
        this.name = name;
        this.content = content;
    }

    public getName(): IconName {
        return this.name;
    }

    public getContent(): string {
        return this.content;
    }
}
