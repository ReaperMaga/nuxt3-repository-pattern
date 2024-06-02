import { fetchData } from '~/core/api'

export interface CoffeeRepository {
  getCoffees: () => Promise<Coffee[]>
}

class DefaultCoffeeRepository {
  async getCoffees() {
    return await fetchData<Coffee[]>('/coffee/iced')
  }
}

export function createCoffeeRepository(): CoffeeRepository {
  return new DefaultCoffeeRepository()
}
