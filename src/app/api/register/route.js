export async function POST(req) {
    try {
        const body = await req.json();
        const response = await fetch(process.env.API_URL + "api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (!response.ok) {
            const message = typeof data.message == "string" ? data.message : JSON.stringify(data.message)
            throw {message: message, statusCode: data.statusCode}
        }

        return new Response(JSON.stringify(data), { status: response.status });
    } catch (error) {
        console.error("API error:", error);

        return new Response(JSON.stringify({ error: error.message || "Internal server error" }),
            { status: error.statusCode || 500 }
        );
    }
}