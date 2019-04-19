import { helpers } from 'vuelidate/lib/validators'

export var phone = helpers.regex('phoneNumber', /^1(3|4|5|7|8)\d{9}$/);