
export enum SHA_ALGO {
    SHA256 = 'SHA-256',
    SHA384 = 'SHA-384',
    SHA512 = 'SHA-512',
}

export async function sha(s: string, algo: SHA_ALGO) {
    if(window === undefined) return ''
    const h = await window.crypto.subtle.digest(algo, new TextEncoder().encode(s))
    return window.btoa(String.fromCharCode(...new Uint8Array(h)))
}
