import { projects } from '../components/Projects'

/**
 * Dynamically calculates developer experience based on job start date: 1 May 2026.
 * Automatically updates as months and years pass.
 */
export const getDynamicExperience = (): string => {
  const startDate = new Date(2026, 4, 1) // May 1, 2026
  const currentDate = new Date()

  let years = currentDate.getFullYear() - startDate.getFullYear()
  let months = currentDate.getMonth() - startDate.getMonth()

  let totalMonths = years * 12 + months
  if (currentDate.getDate() < startDate.getDate()) {
    totalMonths -= 1
  }

  if (totalMonths < 1) {
    return '1+ Month'
  } else if (totalMonths < 12) {
    return `${totalMonths}+ Months`
  } else {
    const yrs = Math.floor(totalMonths / 12)
    const remMonths = totalMonths % 12
    if (remMonths === 0) {
      return `${yrs}+ ${yrs === 1 ? 'Year' : 'Years'}`
    }
    return `${yrs}.${Math.floor((remMonths / 12) * 10)}+ Yrs`
  }
}

/**
 * Returns dynamic count of live deployed projects based on the projects array length.
 */
export const getDynamicProjectsCount = (): string => {
  const count = projects ? projects.length : 5
  return `${count}+`
}
