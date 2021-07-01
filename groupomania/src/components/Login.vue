<template>
  <div id="Home">
    <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col col md="8">
          <b-card header="WELCOME BACK" header-bg-variant="primary"
          header-text-variant="white">
            <b-card-text>
              <b-form @submit="onSubmit">
                <b-form-group class="mt-2" description="Enter your email" label="Email">
                  <b-form-input v-model="email" required>
                  </b-form-input>
                </b-form-group>
                 <b-form-group class="mt-2" description="Enter your password" label="Password">
                  <b-form-input v-model="password" required>
                  </b-form-input>
                </b-form-group>
                <b-form-group class="mt-2">
                  <b-button type="submit" variant="outline-primary" :enabled="acceptableSubmittion">
                    Login
                  </b-button>
                </b-form-group>
              </b-form>
            </b-card-text>
          </b-card>
        </b-col>        
      </b-row>
    </b-container>     
    <router-view />
  </div>
</template>


<script>
export default {
  data(){
    return {
      'email': '',
      'password': ''
    }
  },
  methods: {    
    onSubmit(event) {
      event.preventDefault()
      alert(this.email + ' ' + this.password)
    }
  },
  computed: {
    acceptableSubmittion(){
      return (this.email.lenght > 0 && this.password.lenght > 0 ? false : true)
    }
  }
}
</script>


<style lang="scss">

</style>