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
            <b-form @submit="onSubmit">
              <b-form-group
                class="mt-2"
                id="input-group-1"
                label="Change user name:"
                label-for="input-1"
              >
                <b-form-input
                  id="name"
                  type="text"
                  placeholder="Enter new user name"
                  v-model="formProfile.name"
                ></b-form-input>
              </b-form-group>
              <label> Edit biography: </label>
              <b-form-textarea
                id="bio"
                label="edit bio:"
                v-model="formProfile.bio"
                placeholder="Tell about yourself here"
                rows="5"
                max-rows="10"
              >
              </b-form-textarea>

              <b-button class="signup mt-2" type="submit" variant="primary"
                >Update profile</b-button
              >
            </b-form>
          </b-card>
          <b-card
            header="CHANGE PASSWORD"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-form @submit="onSubmitChangePassword">
              <b-form-group
                class="mt-2"
                id="input-group-2"
                label="Current Password:"
                label-for="current-password"
              >
                <b-form-input
                  id="current-password"
                  v-model="formPassword.password"
                  placeholder="Enter your current Password"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="mt-2"
                id="input-group-2"
                label="New Password:"
                label-for="new-password"
              >
                <b-form-input
                  id="new-password"
                  v-model="formPassword.newPassword"
                  placeholder="Enter new Password"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="mt-2"
                id="input-group-2"
                label="Confirm Password"
                label-for="confirm-password"
              >
                <b-form-input
                  id="confirm-password"
                  v-model="formPassword.confirmPassword"
                  placeholder="Enter new Password"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button class="signup mt-2" type="submit" variant="primary"
                >Change Password</b-button
              >
            </b-form>
          </b-card>
          <b-card
            header="YOUR PROFILE"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-button id="show-btn" variant="danger" @click="showModal"
              >Delete Profile</b-button
            >

            <b-modal ref="my-modal" hide-footer title="Using Component Methods">
              <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
              </div>
              <b-form @submit="onSubmitDelete">
                <b-button class="mt-2" type="submit" variant="danger"
                  >Delete profile</b-button
                >
              </b-form>
            </b-modal>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      formProfile: {
        name: "",
        bio: "",
      },
      formPassword: {
        password: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  mounted() {
    const bearer = "Bearer " + localStorage.getItem("token");
    fetch("http://localhost:3000/api/users/update-profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.formProfile.name = data.name;
        this.formProfile.bio = data.bio;
      })
      .catch((err) => {
        console.log("Error occured!");
        console.log(err);
      });
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    onSubmitDelete(event) {
      event.preventDefault();
      const bearer = "Bearer " + localStorage.getItem("token");
      fetch("http://localhost:3000/api/users/delete-profile", {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
        },
      })
        .then((res) => {
          if (res.status == 200) {
            localStorage.clear();
            console.log("User deleted successfully!");
          }
        })
        .catch((err) => {
          console.log("Error occured!");
          console.log(err);
        });
    },
    onSubmit(event) {
      event.preventDefault();
      const bearer = "Bearer " + localStorage.getItem("token");
      fetch("http://localhost:3000/api/users/update-profile", {
        method: "PUT",
        body: JSON.stringify(this.formProfile),
        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
        },
      })
        .then((res) => {
          if (res.status == 200) {
            console.log("User updated successfully!");
          }
        })
        .catch((err) => {
          console.log("Error occured!");
          console.log(err);
        });
    },
    onSubmitChangePassword(event) {
      event.preventDefault();
      const bearer = "Bearer " + localStorage.getItem("token");
      fetch("http://localhost:3000/api/users/change-password", {
        method: "PUT",
        body: JSON.stringify(this.formPassword),
        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
        },
      })
        .then((res) => {
          if (res.status == 200) {
            console.log("Password updated successfully!");
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
