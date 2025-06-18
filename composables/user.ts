import type { User } from '~/types/games'

export function useUser() {
  const user = useState<User | null>('user', () => null)

  function setUserProperty<K extends keyof User>(key: K, value: User[K]): void {
    if (user.value !== null) {
      user.value[key] = value
    }
  }

  return { user, setUserProperty }
}
