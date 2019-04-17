import { Injectable } from '@angular/core'

import { StorageService } from '../../../core/services/storage.service'
import { StorageKeys } from '../../../shared/enums/storage'
import { AuthService } from '../../auth/services/auth.service'

@Injectable()
export class SplashService {
  constructor(public storage: StorageService, private auth: AuthService) {}

  evalEnrolment() {
    return this.storage
      .get(StorageKeys.PARTICIPANTLOGIN)
      .then(participant =>
        participant
          ? this.auth.isRefreshTokenExpired().then(expired => !expired)
          : false
      )
  }
}
