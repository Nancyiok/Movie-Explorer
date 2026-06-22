export async function withMinDelay<T>(asyncTask: () => Promise<T>, minTimeMs = 600): Promise<T> {
  const startTime = Date.now()

  const result = await asyncTask()

  const timePassed = Date.now() - startTime
  const remainingTime = Math.max(0, minTimeMs - timePassed)

  if (remainingTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, remainingTime))
  }

  return result
}
