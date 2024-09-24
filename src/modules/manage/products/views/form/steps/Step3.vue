<template>
  <div>
    <div class="grid grid-cols-4 gap-3 mt-5 ml-5">
      <a-form-item label="Tipo de producto" name="tax2">
        <a-select v-model:value="formState.productType" placeholder="Tipo de producto">
          <a-select-option value="single" checked>Simple</a-select-option>
          <a-select-option value="multiple">Variables</a-select-option>
        </a-select>
      </a-form-item>
    </div>
    <a-tabs
      v-model:activeKey="activeKey"
      :tab-position="mode"
      :style="{ height: '600px' }"
      @tabScroll="callback"
    >
      <a-tab-pane key="1" tab="General">
        <div class="grid grid-cols-4 gap-3">
          <div class="grid-input">
            <a-form-item label="Precio normal (Є)">
              <a-input v-model:value="formState.price1" />
            </a-form-item>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-3">
          <div class="grid-input">
            <a-form-item label="Precio rebajado (Є)">
              <a-input v-model:value="formState.price2" />
            </a-form-item>
          </div>
        </div>
        <div class="r-footer-button-form">
          <RButton class="mb-5 ml-35" shadow color="primary" :loading="false"> Programar </RButton>
        </div>
        <div
          class="px-1 py-1 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-1 mb-5"
        ></div>
        <div class="grid grid-cols-4 gap-3">
          <div class="grid-input">
            <a-form-item label="Clase del impuesto" name="tax1">
              <a-select v-model:value="formState.tax1" placeholder="please select your zone">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-3">
          <a-form-item label="Estado del impuesto" name="tax2">
            <a-select v-model:value="formState.tax2" placeholder="please select your zone">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Inventario" force-render>
        <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
          <div class="grid grid-cols-2 gap-3">
            <div class="grid-input">
              <a-form-item label="SKU">
                <a-input v-model:value="formState.sku" />
              </a-form-item>
            </div>
          </div>
          <a-form-item label="Gestión de inventarios">
            <a-checkbox-group v-model:value="formState.inventaryManage">
              <a-checkbox value="1" name="manageInventary"
                >Hacer seguimiento de la cantidad de inventario de este producto</a-checkbox
              >
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="Estado de inventario">
            <a-radio-group v-model:value="formState.inventaryState">
              <a-radio value="1">Hay existencias</a-radio>
              <a-radio value="2">Sin existencias</a-radio>
              <a-radio value="3">Se puede reservar</a-radio>
            </a-radio-group>
          </a-form-item>
          <div
            class="mb-5 px-1 py-1 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-1"
          ></div>
          <a-form-item label="Vendido individualmente">
            <a-checkbox-group v-model:value="formState.sold">
              <a-checkbox value="1" name="sold"
                >Limitar compras a un artículo por pedido</a-checkbox
              >
            </a-checkbox-group>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Envío">
        <div class="grid grid-cols-2 gap-3">
          <div class="grid-input">
            <a-form-item label="Longitud">
              <a-input v-model:value="formState.length1" />
            </a-form-item>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-3">
          <div class="grid-input">
            <a-form-item label="Dimensiones">
              <a-input v-model:value="formState.length2" placeholder="Longitud" />
            </a-form-item>
          </div>
          <div class="grid-input">
            <a-form-item label="">
              <a-input v-model:value="formState.width" placeholder="Ancho" />
            </a-form-item>
          </div>
          <div class="grid-input">
            <a-form-item label="">
              <a-input v-model:value="formState.heigth" placeholder="Alto" />
            </a-form-item>
          </div>
        </div>
        <div
          class="px-1 py-1 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-1 mb-5"
        ></div>
        <div class="grid grid-cols-4 gap-3">
          <a-form-item label="Clase de envío" name="send">
            <a-select v-model:value="formState.send" placeholder="please select your zone">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </div>
      </a-tab-pane>
      <a-tab-pane key="4" tab="Productos relacionados">
        <div class="grid grid-cols-2 gap-3">
          <a-form-item label="Ventas dirigidas" name="saleD">
            <a-select v-model:value="formState.saleD" placeholder="please select your zone">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <a-form-item label="Ventas cruzadas" name="saleC">
            <a-select v-model:value="formState.saleC" placeholder="please select your zone">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </div>
      </a-tab-pane>
      <a-tab-pane key="5" tab="Atributos">
        <div class="grid grid-cols-2 gap-3">
          <a-form-item label="Añadir existente" name="attributes">
            <a-select v-model:value="formState.attributes" placeholder="Seleccione atributo">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
          <RButton class="mb-5" shadow color="primary" :loading="false" @click="">
            Añadir nuevo
          </RButton>
        </div>
      </a-tab-pane>
      <a-tab-pane v-if="handleProductState" key="6" tab="Variaciones"
        >Content of Tab Pane 6</a-tab-pane
      >
      <a-tab-pane key="7" tab="Avanzado">
        <div class="grid grid-cols-2 gap-3">
          <a-form-item label="Nota de compra">
            <a-textarea
              v-model:value="formState.purchaseNote"
              :rows="4"
              placeholder="maxlength is 6"
              :maxlength="6"
            />
          </a-form-item>
        </div>
        <div
          class="px-1 py-1 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-1 mb-5"
        ></div>
        <div class="grid grid-cols-2 gap-3">
          <div class="grid-input">
            <a-form-item label="Orden en el menú">
              <a-input v-model:value="formState.menuOrder" />
            </a-form-item>
          </div>
        </div>
        <div
          class="px-1 py-1 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-1 mb-5"
        ></div>
        <a-form-item label="Activa las valoraciones">
          <a-checkbox v-model:checked="checked"></a-checkbox>
        </a-form-item>
      </a-tab-pane>
      <a-tab-pane key="8" tab="MailerLite">
        <a-form-item label="Ignorar producto">
          <a-checkbox v-model:checked="productIgnore"></a-checkbox>
        </a-form-item>
      </a-tab-pane>
      <a-tab-pane key="9" tab="Facebook">
        <div class="grid grid-cols-2 gap-3">
          <div class="grid-input">
            <a-form-item label="Sincronizar con Facebook" name="tax1">
              <a-select
                v-model:value="formState.facebookSync"
                placeholder="please select your zone"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <a-form-item label="Descripción de Facebook">
            <a-textarea
              v-model:value="formState.facebookDescription"
              :rows="3"
              placeholder="maxlength is 6"
              :maxlength="6"
            />
          </a-form-item>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <a-form-item label="Imagen del producto de Facebook">
            <a-radio-group v-model:value="value">
              <a-radio :style="radioStyle" :value="1">Usar una imagen de WooCommerce</a-radio>
              <a-radio :style="radioStyle" :value="2">Usar una imagen personalizada</a-radio>
            </a-radio-group>
          </a-form-item>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="grid-input">
            <a-form-item label="URL de la imagen personalizada">
              <a-input v-model:value="formState.customURL" />
            </a-form-item>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="grid-input">
            <a-form-item label="Precio de facebook (Є)">
              <a-input v-model:value="formState.facebookPrice" />
            </a-form-item>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="grid-input">
            <a-form-item label="Categoría de producto de Google" name="tax1">
              <a-select v-model:value="formState.mainCategory" placeholder="Buscar categorías principales ..." style="margin-bottom: 15px;">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
              <a-select v-model:value="formState.subCategory" placeholder="Elige una categoría principal ...">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, toRaw, computed } from 'vue'
import type { UnwrapRef } from 'vue'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import type { FormInstance } from 'ant-design-vue'
import { RInput } from '~co/components/form'
import REditor from '~co/components/form/src/editor/REditor.vue'
import ProductNote from '~m/manage/products/views/form/ProductNotes.vue'
import type { TabsProps } from 'ant-design-vue'
import RButton from '~co/components/buttons/src/RButton.vue'
import RSelect from '~co/components/form/src/select/RSelect.vue'

let productState = true
const mode = ref<TabsProps['tabPosition']>('left')
const activeKey = ref(1)
const callback: TabsProps['onTabScroll'] = (val) => {
  console.log(val)
}

interface FormState {
  length1: string
  length2: string
  width: string
  heigth: string
  desc: string
  sku: string
  price1: number
  price2: number
  price: number
  tax1: string
  tax2: string
  inventaryManage: string[]
  inventaryState: string[]
  sold: string[]
  productType: string
  send: string
  saleD: string
  saleC: string
  attributes: string
  purchaseNote: string
  menuOrder: number
  facebookSync: string
  facebookDescription: string
  customURL: string
  facebookPrice: string
  mainCategory: string
  subCategory: string
}
const formState: UnwrapRef<FormState> = reactive({
  length1: '',
  length2: '',
  width: '',
  heigth: '',
  desc: '',
  sku: '',
  price1: 0,
  price2: 0,
  tax1: '',
  tax2: '',
  inventaryManage: [],
  inventaryState: [],
  sold: [],
  productType: 'single',
  send: '',
  saleD: '',
  saleC: '',
  price: 0,
  attributes: '',
  purchaseNote: '',
  menuOrder: 0,
  facebookSync: '',
  facebookDescription: '',
  customURL: '',
  facebookPrice: '',
  mainCategory: '',
  subCategory: ''
})
const checked = ref(true)
const productIgnore = ref(false)
const value = ref<number>(1)
const radioStyle = reactive({
  display: 'flex',
  height: '30px',
  lineHeight: '30px'
})

const onSubmit = () => {
  console.log('submit!', toRaw(formState))
}
const labelCol = { style: { width: '150px' } }
const wrapperCol = { span: 14 }

const changeProductState = () => {
  productState = true
  console.log('clic handleProductState')
  console.log(productState)
}
const productStateMultiple = () => {
  productState = false
  console.log('clic productStateMultiple')
  console.log(productState)
}

const handleProductState = computed(() => {
  return formState.productType === 'multiple'
})

const onFinish = (values: any) => {
  console.log('Received values from form: ', values)
}
const checkPrice = (_: any, value: { number: number }) => {
  if (value.number > 0) {
    return Promise.resolve()
  }
  return Promise.reject(new Error('Price must be greater than zero!'))
}
</script>
