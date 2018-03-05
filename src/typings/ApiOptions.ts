import { SiteInitial } from './SiteInitial'

export interface ApiOptions {
  limit?: number
  site?: keyof typeof SiteInitial | false
}
