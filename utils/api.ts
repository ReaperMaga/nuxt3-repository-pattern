import type { FetchOptions } from 'ofetch'

type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | undefined

export async function fetchData<T>(url: string, method: MethodType = 'GET', options?: FetchOptions): Promise<T> {
  const config = useRuntimeConfig()
  const headers: HeadersInit = {
    ...options?.headers,
  }
  return await $fetch<T>(url, {
    ...options,
    headers,
    baseURL: config.public.apiBaseUrl,
    method,
  })
}
