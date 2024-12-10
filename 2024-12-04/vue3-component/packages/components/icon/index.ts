import { withInstall } from '../../utils/with-install'
import Icon from './src/icon.vue'

export const SIcon = withInstall(Icon)
export default SIcon

declare module 'vue' {
  export interface GlobalComponents {
    SIcon: typeof SIcon
  }
}
