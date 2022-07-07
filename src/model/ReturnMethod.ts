interface ReturnMethod {
    url: string,
    method: 'GET' | 'POST' | 'DELETE' | 'PUT',
    body?: BodyInit | null | BodyTypes
}