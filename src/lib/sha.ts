import { writable } from 'svelte/store'
import { browser } from '$app/environment'

export enum SHA {
  SHA256 = 'SHA-256',
  SHA384 = 'SHA-384',
  SHA512 = 'SHA-512',
}

export async function compute_hash(s: string, algo: SHA): Promise<string> {
  if (browser && s) {
    const h = await crypto.subtle.digest(algo, new TextEncoder().encode(s))
    return window.btoa(String.fromCharCode(...new Uint8Array(h)))
  } else {
    return new Promise((res) => res(''))
  }
}

export const selected_sha = writable((browser && localStorage.selected_sha) || SHA.SHA256)
if (browser) {
  selected_sha.subscribe((v) => (localStorage.selected_sha = v))
}
