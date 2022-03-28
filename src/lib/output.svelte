<script lang="ts">
  export let input = ''
</script>

<div class="flex justify-center mt-3">
  <div
    class="p-[0.1rem] bg-gradient-to-tr from-cyan-700 to-pink-700 rounded-l-lg
    flex
    max-w-[75%]"
  >
    <span
      class="bg-slate-800 rounded-l-lg text-slate-400 p-1 pl-2 pr-2 max-w-[100%] text-left break-words"
      >{input}</span
    >
  </div>
  <div
    class="flex 
    p-[0.1rem] bg-gradient-to-br to-cyan-700 from-pink-700 
    rounded-r-lg ml-[-1px]"
  >
    <button class="bg-slate-800 hover:bg-black/0 rounded-r-lg">Copy</button>
  </div>
</div>
