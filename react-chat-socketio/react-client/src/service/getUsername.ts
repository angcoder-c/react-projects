type Props = {
    username : string | null
}

const getUsername = async ({ username } : Props) => {
    if (username) return username
    const res = await fetch('https://random-data-api.com/api/users/random_user')
    const { username: randomUsername } = await res.json()
    return randomUsername
}

export default getUsername