<script lang="ts" context="module">
  import { writable } from 'svelte/store'
  export const input_text = writable('')
</script>

<script lang="ts">
  import reactive_limit from './reactive-limit'
  const limit = reactive_limit(500)
  let value = ''
  $: limit(() => input_text.set(value))
</script>

<div class="mt-5 flex justify-center">
  <input
    bind:value
    type="password"
    placeholder="Start Typing..."
    maxlength="256"
    class="
      w-4/5 rounded-full p-1 pl-3 pr-3 text-slate-900 shadow 
      outline-none ring-0
      placeholder:italic md:w-3/5
    "
  />
</div>
