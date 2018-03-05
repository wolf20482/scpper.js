import { ApiOptions } from './ApiOptions'
import { SiteInitial } from './SiteInitial'

export interface FindUsersOptions extends ApiOptions {}
export interface FindPagesOptions extends ApiOptions {
  random?: boolean
}
export interface FindWithTag extends ApiOptions {
  method?: 'and' | 'or'
  random?: boolean
  site?: keyof typeof SiteInitial
}
