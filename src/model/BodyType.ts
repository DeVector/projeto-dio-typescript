interface BodyLogin {
    username: string,
    password: string,
    request_token: string
}

interface BodyList {
    name: string,
    description: string,
    languageDefault: "pt-br"
}

interface BodyListAddMovie {
    mediaId: number
}

interface BodySession {
    requestToke: string
}

type BodyTypes = BodyLogin | BodyList | BodyListAddMovie | BodySession;