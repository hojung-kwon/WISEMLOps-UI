<template>
  <va-navbar color="primary" class="main-nav py-0 px-2" >
    <template #left>
      <NameSpaces 
        v-if="hasNamespace.indexOf(route.path) > 0"
        v-model:namespaces="namespaceOption" 
        v-model:namespace="namespace" 
        @selectNamespace="selectNamespace" />
    </template>
    <template #default>
      <div></div>
    </template>
    <template #right>
      <div class="row justify-end align-center ">
        <span class="mr-3">
          <va-avatar color="info" size="small">
            <va-icon name="person"></va-icon>
          </va-avatar>
        </span>
        <span class="pt-2">
          <!-- <va-navbar-item>{{ $props.userName }}</va-navbar-item> -->
          <va-button-dropdown placement="bottom-end" :label="props.userName" class="mr-2 mb-2">
            <va-list>
              <va-list-item>
                <va-list-item-section icon>
                  <va-icon name="person"></va-icon>
                </va-list-item-section>
                <va-list-item-section class="mr-3">
                  <va-list-item-label v-on:click="accountSetting()">계정 설정</va-list-item-label>
                </va-list-item-section>
              </va-list-item>
              <va-list-item>
                <va-list-item-section icon>
                  <va-icon name="logout"></va-icon>
                </va-list-item-section>
                <va-list-item-section class="mr-3">
                  <va-list-item-label v-on:click="logout()">로그아웃</va-list-item-label>
                </va-list-item-section>
              </va-list-item>            
            </va-list>
          </va-button-dropdown>
        </span>
      </div>
    </template>
  </va-navbar>
</template>

<script setup lang="ts">
const config = useAppConfig();
const route = useRoute();

interface Props {
  userName?: string;
  userId: string;
}


const props = withDefaults(defineProps<Props>(), {
  userName: 'User Name'
})

const namespaces = await getNamespaces();

const namespaceOption = ref(namespaces.value?.result)

const namespace = ref(!localStorage.getItem('namespace')?localStorage.setItem('namespace', 'default'): localStorage.getItem('namespace'))

const selectNamespace = (e:any) => {
  localStorage.setItem('namespace', e)  
  
}

const accountSetting = () => {
    alert("Account Setting.");
}

const logout = () => {
    alert("Logout.");
}
</script>

<style scoped>
.main-nav {
    height: 56px;
    z-index: 3;
  }
</style>