import { ComponentCustomProperties } from "@vue/runtime-core";
import EventBus from "./utils/EventBus";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $bus: EventBus; // 这里填类型
    }
}
// 必须导出，才能在其他文件中使用
export default ComponentCustomProperties;
