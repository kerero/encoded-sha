<script lang="ts">
  export let value = ''
</script>

<div class="flex mt-5 justify-center">
  <input
    bind:value
    type="text"
    placeholder="Text..."
    maxlength="256"
    class="rounded-full shadow p-1 pl-4 lg:w-2/5 w-4/5 text-slate-900 ring-0 outline-none 
    placeholder:text-center placeholder:italic"
  />
</div>
