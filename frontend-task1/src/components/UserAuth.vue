<script setup>
import { Tabs } from "radix-vue/namespaced";
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";
import router from "../router";

const username = ref("");
const password = ref("");

const store = useStore();

const errorMessage = ref();

const showError = (error) => {
  // if (!error) {
  //   errorMessage.value.innerText = "Signup successful";
  //   errorMessage.value.style.visibility = "visible";
  //   errorMessage.value.style.color = "green";
  // }
  // Access and update the DOM element directly
  if (errorMessage.value) {
    errorMessage.value.innerText = error;
    errorMessage.value.style.visibility = "visible";
  }
};

const handleSignup = async () => {
  try {
    const response = await axios.post(
      "http://localhost:4000/signup",
      {
        username: username.value,
        password: password.value,
      },
      { withCredentials: true }
    );
    console.log("Signup successful:", response.data);
    showError("");
  } catch (error) {
    console.error(error.response.data);
    showError(error.response.data);
  }
};

const handleLogin = async () => {
  try {
    const response = await axios.post(
      "http://localhost:4000/login",
      {
        username: username.value,
        password: password.value,
      },
      { withCredentials: true }
    );

    console.log("Login successful:", response.data);
    store.dispatch("login", response.data.requiredUser);
    router.push({ name: "ArithPage" }); // Navigate to the UserInfo page
  } catch (error) {
    console.error(error.response.data);
    showError(error.response.data);
  }
};
</script>

<template>
  <div className="App">
    <div className="Appbar">
      <h1>Frontend Task - 1</h1>
    </div>
    <div className="Description">
      <h2>Let's do some arithmetic!</h2>
    </div>

    <div className="Login">
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Sign Up
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Login
          </Tabs.Trigger>
        </Tabs.List>

        <!-- {/* SIGNUP */} -->

        <Tabs.Content className="TabsContent" value="tab1">
          <p className="Text">Enter your new username and password</p>
          <fieldset className="Fieldset">
            <input
              type="text"
              required
              v-model="username"
              className="Input"
              id="username"
              placeholder="Username"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <input
              type="password"
              required
              v-model="password"
              className="Input"
              id="password"
              placeholder="Password"
            />
          </fieldset>
          <div
            class="error-msg"
            ref="errorMessage"
            style="visibility: hidden; margin: 18px; color: red"
          ></div>
          <div className="Button">
            <button className="Button green" @click="handleSignup">
              Submit
            </button>
          </div>
        </Tabs.Content>

        <!-- {/* LOGIN */} -->

        <Tabs.Content className="TabsContent" value="tab2">
          <p className="Text">Enter your login credentials here.</p>
          <fieldset className="Fieldset">
            <input
              type="text"
              required
              v-model="username"
              className="Input"
              id="username"
              placeholder="Username"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <input
              type="password"
              required
              v-model="password"
              className="Input"
              id="password"
              placeholder="Password"
            />
          </fieldset>
          <div
            class="error-msg"
            ref="errorMessage"
            style="visibility: hidden; margin: 18px; color: red"
          ></div>
          <div className="Button">
            <button className="Button green" @click="handleLogin">
              Proceed
            </button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </div>
</template>


<style >
@import "../assets/styles.css";
</style>
