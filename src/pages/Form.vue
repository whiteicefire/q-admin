<template>
  <div>
    <form class="form">
      <div class="form-box">
          <div class="form-line">
            <q-input
              v-model="form.username"
              @blur="$v.form.username.$touch"
              @keyup.enter="submit"
              :error="$v.form.username.$error"
              float-label="Name"
            />
            <q-input v-model="form.email"
              @blur="$v.form.email.$touch"
              @keyup.enter="submit"
              :error="$v.form.email.$error"
             type="email" float-label="Email" suffix="@gmail.com" />
          </div>
          <div class="form-line">
            <q-input
              v-model="form.phone"
              @blur="$v.form.phone.$touch"
              @keyup.enter="submit"
              :error="$v.form.phone.$error"
              float-label="Phone"
            />
          </div>
      </div>
      <q-btn class="form-btn" color="primary" @click="submit">Submit</q-btn>
    </form>
  </div>
</template>

<style>
.form{

}
.form-box{
  display: flex;
  justify-content:space-around;
}
.form-line{
  flex: 1;
  margin: 0 20px;
}
.form-btn{
  margin-top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<script>
import { required, email, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'
import { phone } from '../utils/MyVuelidate'
export default {
  name: 'Form',
  data () {
    return {
      form: {
        email: '',
        username:'',
        phone: '',
      }
    }
  },
  computed: {

  },
  validations: {
    form: {
      email: { required, email  },
      username: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(20)
      },
      phone: {
        required,
        phone
      },
    }
  },
  mounted () {

  },
  methods: {
    submit () {
      this.$v.form.$touch()
      if (this.$v.form.username.$error) {
          this.$q.notify('请重新填写姓名！')
          return
        }
      if (this.$v.form.phone.$error) {
          this.$q.notify('请重新填写电话号码！')
          return
      }
      if (this.$v.form.email.$error) {
          this.$q.notify('请重新填写邮箱！')
          return
      }
    }
  }
}
</script>
