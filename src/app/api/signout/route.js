import { cookies } from "next/headers";

export async function POST(res) {
    cookies().delete('cookie')
    return new Response('logged out')
}
