<!-- svelte-ignore a11y-autofocus -->
<script lang="ts">
  import { writable } from 'svelte/store'
  import { onMount } from 'svelte'

  export const value = writable('')

  const onInput = (e: Event) => value.set((e.target as HTMLInputElement).value)
  let show_password = false
  let ref: HTMLInputElement

  onMount(() => {
    if (!(navigator as any)?.userAgentData?.mobile) {
      ref.focus()
    }
  })
</script>

<div class="mt-5 flex justify-center">
  <input
    bind:this={ref}
    value={$value}
    type={show_password ? 'text' : 'password'}
    placeholder="Start Typing..."
    maxlength="256"
    on:input={onInput}
    class="
      w-4/5 rounded-full p-1 pl-3 pr-3 text-slate-900 shadow 
      outline-none ring-0
      placeholder:italic md:w-3/5
    "
  />
  <button class="ml-[-2rem] h-5 w-5 self-center" on:click={() => (show_password = !show_password)}>
    {#if show_password}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    {/if}
  </button>
</div>
