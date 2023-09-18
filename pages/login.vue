<template>
  <div class="contents">
    <h1 class="login-title">WISE MLOps Platform</h1>

    <div>
      <va-form class="form-box" tag="form" @submit.prevent="handleSubmit">
        <va-input class="form-data" type="text" label="User ID" v-model="userId" />
        <va-input class="form-data" type="password" label="Password" v-model="userPassword" />

        <va-button class="button" type="submit">Login</va-button>
        <va-button class="button" type="button" v-on:click="accountFind">Find Account</va-button>
      </va-form>
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
  text-align: center;
  margin: 10px auto;
}

.form-data {
  text-align: center;
  margin: auto;
  padding: 10px 0px 0px 10px;
}

.button {
  text-align: center;
  margin: auto;
  padding: 0px;
  margin: 20px 10px 0px 10px;
}
</style>
