<script setup lang="ts">
import Dealers from '~m/security/dealers/entities/dealers.model'
import Users from '~m/security/users/entities/users.model'
import Client from '~m/manage/client/entities/client.model'
import RTable from '~co/components/table/src/RTable.vue'
import DotsScaleRotate from '~co/components/spinners/loaders/DotsScaleRotate.vue'
import {
  exportToCSV,
  exportToExcelVinstance,
  filter_object_column,
  openNotificationWithIcon
} from '~h/utils/utils'
import { Modal } from 'ant-design-vue'
import { createVNode } from 'vue-demi'
import ConfirmModal from '~co/components/modals/delete/ConfirmModal.vue'
import { RButton } from '~co/components/buttons'
import UsersForm from '~m/security/users/views/form/UsersForm.vue'
import ClientForm from '~m/manage/client/views/form/ClientForm.vue'
import DealersForm from '~m/security/dealers/views/form/DealersForm.vue'
import UsersFormPasswordChange from '~m/security/users/views/form/UsersFormPasswordChange.vue'
import Breadcrump from '~co/components/breadcrump/breadcrump.vue'
import { RAvatar } from '@/core/components/avatar'
import { siteStore } from '~cf/store/site.store'
import { ref } from 'vue'

const site = siteStore()
const names = site.user.array_permission.map((item) => item.name)
const roleUser = site.user.array_role[0].name

const search = ref()
const searchClient = ref()
const searchDealers = ref()
const data = ref([])
const dataClient = ref([])
const dataDealers = ref([])
const usersTbl = ref<HTMLDivElement | null>(null)
const clientTbl = ref<HTMLDivElement | null>(null)
const dealersTbl = ref<HTMLDivElement | null>(null)
const selected = ref(null)
const selectedClient = ref(null)
const selectedDealers = ref(null)
const selectedPasswordChange = ref(null)
const passwordChange = ref(false)
const columns = Users.visible_columns
const columnsClient = Client.visible_columns
const columnsDealers = Dealers.visible_columns
const site = siteStore()
const filter = computed!(() => {
  if (activeKey.value == '1') {
    return data.value.filter((e) => filter_object_column(e, search.value, columns))
  }
  if (activeKey.value == '2') {
    return dataClient.value.filter((e) =>
      filter_object_column(e, searchClient.value, columnsClient)
    )
  }
  return dataDealers.value.filter((e) =>
    filter_object_column(e, searchDealers.value, columnsDealers)
  )
})

const {
  loading,
  result,
  onError,
  onResult,
  refetch: refetchUsersList
} = Users.useGetMany({ relations: 'all' })
const {
  loading: loadingClient,
  result: resultClient,
  onError: onErrorClient,
  onResult: onResultClient,
  refetch: refetchClientList
} = Client.useGetMany({ relations: 'all' })
const {
  loading: loadingDealers,
  result: resultDealers,
  onError: onErrorDealers,
  onResult: onResultDealers,
  refetch: refetchDealersList
} = Dealers.useGetMany({ relations: 'all' })

const arrayBreadcrumb = reactive([
  {
    title: 'Seguridad',
    disabled: false,
    href: '/guarantee'
  },
  {
    title: 'Usuarios',
    disabled: true
  }
])

const deleteArray = reactive([])
const deleteArrayClient = reactive([])
const deleteArrayDealers = reactive([])
const {
  onError: onErrorDelete,
  onResult: onResultDelete,
  toggleEnabled: toggleEnabledDelete,
  loading: loadingDelete,
  enabled: enabledDelete
} = Users.useDeleteById(deleteArray, { defaultEnabled: false })
const {
  onError: onErrorDeleteClient,
  onResult: onResultDeleteClient,
  toggleEnabled: toggleEnabledDeleteClient,
  loading: loadingDeleteClient,
  enabled: enabledDeleteClient
} = Client.useDeleteById(deleteArrayClient, { defaultEnabled: false })
const {
  onError: onErrorDeleteDealers,
  onResult: onResultDeleteDealers,
  toggleEnabled: toggleEnabledDeleteDealers,
  loading: loadingDeleteDealers,
  enabled: enabledDeleteDealers
} = Dealers.useDeleteById(deleteArrayDealers, { defaultEnabled: false })

onResult((result) => {
  data.value = result.data.data
})
onResultClient((result) => {
  dataClient.value = result.data.data
})
onResultDealers((result) => {
  dataDealers.value = result.data.data
})

onError((e) => {
  openNotificationWithIcon('error', 'Error de peticion', 'Error de peticion del elemento')
})
onErrorClient((e) => {
  openNotificationWithIcon('error', 'Error de peticion', 'Error de peticion del elemento')
})
onErrorDealers((e) => {
  openNotificationWithIcon('error', 'Error de peticion', 'Error de peticion del elemento')
})

const openModal = ref(false)
const openModalClient = ref(false)
const openModalDealers = ref(false)
const openModalPasswordChange = ref(false)
const showModal = (refresh = false) => {
  openModal.value = !openModal.value
  if (refresh) {
    Modal.destroyAll()
    refetchUsersList()
  }
}
const showModalClient = (refresh = false) => {
  openModalClient.value = !openModalClient.value
  if (refresh) {
    Modal.destroyAll()
    refetchClientList()
  }
}
const showModalDealers = (refresh = false) => {
  openModalDealers.value = !openModalDealers.value
  if (refresh) {
    Modal.destroyAll()
    refetchDealersList()
  }
}
const showModalPasswordChange = (refresh = false) => {
  openModalPasswordChange.value = !openModalPasswordChange.value
  if (refresh) {
    Modal.destroyAll()
    refetchUsersList()
  }
}
const updateElement = (record) => {
  if (activeKey.value == '1') {
    selected.value = record
    showModal()
  }
  if (activeKey.value == '2') {
    selectedClient.value = record
    showModalClient()
  }
  if (activeKey.value == '3') {
    selectedDealers.value = record
    showModalDealers()
  }
}
const updateElementPasswordChange = (record) => {
  selected.value = record
  showModalPasswordChange()
}
const createElmenent = () => {
  if (activeKey.value == '1') {
    selected.value = null
    showModal()
  }
  if (activeKey.value == '2') {
    selectedClient.value = null
    showModalClient()
  }
  if (activeKey.value == '3') {
    selectedDealers.value = null
    showModalDealers()
  }
}
const closeModal = (refresh = false) => {
  if (activeKey.value == '1') {
    selected.value = null
    showModal(refresh)
  }
  if (activeKey.value == '2') {
    selectedClient.value = null
    showModalClient(refresh)
  }
  if (activeKey.value == '3') {
    selectedDealers.value = null
    showModalDealers(refresh)
  }
}
const closeModalPasswordChange = (refresh = false) => {
  selected.value = null
  showModalPasswordChange(refresh)
}
onResultDelete(() => {
  refetchUsersList()
  usersTbl?.value?.clearSelection()
  openNotificationWithIcon(
    'success',
    'Acción Exitosa',
    'Se han eliminado los elementos correctamente'
  )
  enabledDelete.value = false
  Modal.destroyAll()
})
onResultDeleteClient(() => {
  refetchClientList()
  clientTbl?.value?.clearSelection()
  openNotificationWithIcon(
    'success',
    'Acción Exitosa',
    'Se han eliminado los elementos correctamente'
  )
  enabledDeleteClient.value = false
  Modal.destroyAll()
})
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
const deleteElements = () => {
  if (activeKey.value == '1') {
    Modal.confirm({
      title: createVNode(ConfirmModal, {
        text: '¿Desea eliminar el/los elementos seleccionados?',
        iconClass: 'i-heroicons:trash w-1em h-1em text-4xl color-red-500',
        textClass: 'ml-5 text-xl',
        loading: loadingDelete,
        onOk: () => {
          Object.assign(deleteArray, usersTbl?.value?.selectedRowKeys)
          toggleEnabledDelete()
        }
      }),
      icon: null,
      footer: null
    })
  }
  if (activeKey.value == '2') {
    Modal.confirm({
      title: createVNode(ConfirmModal, {
        text: '¿Desea eliminar el/los elementos seleccionados?',
        iconClass: 'i-heroicons:trash w-1em h-1em text-4xl color-red-500',
        textClass: 'ml-5 text-xl',
        loading: loadingDeleteClient,
        onOk: () => {
          Object.assign(deleteArrayClient, clientTbl?.value?.selectedRowKeys)
          toggleEnabledDeleteClient()
        }
      }),
      icon: null,
      footer: null
    })
  }
  if (activeKey.value == '3') {
    Modal.confirm({
      title: createVNode(ConfirmModal, {
        text: '¿Desea eliminar el/los elementos seleccionados?',
        iconClass: 'i-heroicons:trash w-1em h-1em text-4xl color-red-500',
        textClass: 'ml-5 text-xl',
        loading: loadingDeleteDealers,
        onOk: () => {
          Object.assign(deleteArrayDealers, dealersTbl?.value?.selectedRowKeys)
          toggleEnabledDeleteDealers()
        }
      }),
      icon: null,
      footer: null
    })
  }
}
const exportCSV = () => {
  if (activeKey.value == '1') {
    exportToCSV('UsersList', columns, filter.value)
  }
  if (activeKey.value == '2') {
    exportToCSV('ClientList', columnsClient, filter.value)
  }
  if (activeKey.value == '3') {
    exportToCSV('DealersList', columnsDealers, filter.value)
  }
}
const exportExcel = () => {
  if (activeKey.value == '1') {
    exportToExcelVinstance('UsersList', columns, filter.value)
  }
  if (activeKey.value == '2') {
    exportToExcelVinstance('DealersList', columnsClient, filter.value)
  }
  if (activeKey.value == '3') {
    exportToExcelVinstance('ClientList', columnsDealers, filter.value)
  }
}
const confirmDelete = (record) => {
  if (activeKey.value == '1') {
    loading.value = true
    const { onResult, onError } = Users.useDelete(record.id)
    onResult(() => {
      openNotificationWithIcon(
        'success',
        'Acción Exitosa',
        'Se ha eliminado el elemento correctamente'
      )
      loading.value = false
      refetchUsersList()
    })
    onError(() => {
      openNotificationWithIcon(
        'error',
        'Acción Fallida',
        'Ocurrió un error en la eliminación del elemento, puede estar asociado a otros elementos'
      )
      loading.value = false
    })
  }
  if (activeKey.value == '2') {
    loadingClient.value = true
    const { onResultClient, onErrorClient } = Client.useDelete(record.id)
    onResultClient(() => {
      openNotificationWithIcon(
        'success',
        'Acción Exitosa',
        'Se ha eliminado el elemento correctamente'
      )
      loadingClient.value = false
      refetchUsersList()
    })
    onErrorClient(() => {
      openNotificationWithIcon(
        'error',
        'Acción Fallida',
        'Ocurrió un error en la eliminación del elemento, puede estar asociado a otros elementos'
      )
      loadingClient.value = false
    })
  }
  if (activeKey.value == '3') {
    loadingDealers.value = true
    const { onResultDealers, onErrorDealers } = Dealers.useDelete(record.id)
    onResultDealers(() => {
      openNotificationWithIcon(
        'success',
        'Acción Exitosa',
        'Se ha eliminado el elemento correctamente'
      )
      loadingDealers.value = false
      refetchUsersList()
    })
    onErrorDealers(() => {
      openNotificationWithIcon(
        'error',
        'Acción Fallida',
        'Ocurrió un error en la eliminación del elemento, puede estar asociado a otros elementos'
      )
      loadingDealers.value = false
    })
  }
}

const activeKey = ref('1')
const findString = (permission) => {
  return names.filter((element) => {
    return element.includes(permission)
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
        <h1 v-if="passwordChange">Cambiar Password</h1>
        <h1 v-else>{{ selected ? 'Actualizar Usuarios' : 'Crear Usuarios' }}</h1>
      </div>
    </template>
    <users-form
      :modal="true"
      v-model="selected"
      :action="selected ? 'update' : 'create'"
      @closeModal="closeModal"
      @reload="refetchUsersList"
      :show-loading="true"
      :passwordChange="passwordChange"
    >
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </users-form>
  </a-modal>
  <a-modal
    v-model:open="openModalPasswordChange"
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
        <h1>Cambiar Contraseña</h1>
      </div>
    </template>
    <users-form-password-change
      :modal="true"
      v-model="selected"
      :action="'password_change'"
      @closeModal="closeModalPasswordChange"
      @reload="refetchUsersList"
      :show-loading="true"
    >
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </users-form-password-change>
  </a-modal>
  <a-modal
    v-model:open="openModalClient"
    :footer="null"
    :destroy-on-close="true"
    @cancel="selectedClient = null"
    wrap-class-name="modal-form"
    width="55%"
  >
    <template #closeIcon>
      <div class="r-close-icon hoverable-close" />
    </template>
    <template #title>
      <div class="flex">
        <div
          :class="selectedClient ? 'i-heroicons:pencil-square' : 'i-heroicons:plus-20-solid'"
          class="w-1em h-1em p-3.5 mr-2"
        ></div>
        <h1>{{ selectedClient ? 'Actualizar Client' : 'Crear Client' }}</h1>
      </div>
    </template>
    <client-form
      :modal="true"
      v-model="selectedClient"
      :action="selectedClient ? 'update' : 'create'"
      @closeModal="closeModal"
      @reload="refetchClientList"
      :show-loading="true"
    >
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </client-form>
  </a-modal>
  <a-modal
    v-model:open="openModalDealers"
    :footer="null"
    :destroy-on-close="true"
    @cancel="selectedDealers = null"
    wrap-class-name="modal-form"
    width="55%"
  >
    <template #closeIcon>
      <div class="r-close-icon hoverable-close" />
    </template>
    <template #title>
      <div class="flex">
        <div
          :class="selectedDealers ? 'i-heroicons:pencil-square' : 'i-heroicons:plus-20-solid'"
          class="w-1em h-1em p-3.5 mr-2"
        ></div>
        <h1>{{ selectedDealers ? 'Actualizar Dealers' : 'Crear Dealers' }}</h1>
      </div>
    </template>
    <dealers-form
      :modal="true"
      v-model="selectedDealers"
      :action="selectedDealers ? 'update' : 'create'"
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
    <Breadcrump :breadcrumb="arrayBreadcrumb" />
    <div>
      <h1 class="mt-5">Usuarios</h1>
    </div>
  </div>
  <div class="r-container-list">
    <div class="relative card w-full float-right">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Usuarios">
          <div class="">
            <div class="components-input-demo-presuffix mt-3 flex">
              <RButton v-if="findString('coupons.crud').length > 0"
                shadow
                ref="btnDelete"
                class="btn-delete"
                :disabled="
                  usersTbl?.selectedRowKeys.length === 0 ||
                  site.user.sub == usersTbl?.selectedRowKeys[0]
                "
                @click="deleteElements"
              >
                <span class="i-heroicons:trash-16-solid text-md mr-1 mb-1"></span>
                Eliminar
              </RButton>
              <RButton v-if="findString('coupons.crud').length > 0" class="mr-3" shadow @click="createElmenent">
                <span class="i-heroicons:plus-16-solid text-lg mr-1 mb-1"></span>
                Crear Usuarios
              </RButton>
              <div class="w-50% mr-20">
                <span class="float-right align-middle"
                  >Elementos seleccionados {{ usersTbl?.selectedRowKeys.length }}/{{
                    filter.length
                  }}</span
                >
              </div>
              <div class="justify-start w-20%">
                <a-input
                  v-model:value="search"
                  class="col-1"
                  placeholder="Buscar elemento"
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
                          <div
                            class="i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"
                          ></div>
                          PDF
                        </span>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown-button>
              </div>
            </div>
          </div>
          <RTable
            ref="usersTbl"
            :columns="columns"
            :data="filter"
            :loading_icon="loading"
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
              <div v-if="findString('coupons.crud').length > 0" class="flex justify-center align-center">
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
                    <a-tooltip v-if="record.id != site.user.sub">
                      <template #title>Eliminar elemento</template>
                      <div class="i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer"></div>
                    </a-tooltip>
                  </a-popconfirm>
                  <a-tooltip>
                    <template #title>Cambiar contraseña</template>
                    <div
                      class="i-heroicons:key w-1em h-1em text-green-600 cursor-pointer"
                      @click="updateElementPasswordChange(record)"
                    ></div>
                  </a-tooltip>
                </div>
              </div>
            </template>
          </RTable>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Clientes" force-render>
          <div class="">
            <div class="components-input-demo-presuffix mt-3 flex">
              <RButton v-if="findString('coupons.crud').length > 0"
                shadow
                ref="btnDelete"
                class="btn-delete"
                :disabled="clientTbl?.selectedRowKeys.length === 0"
                @click="deleteElements"
              >
                <span class="i-heroicons:trash-16-solid text-md mr-1 mb-1"></span>
                Eliminar
              </RButton>
              <RButton v-if="findString('coupons.crud').length > 0" class="mr-3" shadow @click="createElmenent">
                <span class="i-heroicons:plus-16-solid text-lg mr-1 mb-1"></span>
                Crear Clientes
              </RButton>
              <div class="w-50% mr-20">
                <span class="float-right align-middle"
                  >Elementos seleccionados {{ clientTbl?.selectedRowKeys.length }}/{{
                    filter.length
                  }}</span
                >
              </div>
              <div class="justify-start w-20%">
                <a-input
                  v-model:value="searchClient"
                  class="col-1"
                  placeholder="Buscar elemento"
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
                          <div
                            class="i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"
                          ></div>
                          PDF
                        </span>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown-button>
              </div>
            </div>
          </div>
          <RTable
            ref="clientTbl"
            :columns="columnsClient"
            :data="filter"
            :loading_icon="loadingClient"
            :has_selection="true"
            :on_select="(rec) => {}"
            @change-pagination="
              (e) => {
                refetchClientList()
              }
            "
            :id_element="'id'"
            class="mt-5"
          >
            <template v-slot:loading_icon>
              <DotsScaleRotate />
            </template>
            <template v-slot:_action="{ _, record }">
              <div v-if="findString('coupons.crud').length > 0" class="flex justify-center align-center">
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
        <a-tab-pane key="3" tab="Distribuidores">
          <div class="">
            <div class="components-input-demo-presuffix mt-3 flex">
              <RButton v-if="findString('coupons.crud').length > 0"
                shadow
                ref="btnDelete"
                class="btn-delete"
                :disabled="dealersTbl?.selectedRowKeys.length === 0"
                @click="deleteElements"
              >
                <span class="i-heroicons:trash-16-solid text-md mr-1 mb-1"></span>
                Eliminar
              </RButton>
              <RButton v-if="findString('coupons.crud').length > 0" class="mr-3" shadow @click="createElmenent">
                <span class="i-heroicons:plus-16-solid text-lg mr-1 mb-1"></span>
                Crear Distribuidores
              </RButton>
              <div class="w-50% mr-20">
                <span class="float-right align-middle"
                  >Elementos seleccionados {{ dealersTbl?.selectedRowKeys.length }}/{{
                    filter.length
                  }}</span
                >
              </div>
              <div class="justify-start w-20%">
                <a-input
                  v-model:value="searchDealers"
                  class="col-1"
                  placeholder="Buscar elemento"
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
                          <div
                            class="i-mdi:file-pdf-box w-1em h-1em text-red-500 mr-2 text-xl"
                          ></div>
                          PDF
                        </span>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown-button>
              </div>
            </div>
          </div>
          <RTable
            ref="dealersTbl"
            :columns="columnsDealers"
            :data="filter"
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
              <div v-if="findString('coupons.crud').length > 0" class="flex justify-center align-center">
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
