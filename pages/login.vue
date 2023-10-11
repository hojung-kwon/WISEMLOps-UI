<template>
  <div class="contents">
    <h1 class="login-title">WISE MLOps Platform</h1>
    <div class="row justiry-center">
      <div class="flex flex-col xs4"></div>
      <div class="flex flex-col xs4">
        <va-card>
          <va-form class="form-box" tag="form" @submit.prevent="handleSubmit">
            <va-card-content>
              <va-input class="form-data" type="text" label="User ID" v-model="userId" />
              <va-input class="form-data" type="password" label="Password" v-model="userPassword" />
            </va-card-content>
            <va-card-actions align="between">
              <va-button type="submit">Login</va-button>
              <va-button type="button" v-on:click="accountFind">Find Account</va-button>
            </va-card-actions>
          </va-form>
        </va-card>
      </div>
      <div class="flex flex-col xs4"></div>
    </div>


  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login",
});

const router = useRouter();
const userId = ref("");
const userPassword = ref("");

const handleSubmit = () => {

  if (userId.value === "admin" && userPassword.value === "1234") {
    sessionStorage.setItem("username", userId.value);
    console.log('aas')
    navigateTo(`/`, {
      replace: true,
      redirectCode: 301,
      external: true
    })
  } else {
    alert("잘못된 계정입니다.");
  }
}

const accountFind = () => {
  alert("계정은 admin, 비밀번호는 1234 입니다.");
}


</script>


<style>
html,
body,
#__nuxt {
  height: 100%;
}

.contents {
  width: 100%;
  height: 100vh;
  background-image: url("assets/img/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login-title {
  font-family: 'Tahoma';
  text-align: center;
  font-size: xxx-large;
  padding-top: 150px;
  margin-bottom: 20px;
  color: #fff
}

.form-box {
  width: 300px;
  /* text-align: center; */
  margin: 10px auto;
}

.form-data {
  /* text-align: center; */
  width: 100%;
  margin: auto;
  padding: 10px 0px 0px 10px;
}
</style>
