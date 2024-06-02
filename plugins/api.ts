import { type CoffeeRepository, createCoffeeRepository } from '~/core/repository/coffee'

interface ApiInstance {
  products: CoffeeRepository
}

export default defineNuxtPlugin(() => {
  const repositories: ApiInstance = {
    products: createCoffeeRepository()
  }

  return {
    provide: {
      api: repositories
    }
  }
})
