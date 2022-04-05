<script lang="ts">
  import Dropdown from './dropdown.svelte'
  import { SHA, selected_sha } from './sha'
  
  const algo_list = Object.values(SHA)
</script>

<div class="flex flex-wrap justify-center mt-6">
  <div class="">
    <h1
      class="pl-3 text-3xl font-bold  text-str text-white  [text-shadow:0_0_1px_black] inline-block"
    >
      <span
        class="relative inline-block before:block before:absolute before:-inset-1 before:skew-x-12 before:skew-y-6 before:bg-pink-400"
        ><span
          class="relative inline-block before:block before:absolute before:-inset-1 before:-skew-x-6 before:skew-y-12 before:bg-cyan-500"
          ><span
            class="relative inline-block before:block before:absolute before:-inset-1 before:skew-y-6 before:bg-pink-500"
          >
            <span class="relative text-white">
              <span class="text-2xl ">e</span>SHA</span
            >
          </span>
        </span>
      </span>
    </h1>
    <div class="inline-block ml-1">
      <Dropdown bind:value={$selected_sha}
        class="text-3xl font-bold text-str text-white  [text-shadow:0_0_2px_black]"
        items={algo_list}
      />
    </div>
  </div>
</div>
