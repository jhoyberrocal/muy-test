<template lang="pug">
  form.login-form(@submit="login")
    .row
      .col.s12.sm8.off-sm2.lg6.off-lg3
        div.control-input
          input.form-input(type="text", placeholder=" ", name="usuario", required)
          label.form-label Usuario
          img.form-icon(src='../assets/ic_usuario.png')
      .col.s12.sm8.off-sm2.lg6.off-lg3
        div.control-input
          input.form-input(type="password", placeholder=" ", name="password", required)
          label.form-label Contraseña
          img.form-icon(src='../assets/ic_contrasena.png')
    .row.mt-1
      .col.s12.sm8.off-sm2.lg6.off-lg3
        router-link(to="/") ¿Olvidaste tu contraseña?
    .row.mt-2
      .col.s12.sm8.off-sm2.lg6.off-lg3
        button.btn.btn-primary(type="submit") Iniciar sesión
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "LoginForm",
  methods: {
    ...mapActions({auth: 'auth/login'}),
    async login(e) {
      e.preventDefault();
      const email = e.target.elements.usuario.value;
      const password = e.target.elements.password.value;
      const router = this.$router;

      await this.auth({email, password, router});
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/variables";

  .login-form {
    margin-top: 20px;
  }

  @media (min-width: $lg-size) {
    .login-form {
      margin-top: 40px;
    }
  }
</style>
