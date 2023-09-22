export const useGetNameByPath = (path) => {
  switch (path) {
    case '':
      return 'Dashboard'
    case 'dashboard':
      return 'Dashboard'
    case 'store':
      return 'Store'
    case 'financial':
      return 'Financial'
    case 'profile':
      return 'Profile'
  }
}