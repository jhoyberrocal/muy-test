<template lang="pug">
  .main-container
    .login-logo
      img(alt='main logo' src='../assets/Login-Best-Pizza.png')
    .login-info
      h2.login-info-welcome Bienvenido
      p.login-info-slogan A las mejores pizzas del pa&iacute;s
    login-form
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm";

export default {
  name: 'Home',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/variables";

  .login {
    &-logo {
      width: 100%;
      img {
        width: 120px;
        height: auto;
      }
    }
    &-info {
      &-welcome {
        margin: 10px 0;
      }
      &-slogan {
        color: var(--sub-text);
      }
    }
  }

  @media (min-width: $md-size) {
    .login {
      &-logo {
        margin-top: 10px;
        img {
          width: 140px;
          height: auto;
        }
      }
      &-info {
        &-welcome {
          margin-top: 20px;
          font-size: rem(28px);
        }
      }
    }
  }

  @media (min-width: $lg-size) {
    .login {
      &-logo {
        margin-top: 20px;
        img {
          width: 200px;
          height: auto;
        }
      }
      &-info {
        &-welcome {
          margin-top: 20px;
          font-size: rem(28px);
        }
      }
    }
  }
</style>
