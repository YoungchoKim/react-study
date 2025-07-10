import { create } from 'zustand'
import { combine, subscribeWithSelector, persist } from 'zustand/middleware'

export const useCountStore = create(
  persist(
    subscribeWithSelector(
      combine(
        {
          count: 0,
          double: 0
        },
        set => ({
          increase: () => {
            set(state => {
              return {
                count: state.count + 1
              }
            })
          },
          decrease: () => {
            set(state => {
              return {
                count: state.count - 1
              }
            })
          }
        })
      )
    ),
    {
      name: 'countStore',
      version: 1
      // storage: createJSONStorage(() => sessionStorage)
    }
  )
)

useCountStore.subscribe(
  state => state.count,
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
