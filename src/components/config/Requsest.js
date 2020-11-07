
export async function GET(url) {
    const  response = fetch(url);

    const json = (await response).json();
    return json;
}
export async function POST(url,data) {
    const  response = fetch(url,{
        method: 'POST',
        body:data
    });

    return (await response).json();
}
export async function TEST_GET(url) {
    const  response = fetch(url);

    const json = (await response).text();
    return json
}
export async function TEST_POST(url,data) {
    const  response = fetch(url,{
        method: 'POST',
        body:data
    });

    return (await response).text();
}

