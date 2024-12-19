import { EventBus } from '../utils/EventBus'

declare module 'vue' {
  interface ComponentCustomProperties {
    $bus: EventBus
  }
} 