<script lang="ts" context="module">
  import { writable } from 'svelte/store'
  export const input_text = writable('')
</script>

<script lang="ts">
  import reactive_limit from './reactive_limit'
  const limit = reactive_limit(500)
  let value = ''
  $: limit(() => input_text.set(value))
</script>

<div class="flex mt-5 justify-center">
  <input
    bind:value
    type="text"
    placeholder="Start Typing..."
    maxlength="256"
    class="rounded-full shadow p-1 pl-3 pr-3 lg:w-2/5 w-4/5 text-slate-900 ring-0 outline-none 
     placeholder:italic"
  />
</div>
