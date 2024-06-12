<script setup lang="js">
import { Tabs } from 'radix-vue/namespaced'

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
              :value="username"
              :onChange="(e) => setUsername(e.target.value)"
              className="Input"
              id="name"
              placeholder="Username"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <input
              type="password"
              required
              :value="password"
              :onChange="(e) => setPassword(e.target.value)"
              className="Input"
              id="username"
              placeholder="Password"
            />
          </fieldset>
          <div className="Button">
            <button className="Button green" :onClick="handleSignup">
              Submit 
            </button>
          </div>
        </Tabs.Content>

        <!-- {/* LOGIN */} -->

        <Tabs.Content className="TabsContent" value="tab2">
          <p className="Text">Enter your login credentials here.</p>
          <fieldset className="Fieldset">
            <input
              className="Input"
              required
              :value="username"
              :onChange="(e) => setUsername(e.target.value)"
              id="currentPassword"
              placeholder="Username"
              type="text"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <input
              className="Input"
              required
              :value="password"
              :onChange="(e) => setPassword(e.target.value)"
              id="newPassword"
              placeholder="Password"
              type="password"
            />
          </fieldset>

          <div className="Button">
            <button className="Button green" :onClick="handleLogin">
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
