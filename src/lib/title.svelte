<script lang="ts">
  import Dropdown from './dropdown.svelte'
  import { SHA, selected_sha } from './sha'

  const algo_list = Object.values(SHA)
</script>

<div class="mt-6 flex flex-wrap justify-center">
  <div class="">
    <h1
      class="text-str inline-block pl-3  text-3xl font-bold  text-white [text-shadow:0_0_1px_black]"
    >
      <span
        class="relative inline-block before:absolute before:-inset-1 before:block before:skew-x-12 before:skew-y-6 before:bg-pink-400"
        ><span
          class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-x-6 before:skew-y-12 before:bg-cyan-500"
          ><span
            class="relative inline-block before:absolute before:-inset-1 before:block before:skew-y-6 before:bg-pink-500"
          >
            <span class="relative text-white"> <span class="text-2xl ">e</span>SHA</span>
          </span>
        </span>
      </span>
    </h1>
    <div class="ml-1 inline-block">
      <Dropdown
        bind:value={$selected_sha}
        class="text-str text-3xl font-bold text-white  [text-shadow:0_0_2px_black]"
        items={algo_list}
      />
    </div>
  </div>
</div>
