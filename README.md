<h1 align="center">vue-coe-breadcrumb ✅</h1>

<p align="center">
  <a href="#"><img src="https://img.shields.io/npm/l/vuelidation.svg" alt="License" target="_blank"></a>
</p>

<br>

<p align="center">
  ✨ <a href="https://codesandbox.io/s/github/viniazvd/vue-coe-breadcrumb-example">Example</a>✨
</p>

<br>

**Competitive Diferentials**
<ul style='margin: 0; padding: 0; color: red; list-style-type: none;'>
  <li>intuitive and easy to set up</li>  
  <li>centralized in the store (that is, easy to debug)</li>
  <li>accepts dynamic and static labels</li>
  <li>data is persisted while reloading (though centralized in the store)</li>
</ul>

<br>

**Install**

`yarn add vue-coe-breadcrumb`
or
`npm i vue-coe-breadcrumb`


**Include Plugin**
```javascript
import Vue from 'vue'

import { VueCoeBreadcrumb } from 'vue-coe-breadcrumb'

Vue.use(VueCoeBreadcrumb, store, options)
```

**Register in component**
```vue
<script>
import CoeBreadcrumb from 'vue-coe-breadcrumb'

export default {
  components: { CoeBreadcrumb }
  ...
</script>
```

<br>

**Use**
```vue
<script>
export default {
  // ...
  
  breadcrumb: {
    getters: 'anyGettersFromYourStore' // the label of this route / crumb will be populated by the called getters value
  }
  
  // ...
}
</script>
```

<br>

## options: plugin instance


Name          | Default        | Required | About
:-------------|:--------------:|:--------:|:-------------------------
storeName     | `coebreadcrumb`| `false`  | store name
store         |                | `true`   | instance of store
separatorText | `\|`           | `false`  | separator text
hidden        | `[]`           | `false`  | array of strings with the name of the routes that will be hidden

## slots: component

- crumbs
- name
