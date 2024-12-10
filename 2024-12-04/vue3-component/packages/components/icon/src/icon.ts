import { ExtractPropTypes, PropType } from 'vue'
// 使用vue里面的一个类型 抽离我们定义的一个类型
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>
} as const;
export type IconProps = ExtractPropTypes<typeof iconProps>
