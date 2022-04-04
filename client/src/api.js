const apiUrl = process.env.NODE_ENV === 'production' ? 'api' : 'http://localhost:3000/skeleton/api'

export const getName = async () => {
    const result = await fetch(apiUrl)
    if (result.status !== 200) return console.error(result)
    return await result.json()
}