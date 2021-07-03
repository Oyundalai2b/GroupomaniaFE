<template>
  <div id="profile">
    <b-container>
      <b-row class="justify-content-md-center mt-4 mb-4">
        <b-col col md="8">
          <b-card
            header="YOUR PROFILE"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group
                class="mt-2"
                id="input-group-2"
                label="Change Password:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  placeholder="Enter new Password"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="mt-2"
                id="input-group-1"
                label="Change user name:"
                label-for="input-1"
                description=""
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  placeholder="Enter new user name"
                ></b-form-input>
              </b-form-group>
              <b-form-label> Edit biography: </b-form-label>
              <b-form-textarea
                id="textarea"
                label="edit bio:"
                v-model="content"
                placeholder="Tell about yourself here"
                rows="5"
                max-rows="10"
              >
              </b-form-textarea>

              <b-button class="signup mt-2" type="submit" variant="primary"
                >Update profile</b-button
              >
              <b-button class="mt-2" type="reset" variant="danger"
                >Delete profile</b-button
              >
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        body: JSON.stringify(this.form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status == 201) {
            console.log("User added successfully!");
          }
        })
        .catch((err) => {
          console.log("Error occured!");
          console.log(err);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss">
#profile {
  .row {
    .col {
      width: 400px;
      margin: 0 auto;
      margin-bottom: 20px !important;
      div.card-body {
        line-height: 40px;
      }
    }
  }
}
button.signup {
  margin-right: 20px;
}
</style>
