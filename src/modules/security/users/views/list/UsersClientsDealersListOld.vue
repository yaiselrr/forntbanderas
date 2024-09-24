<script setup lang="ts">
import Dealers from '~m/security/dealers/entities/dealers.model'
import Users from '~m/security/users/entities/users.model'
import Clients from '~m/manage/client/entities/client.model'
import RTable from '~co/components/table/src/RTable.vue'
import DotsScaleRotate from '~co/components/spinners/loaders/DotsScaleRotate.vue'
import {
  exportToCSV,
  exportToExcelVinstance,
  filter_object_column,
  openNotificationWithIcon
} from '~h/utils/utils'
import { ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { createVNode } from 'vue-demi'
import ConfirmModal from '~co/components/modals/delete/ConfirmModal.vue'
import { RButton } from '~co/components/buttons'
import DealersForm from '~m/security/dealers/views/form/DealersForm.vue'
import UsersForm from '~m/security/dealers/views/form/UsersForm.vue'
import ClientsForm from '~m/security/dealers/views/form/ClientsForm.vue'

const activeKey = ref('1')

const searchDealers = ref()
const dataDealers = ref([])
const dealersTbl = ref<HTMLDivElement | null>(null)
const columnsDealers = Dealers.visible_columns
const filterDealers = computed!(() => {
  return dataDealers.value.filter((e) =>
    filter_object_column(e, searchDealers.value, columnsDealers)
  )
})

const searchUsers = ref()
const dataUsers = ref([])
const usersTbl = ref<HTMLDivElement | null>(null)
const columnsUsers = Users.visible_columns
const filterUsers = computed!(() => {
  return dataUsers.value.filter((e) => filter_object_column(e, searchUsers.value, columnsUsers))
})

const searchClients = ref()
const dataClients = ref([])
const clientsTbl = ref<HTMLDivElement | null>(null)
const columnsClients = Clients.visible_columns
const filterClients = computed!(() => {
  return dataClients.value.filter((e) =>
    filter_object_column(e, searchClients.value, columnsClients)
  )
})

const {
  loading: loadingDealers,
  result: resultDealers,
  onError: onErrorDealers,
  onResult: onResultDealers,
  refetch: refetchDealersList
} = Dealers.useGetMany({ relations: 'all' })

const {
  loading: loadingUsers,
  result: resultUsers,
  onError: onErrorUsers,
  onResult: onResultUsers,
  refetch: refetchUsersList
} = Users.useGetMany({ relations: 'all' })

const {
  loading: loadingClients,
  result: resultClients,
  onError: onErrorClients,
  onResult: onResultClients,
  refetch: refetchClientsList
} = Clients.useGetMany({ relations: 'all' })

onResultDealers((resultDealers) => {
  dataDealers.value = resultDealers.data.data
})
onErrorDealers((e) => {
  openNotificationWithIcon('error', 'Error de peticion', 'Error de peticion del elemento')
})
onResultUsers((resultUsers) => {
  dataUsers.value = resultUsers.data.data
})
onErrorUsers((e) => {
  openNotificationWithIcon('error', 'Error de peticion', 'Error de peticion del elemento')
})
onResultClients((resultClients) => {
  dataClients.value = resultClients.data.data
})
onErrorClients((e) => {
  openNotificationWithIcon('error', 'Error de peticion', 'Error de peticion del elemento')
})
const exportCSV = () => {
  if (activeKey.value == '1') {
    exportToCSV('DealersList', columnsDealers, filterDealers.value)
  }
  if (activeKey.value == '2') {
    exportToCSV('UsersList', columnsUsers, filterUsers.value)
  }
  if (activeKey.value == '3') {
    exportToCSV('ClientsList', columnsClients, filterClients.value)
  }
}
const exportExcel = () => {
  if (activeKey.value == '1') {
    exportToExcelVinstance('DealersList', columnsDealers, filterDealers.value)
  }
  if (activeKey.value == '2') {
    exportToExcelVinstance('UsersList', columnsUsers, filterUsers.value)
  }
  if (activeKey.value == '3') {
    exportToExcelVinstance('ClientsList', columnsClients, filterClients.value)
  }
}

const confirmDelete = (record) => {
  loadingUsers.value = true
  const {onResult, onError} = Users.useDelete(record.id)
  onResult(() => {
    openNotificationWithIcon('success', "Acción Exitosa", "Se ha eliminado el elemento correctamente")
    loadingUsers.value = false
    refetchUsersList()
  })
  onError(() => {
    openNotificationWithIcon('error', "Acción Fallida", "Ocurrió un error en la eliminación del elemento, puede estar asociado a otros elementos")
    loadingUsers.value = false
  })
}

const selected = ref(null)

const createElmenent = () => {
  selected.value = null
  showModal()
}
const openModal = ref(false)
const showModal = (refresh = false) => {
  openModal.value = !openModal.value
  if (refresh) {
    Modal.destroyAll()
    refetchDealersList()
  }
}
const updateElement = (record) => {
  selected.value = record
  showModal()
}
const closeModal = (refresh = false) => {
  selected.value = null
  showModal(refresh)
}

const deleteArrayDealers = reactive([])
const deleteArrayUsers = reactive([])
const deleteArrayClients = reactive([])

const {
  onError: onErrorDeleteDealers,
  onResult: onResultDeleteDealers,
  toggleEnabled: toggleEnabledDeleteDealers,
  loading: loadingDeleteDealers,
  enabled: enabledDeleteDealers
} = Dealers.useDeleteById(deleteArrayDealers, { defaultEnabled: false })

const {
  onError: onErrorDeleteUsers,
  onResult: onResultDeleteUsers,
  toggleEnabled: toggleEnabledDeleteUsers,
  loading: loadingDeleteUsers,
  enabled: enabledDeleteUsers
} = Users.useDeleteById(deleteArrayUsers, { defaultEnabled: false })

const {
  onError: onErrorDeleteClients,
  onResult: onResultDeleteClients,
  toggleEnabled: toggleEnabledDeleteClients,
  loading: loadingDeleteClients,
  enabled: enabledDeleteClients
} = Clients.useDeleteById(deleteArrayClients, { defaultEnabled: false })

onResultDeleteDealers(() => {
  refetchDealersList()
  dealersTbl?.value?.clearSelection()
  openNotificationWithIcon(
    'success',
    'Acción Exitosa',
    'Se han eliminado los elementos correctamente'
  )
  enabledDeleteDealers.value = false
  Modal.destroyAll()
})

onResultDeleteUsers(() => {
  refetchUsersList()
  usersTbl?.value?.clearSelection()
  openNotificationWithIcon(
    'success',
    'Acción Exitosa',
    'Se han eliminado los elementos correctamente'
  )
  enabledDeleteUsers.value = false
  Modal.destroyAll()
})

onResultDeleteClients(() => {
  refetchClientsList()
  clientsTbl?.value?.clearSelection()
  openNotificationWithIcon(
    'success',
    'Acción Exitosa',
    'Se han eliminado los elementos correctamente'
  )
  enabledDeleteClients.value = false
  Modal.destroyAll()
})
const deleteElements = () => {
  Modal.confirm({
    title: createVNode(ConfirmModal, {
      text: "¿Desea eliminar el/los elementos seleccionados?",
      iconClass: "i-heroicons:trash w-1em h-1em text-4xl color-red-500",
      textClass: "ml-5 text-xl",
      loading:loadingDeleteUsers,
      onOk: () => {
        Object.assign(deleteArrayUsers, usersTbl?.value?.selectedRowKeys)
        toggleEnabledDeleteUsers()
      }
    },),
    icon: null,
    footer: null,
  })
}
</script>
<template>
  <a-modal
    v-model:open="openModal"
    :footer="null"
    :destroy-on-close="true"
    @cancel="selected = null"
    wrap-class-name="modal-form"
    width="55%"
  >
    <template #closeIcon>
      <div class="r-close-icon hoverable-close" />
    </template>
    <template #title>
      <div class="flex">
        <div
          :class="selected ? 'i-heroicons:pencil-square' : 'i-heroicons:plus-20-solid'"
          class="w-1em h-1em p-3.5 mr-2"
        ></div>
        <h1>{{ selected ? 'Actualizar Dealers' : 'Crear Dealers' }}</h1>
      </div>
    </template>
    <dealers-form
      :modal="true"
      v-model="selected"
      :action="selected ? 'update' : 'create'"
      @closeModal="closeModal"
      @reload="refetchDealersList"
      :show-loading="true"
    >
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </dealers-form>
  </a-modal>

  <div class="r-breadcumbs">
    <a-breadcrumb class="h-full">
      <a-breadcrumb-item>
        <router-link :to="{ name: 'index' }">
          <div class="flex justify-center items-center">
            <div class="i-heroicons:home w-1em h-1em mr-1"></div>
            <p>Inicio</p>
          </div>
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Seguridad</a-breadcrumb-item>
      <a-breadcrumb-item>Dealers</a-breadcrumb-item>
    </a-breadcrumb>
    <div>
      <h1 class="mt-5">Dealers</h1>
    </div>
  </div>
  <div class="r-container-list">
    <div class="relative card w-full float-right">
      <div class="">
        <div class="components-input-demo-presuffix mt-3 flex">
          <RButton
            shadow
            ref="btnDelete"
            class="btn-delete"
            :disabled="usersTbl?.selectedRowKeys.length === 0"
            @click="deleteElements"
            v-if="activeKey == '2'"
          >
            <span class="i-heroicons:trash-16-solid text-md mr-1 mb-1"></span>
            Eliminar
          </RButton>
          <RButton class="mr-3" shadow @click="createElmenent">
            <span class="i-heroicons:plus-16-solid text-lg mr-1 mb-1"></span>
            Crear Dealers
          </RButton>
          <div class="w-50% mr-20">
            <span class="float-right align-middle"
              >Elementos seleccionados {{ dealersTbl?.selectedRowKeys.length }}/{{
                filterDealers.length
              }}</span
            >
          </div>
          <div class="justify-start w-20%" v-if="activeKey == '1'">
            <a-input
              v-model:value="searchDealers"
              class="col-1"
              placeholder="Buscar elemento 1"
              :allow-clear="true"
            >
              <template #prefix>
                <div class="i-mdi:search w-1em h-1em text-2xl"></div>
              </template>
            </a-input>
          </div>
          <div class="justify-start w-20%" v-if="activeKey == '2'">
            <a-input
              v-model:value="searchUsers"
              class="col-1"
              placeholder="Buscar elemento 2"
              :allow-clear="true"
            >
              <template #prefix>
                <div class="i-mdi:search w-1em h-1em text-2xl"></div>
              </template>
            </a-input>
          </div>
          <div class="justify-start w-20%" v-if="activeKey == '3'">
            <a-input
              v-model:value="searchClients"
              class="col-1"
              placeholder="Buscar elemento 3"
              :allow-clear="true"
            >
              <template #prefix>
                <div class="i-mdi:search w-1em h-1em text-2xl"></div>
              </template>
            </a-input>
          </div>
          <div class="flex justify-end w-20%">
            <a-dropdown-button class="flex">
              <div class="flex">
                <div class="i-mdi:export-variant w-1em h-1em text-xl mr-1"></div>
                Exportar
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1" @click="exportCSV">
                    <span class="flex">
                      <div
                        class="i-mdi:file-csv-outline w-1em h-1em text-gray-900 mr-2 text-xl"
                      ></div>
                      CSV
                    </span>
                  </a-menu-item>
                  <a-menu-item key="2" @click="exportExcel">
                    <span class="flex">
                      <div
                        class="i-mdi:microsoft-excel w-1em h-1em text-green-700 mr-2 text-xl"
                      ></div>
                      EXCEL
                    </span>
                  </a-menu-item>
                  <a-menu-item key="3">
                    <span class="flex">
                      <div class="i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"></div>
                      PDF
                    </span>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown-button>
          </div>
        </div>
      </div>

      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Distribuidores">
          <RTable
            ref="dealersTbl"
            :columns="columnsDealers"
            :data="filterDealers"
            :loading_icon="loadingDealers"
            :has_selection="true"
            :on_select="(rec) => {}"
            @change-pagination="
              (e) => {
                refetchDealersList()
              }
            "
            :id_element="'id'"
            class="mt-5"
          >
            <template v-slot:loading_icon>
              <DotsScaleRotate />
            </template>
            <template v-slot:_action="{ _, record }">
              <div class="flex justify-center align-center">
                <div class="text-xl flex justify-center align-center">
                  <a-tooltip>
                    <template #title>Actualizar elemento</template>
                    <div
                      class="i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer"
                      @click="updateElement(record)"
                    ></div>
                  </a-tooltip>
                  <a-popconfirm
                    title="Desea eliminar este elemento?"
                    ok-text="Si"
                    cancel-text="No"
                    @confirm="confirmDelete(record)"
                  >
                    <template #icon>
                      <div
                        class="i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"
                      ></div>
                    </template>
                    <a-tooltip>
                      <template #title>Eliminar elemento</template>
                      <div class="i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"></div>
                    </a-tooltip>
                  </a-popconfirm>
                </div>
              </div>
            </template>
          </RTable>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Usuarios" force-render>
          <RTable
            ref="dealersTbl"
            :columns="columnsUsers"
            :data="filterUsers"
            :loading_icon="loadingUsers"
            :has_selection="true"
            :on_select="(rec) => {}"
            @change-pagination="
              (e) => {
                refetchUsersList()
              }
            "
            :id_element="'id'"
            class="mt-5"
          >
            <template v-slot:loading_icon>
              <DotsScaleRotate />
            </template>
            <template v-slot:_action="{ _, record }">
              <div class="flex justify-center align-center">
                <div class="text-xl flex justify-center align-center">
                  <a-tooltip>
                    <template #title>Actualizar elemento</template>
                    <div
                      class="i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer"
                      @click="updateElement(record)"
                    ></div>
                  </a-tooltip>
                  <a-popconfirm
                    title="Desea eliminar este elemento?"
                    ok-text="Si"
                    cancel-text="No"
                    @confirm="confirmDelete(record)"
                  >
                    <template #icon>
                      <div
                        class="i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"
                      ></div>
                    </template>
                    <a-tooltip>
                      <template #title>Eliminar elemento</template>
                      <div class="i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"></div>
                    </a-tooltip>
                  </a-popconfirm>
                </div>
              </div>
            </template>
          </RTable>
        </a-tab-pane>
        <a-tab-pane key="3" tab="Clientes">
          <RTable
            ref="dealersTbl"
            :columns="columnsClients"
            :data="filterClients"
            :loading_icon="loadingClients"
            :has_selection="true"
            :on_select="(rec) => {}"
            @change-pagination="
              (e) => {
                refetchClientsList()
              }
            "
            :id_element="'id'"
            class="mt-5"
          >
            <template v-slot:loading_icon>
              <DotsScaleRotate />
            </template>
            <template v-slot:_action="{ _, record }">
              <div class="flex justify-center align-center">
                <div class="text-xl flex justify-center align-center">
                  <a-tooltip>
                    <template #title>Actualizar elemento</template>
                    <div
                      class="i-heroicons:pencil-square w-1em h-1em text-blue-600 cursor-pointer"
                      @click="updateElement(record)"
                    ></div>
                  </a-tooltip>
                  <a-popconfirm
                    title="Desea eliminar este elemento?"
                    ok-text="Si"
                    cancel-text="No"
                    @confirm="confirmDelete(record)"
                  >
                    <template #icon>
                      <div
                        class="i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"
                      ></div>
                    </template>
                    <a-tooltip>
                      <template #title>Eliminar elemento</template>
                      <div class="i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"></div>
                    </a-tooltip>
                  </a-popconfirm>
                </div>
              </div>
            </template>
          </RTable>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
