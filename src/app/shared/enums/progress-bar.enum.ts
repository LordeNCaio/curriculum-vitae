export enum ProgressBar {
    NONE = 0,
    LEVEL1 = 20,
    LEVEL2 = 40,
    LEVEL3 = 60,
    LEVEL4 = 80,
    LEVEL5 = 100
}

export function getProgressBarName(progress: ProgressBar): string {
    switch (progress) {
        case ProgressBar.LEVEL1:
            return 'Iniciante';
        case ProgressBar.LEVEL2:
            return 'Básico';
        case ProgressBar.LEVEL3:
            return 'Intermediário';
        case ProgressBar.LEVEL4:
            return 'Avançado';
        case ProgressBar.LEVEL5:
            return 'Fluente';
        default:
            return '';
    }
}