import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "experiment"
declare module "C:/Users/Jaime/Desktop/packages-libraries/tres-group/playground/node_modules/.pnpm/nuxt@3.3.2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}