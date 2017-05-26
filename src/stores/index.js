import remotedev from 'mobx-remotedev'
import { observable, action } from 'mobx'

@remotedev
export class BaseStore {
  @observable loading = true

  constructor(router) {
    this.router = router
  }
}
