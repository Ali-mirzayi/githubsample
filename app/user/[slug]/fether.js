export async function getUser(user) {
    const res = await fetch(`https://api.github.com/users/${user}`)
    return res.json()
}

export async function getRepos(user) {
    const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=created`)
    return res.json()
}