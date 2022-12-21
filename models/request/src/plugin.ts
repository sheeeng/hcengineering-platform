//
// Copyright © 2022 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { Ref } from '@hcengineering/core'
import type { IntlString } from '@hcengineering/platform'
import { mergeIds } from '@hcengineering/platform'
import { requestId } from '@hcengineering/request'
import request from '@hcengineering/request-resources/src/plugin'
import { AnyComponent } from '@hcengineering/ui'
import type { TxViewlet } from '@hcengineering/activity'

export default mergeIds(requestId, request, {
  activity: {
    TxCreateRequest: '' as AnyComponent
  },
  ids: {
    TxRequestCreate: '' as Ref<TxViewlet>
  },
  string: {
    Request: '' as IntlString,
    Status: '' as IntlString,
    Approved: '' as IntlString,
    Requested: '' as IntlString
  }
})
