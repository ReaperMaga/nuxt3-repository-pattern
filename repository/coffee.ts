import { fetchData } from '~/utils/api'

export interface CoffeeRepository {
  getCoffees: () => Promise<Coffee[]>
}

class DefaultCoffeeRepository {
  async getCoffees() {
    return await fetchData<Coffee[]>('/coffee/iced')
  }
}

const coffeeRepository = new DefaultCoffeeRepository()

export default coffeeRepository
