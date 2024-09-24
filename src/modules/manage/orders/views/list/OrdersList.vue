<script setup lang="ts">
import Orders from '~m/manage/orders/entities/orders.model'
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
import OrdersForm from '~m/manage/orders/views/form/OrdersForm.vue'
import { siteStore } from '~cf/store/site.store'

const site = siteStore()
const names = site.user.array_permission.map((item) => item.name)
const roleUser = site.user.array_role[0].name

const search = ref()
const data = ref([])
const ordersTbl = ref<HTMLDivElement | null>(null)
const selected = ref(null)
const columns = Orders.visible_columns
const filter = computed!(() => {
  return data.value.filter((e) => filter_object_column(e, search.value, columns))
})

const {
  loading,
  result,
  onError,
  onResult,
  refetch: refetchOrdersList
} = Orders.useGetMany({ relations: 'all' })

const deleteArray = reactive([])
const {
  onError: onErrorDelete,
  onResult: onResultDelete,
  toggleEnabled: toggleEnabledDelete,
  loading: loadingDelete,
  enabled: enabledDelete
} = Orders.useDeleteById(deleteArray, { defaultEnabled: false })
onResult((result) => {
  data.value = result.data.data
})
onError((e) => {
  openNotificationWithIcon('error', 'Error de peticion', 'Error de peticion del elemento')
})

const openModal = ref(false)
const showModal = (refresh = false) => {
  openModal.value = !openModal.value
  if (refresh) {
    Modal.destroyAll()
    refetchOrdersList()
  }
}
const updateElement = (record) => {
  selected.value = record
  showModal()
}
const createElmenent = () => {
  selected.value = null
  showModal()
}
const closeModal = (refresh = false) => {
  selected.value = null
  showModal(refresh)
}
onResultDelete(() => {
  refetchOrdersList()
  ordersTbl?.value?.clearSelection()
  openNotificationWithIcon(
    'success',
    'Acción Exitosa',
    'Se han eliminado los elementos correctamente'
  )
  enabledDelete.value = false
  Modal.destroyAll()
})
const deleteElements = () => {
  Modal.confirm({
    title: createVNode(ConfirmModal, {
      text: '¿Desea eliminar el/los elementos seleccionados?',
      iconClass: 'i-heroicons:trash w-1em h-1em text-4xl color-red-500',
      textClass: 'ml-5 text-xl',
      loading: loadingDelete,
      onOk: () => {
        Object.assign(deleteArray, ordersTbl?.value?.selectedRowKeys)
        toggleEnabledDelete()
      }
    }),
    icon: null,
    footer: null
  })
}
const exportCSV = () => {
  exportToCSV('OrdersList', columns, filter.value)
}
const exportExcel = () => {
  exportToExcelVinstance('OrdersList', columns, filter.value)
}
const confirmDelete = (record) => {
  loading.value = true
  const { onResult, onError } = Orders.useDelete(record.id)
  onResult(() => {
    openNotificationWithIcon(
      'success',
      'Acción Exitosa',
      'Se ha eliminado el elmento correctamente'
    )
    loading.value = false
    refetchOrdersList()
  })
  onError(() => {
    openNotificationWithIcon(
      'error',
      'Acción Fallida',
      'Ocurrio un error en la eliminación del elemento, puede estar asociado a otros elementos'
    )
    loading.value = false
  })
}
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
        <h1>{{ selected ? 'Actualizar Orders' : 'Crear Orders' }}</h1>
      </div>
    </template>
    <orders-form
      :modal="true"
      v-model="selected"
      :action="selected ? 'update' : 'create'"
      @closeModal="closeModal"
      @reload="refetchOrdersList"
      :show-loading="true"
    >
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </orders-form>
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
      <a-breadcrumb-item>Administración</a-breadcrumb-item>
      <a-breadcrumb-item>Pedidos</a-breadcrumb-item>
    </a-breadcrumb>
    <div>
      <h1 class="mt-5">Pedidos</h1>
    </div>
  </div>
  <div class="r-container-list">
    <div class="relative card w-full float-right">
      <div class="">
        <div class="components-input-demo-presuffix mt-3 flex">
          <RButton
            v-if="findString('orders.crud').length > 0"
            shadow
            ref="btnDelete"
            class="btn-delete"
            :disabled="ordersTbl?.selectedRowKeys.length === 0"
            @click="deleteElements"
          >
            <span class="i-heroicons:trash-16-solid text-md mr-1 mb-1"></span>
            Eliminar
          </RButton>
          <RButton
            v-if="findString('orders.crud').length > 0"
            class="mr-3"
            shadow
            @click="createElmenent"
          >
            <span class="i-heroicons:plus-16-solid text-lg mr-1 mb-1"></span>
            Crear pedidos
          </RButton>
          <div class="w-50% mr-20">
            <span class="float-right align-middle"
              >Elementos seleccionados {{ ordersTbl?.selectedRowKeys.length }}/{{
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
      <RTable
        ref="ordersTbl"
        :columns="columns"
        :data="filter"
        :loading_icon="loading"
        :has_selection="true"
        :on_select="(rec) => {}"
        @change-pagination="
          (e) => {
            refetchOrdersList()
          }
        "
        :id_element="'id'"
        class="mt-5"
      >
        <template v-slot:loading_icon>
          <DotsScaleRotate />
        </template>
        <template v-slot:_action="{ _, record }">
          <div v-if="findString('orders.crud').length > 0" class="flex justify-center align-center">
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
                  <div class="i-heroicons:trash w-1em h-1em text-red-600 cursor-pointer mt-1"></div>
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
    </div>
  </div>
</template>
