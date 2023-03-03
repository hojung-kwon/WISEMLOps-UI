<template>
  <va-navbar color="primary" class="main-nav py-0 px-2" >
    <template #left>
      <div class="row justify-first align-center ">
        <div class="pt-2">
          <va-button-dropdown color="primary" placement="bottom-start" label="워크스페이스 선택" class="mr-2 mb-2">
            <va-list>
              <va-list-item>
                <va-list-item-section icon>
                  <va-icon name="work"></va-icon>
                </va-list-item-section>
                <va-list-item-section class="mr-3">
                  <va-list-item-label>워크스페이스 1</va-list-item-label>
                </va-list-item-section>
              </va-list-item>
              <va-list-item>
                <va-list-item-section icon>
                  <va-icon name="work"></va-icon>
                </va-list-item-section>
                <va-list-item-section class="mr-3">
                  <va-list-item-label >워크스페이스 2</va-list-item-label>
                </va-list-item-section>
              </va-list-item>            
            </va-list>
          </va-button-dropdown>
        </div>
      </div> 
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
        <va-button-dropdown placement="bottom-end" :label="$props.userName" class="mr-2 mb-2">
          <va-list>
            <va-list-item>
              <va-list-item-section icon>
                <va-icon name="person"></va-icon>
              </va-list-item-section>
              <va-list-item-section class="mr-3">
                <va-list-item-label >계정 설정</va-list-item-label>
              </va-list-item-section>
            </va-list-item>
            <va-list-item>
              <va-list-item-section icon>
                <va-icon name="logout"></va-icon>
              </va-list-item-section>
              <va-list-item-section class="mr-3">
                <va-list-item-label >로그아웃</va-list-item-label>
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

interface Props {
  userName?: string;
  userId: string;
}

const props = withDefaults(defineProps<Props>(), {
  userName: 'User Name'
})


</script>

<style scoped>
.main-nav {
    height: 56px;
  }
</style>