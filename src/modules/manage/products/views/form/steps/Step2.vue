<template>
  <div class="mx-10 mt-5">
    <!-- <div class="col-span-4"> -->
    <!-- <REditor :requiredMark="true" path="descriptions" label="Breve descripción del producto" /> -->
    <div class="grid grid-cols-2 gap-3">
      <a-form-item label="Descripción de Facebook">
        <a-textarea :rows="3" placeholder="maxlength is 6" :maxlength="6" />
      </a-form-item>
    </div>
    <!-- </div> -->

    <a-form
      ref="formRef"
      name="dynamic_form_item"
      :model="dynamicValidateForm"
      v-bind="formItemLayoutWithOutLabel"
    >
      <a-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        v-bind="index === 0 ? formItemLayout : {}"
        :label="index === 0 ? 'Notas' : ''"
        :name="['domains', index, 'value']"
        :rules="{
          required: true,
          message: 'domain can not be null',
          trigger: 'change'
        }"
      >
        <a-input
          v-model:value="domain.value"
          placeholder="por favor entre la nota"
          style="width: 60%; margin-right: 8px"
        />
        <MinusCircleOutlined
          v-if="dynamicValidateForm.domains.length > 1"
          class="dynamic-delete-button"
          @click="removeDomain(domain)"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayoutWithOutLabel">
        <a-button type="dashed" style="width: 60%; margin-left: -80px;" @click="addDomain">
          <PlusOutlined />
          Agregar nota
        </a-button>
      </a-form-item>
      <!-- <a-form-item v-bind="formItemLayoutWithOutLabel">
        <a-button type="primary" html-type="submit" @click="submitForm">Submit</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item> -->
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import type { FormInstance } from 'ant-design-vue'
import { RInput } from '~co/components/form'
import REditor from '~co/components/form/src/editor/REditor.vue'
import ProductNote from '~m/manage/products/views/form/ProductNotes.vue'

interface Domain {
  value: string
  key: number
}
const formRef = ref<FormInstance>()
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
}
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 }
  }
}
const dynamicValidateForm = reactive<{ domains: Domain[] }>({
  domains: []
})
const submitForm = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', dynamicValidateForm.domains)
    })
    .catch((error) => {
      console.log('error', error)
    })
}
const resetForm = () => {
  formRef.value.resetFields()
}
const removeDomain = (item: Domain) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}
const addDomain = () => {
  dynamicValidateForm.domains.push({
    value: '',
    key: Date.now()
  })
}
</script>
<style scoped>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
