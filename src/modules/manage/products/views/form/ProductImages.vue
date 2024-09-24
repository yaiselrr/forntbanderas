<template>
    <div class="m-10">
        <div class="mb-5">
            <p>Variante X</p>
        </div>

        <div class="grid grid-cols-6 gap-1">
            <div class="grid-input">
                <a-image
                    style="border-radius: 5%;"
                    :width="200"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>       
            <div class="grid-input">    
                <a-image
                    style="border-radius: 5%;"
                    :width="200"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />                
            </div>       
            <div class="grid-input">    
                <a-button  style="width:200px; height: 200px">
                    <template #icon>
                        <DownloadOutlined />
                      </template>                    
                </a-button>                
            </div>       

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
</style>