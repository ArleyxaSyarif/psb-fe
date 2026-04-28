const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function post(endpoint: string, data: any, token?: string) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

export async function get(endpoint: string, token?: string) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
    });

    return res.json();
}

export async function del(endpoint: string, token?: string) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
    });

    return res.json();
}