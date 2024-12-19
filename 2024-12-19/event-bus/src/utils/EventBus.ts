class EventBus {
    private events: Record<string, Set< (...args: any[]) => void>> = {}
    private static instance: EventBus
    static instanced() {
        return this.instance ??= new EventBus()
    }
    on(eventName: string, cd: (...args: any[]) => void) {
        // if(!this.events[eventName]) {
        //     this.events[eventName] = new Set()
        // }
        // this.events[eventName].add(cd)
        (this.events[eventName] ??= new Set()).add(cd)
    }
    emit(eventName: string, ...args: any[]) {
        this.events[eventName].forEach(cd => cd(...args))
    }
    off() {

    }
}

export default EventBus