export class DataState {
    constructor(
        private item: string,
        private isHidden: boolean = false
    ) {
    }

    getItem(): string {
        return this.item
    }

    getIsHidden(): boolean {
        return this.isHidden
    }

    updateHidden(newHiddenState: boolean): void {
        this.isHidden = newHiddenState
    }
}
