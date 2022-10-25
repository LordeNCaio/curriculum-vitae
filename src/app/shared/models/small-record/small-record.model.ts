import { getProgressBarName, ProgressBar } from "../../enums/progress-bar.enum";
import { SmallRecordType } from "../../enums/small-record-type.enum";

export class SmallRecordModel {

    private title: string;
    private content: string;
    private type: SmallRecordType;
    private progress: ProgressBar;

    constructor(
        title?: string,
        content?: string,
        type?: SmallRecordType,
        progress?: ProgressBar
    ) {
        this.title = title;
        this.content = content;
        this.type = type;

        switch (this.type) {
            case SmallRecordType.TEXT: {
                this.progress = ProgressBar.NONE;
                break;
            }
            case SmallRecordType.SQUARE_BAR: {
                this.progress = ProgressBar.LEVEL5;
                break;
            }
            case SmallRecordType.PROGRESS_BAR: {
                this.progress = progress;
                if(!content) {
                    this.content = getProgressBarName(progress);
                }
                break;
            }
        }

    }

    public getTitle(): string {
        return this.title;
    }

    public getContent(): string {
        return this.content;
    }

    public getType(): SmallRecordType {
        return this.type;
    }

    public getProgress(): ProgressBar {
        return this.progress;
    }
}
