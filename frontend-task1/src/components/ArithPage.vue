<script setup lang="js">
import {  NumberFieldInput, NumberFieldRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {  SelectContent,  SelectGroup,  SelectItem,  SelectItemIndicator,  SelectItemText,  SelectPortal,  SelectRoot,  SelectScrollDownButton,  SelectScrollUpButton,  SelectTrigger,  SelectValue,  SelectViewport,} from 'radix-vue'

     const fruit = ref();

        const options = ["Add", "Subtract", "Multiply", "Divide"];
       
</script>

<template>
  <div className="App">
    <div className="Appbar">
      <button class="rounded-button" id="logout">Logout</button>
      <h1>Enter the values</h1>
    </div>
    <div className="Description">
      <!-- Number field -->

      <NumberFieldRoot id="age" class="NumberFieldRoot" :min="0">
        <div className="NumberFieldContainer">
          
          <NumberFieldInput class="NumberFieldInput" />
          
        </div>
      </NumberFieldRoot>

      <!-- Arthmetic field -->

      <SelectRoot v-model="fruit">
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
          
          <NumberFieldInput class="NumberFieldInput" />
          
        </div>
      </NumberFieldRoot>
    </div>
    <div class="below-desc">
      <button class="rounded-button">=</button>
    </div>
    <div class="below-below-desc">The answer is: {{ 0 }}</div>
  </div>
</template>


<style>

@import "../assets/styles.css";

</style>
