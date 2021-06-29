import create from 'zustand'


export const useInput = create(set => ({
  value: '',
  setValue: (val) => set(state => ({ value: val})) 
}))