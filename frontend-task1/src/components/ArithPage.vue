<script setup lang="js">
import { NumberFieldRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import {  SelectContent,  SelectGroup,  SelectItem,  SelectItemIndicator,  SelectItemText,  SelectPortal,  SelectRoot,  SelectScrollDownButton,  SelectScrollUpButton,  SelectTrigger,  SelectValue,  SelectViewport,} from 'radix-vue'
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const store = useStore();
const router = useRouter();

const user = computed(() => store.getters.getUser);
const result = computed(() => store.getters.getResult);

const options = ["Add", "Subtract", "Multiply", "Divide"];

const num1 = ref("");
const num2 = ref("");
const option = ref("");

const performOperation = async () => {
  try {
    const urlMap = {
      Add: 'http://localhost:4000/add',
      Subtract: 'http://localhost:4000/subtract',
      Multiply: 'http://localhost:4000/multiply',
      Divide: 'http://localhost:4000/divide'
    };

 console.log(`Selected option: ${option.value},${num1.value},${num2.value}`);
 
    const response = await axios.post(urlMap[option.value], {
      num1: num1.value,
      num2: num2.value,
    }, { withCredentials: true }); 

    store.dispatch('updateResult', response.data.result);
    
  } catch (error) {
    console.error('Operation error:', error);
  }
};

const handleLogout = () => {
  store.dispatch('logout');
  router.push({ name: 'UserAuth' });
};
       
</script>

<template>
  <div className="App">
    <div className="Appbar">
      <div class="top-right">
        <h2>Hi {{ user }}</h2>
        <button class="rounded-button" id="logout" @click="handleLogout">
          Logout
        </button>
      </div>
      <h1>Enter the values</h1>
    </div>
    <div className="Description">
      <!-- Number field -->

      <NumberFieldRoot id="age" class="NumberFieldRoot" :min="0">
        <div className="NumberFieldContainer">
          <input class="NumberFieldInput" required v-model="num1" />
        </div>
      </NumberFieldRoot>

      <!-- Arthmetic field -->

      <SelectRoot v-model="option">
        <SelectTrigger class="SelectTrigger" aria-label="Customise options">
          <SelectValue placeholder="Select an Operation" />
          <Icon icon="radix-icons:chevron-down" />
        </SelectTrigger>

        <SelectPortal>
          <SelectContent class="SelectContent" :side-offset="5">
            <SelectScrollUpButton class="SelectScrollButton">
              <Icon icon="radix-icons:chevron-up" />
            </SelectScrollUpButton>

            <SelectViewport class="SelectViewport">
              <SelectGroup>
                <SelectItem
                  v-for="(option, index) in options"
                  :key="index"
                  class="SelectItem"
                  :value="option"
                >
                  <SelectItemIndicator class="SelectItemIndicator">
                    <Icon icon="radix-icons:check" />
                  </SelectItemIndicator>
                  <SelectItemText>
                    {{ option }}
                  </SelectItemText>
                </SelectItem>
              </SelectGroup>
            </SelectViewport>

            <SelectScrollDownButton class="SelectScrollButton">
              <Icon icon="radix-icons:chevron-down" />
            </SelectScrollDownButton>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
      <!-- Number field -->

      <NumberFieldRoot id="age" class="NumberFieldRoot" :min="0">
        <div className="NumberFieldContainer">
          <input class="NumberFieldInput" required v-model="num2" />
        </div>
      </NumberFieldRoot>
    </div>
    <div class="below-desc">
      <button class="rounded-button" @click="performOperation">=</button>
    </div>
    <div class="below-below-desc">The answer is: {{ result }}</div>
  </div>
</template>


<style>
@import "../assets/styles.css";
</style>
