import { NextResponse } from 'next/server'

export async function POST(req, res) {
    const { body } = await req.json();
    console.log("api call")
    console.log(body)

    // hubspot request options
    var postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body,
    };


    try {
        // create contact 
        let response = await fetch(`${process.env.url}/wp-json/webduel/v1/contact-form`, postOptions)
        response = await response.json();



        return NextResponse.json({ message: "This Worked", success: true, data: response });
    } catch (error) {
        console.error(error);
        // const err = await error.json();
        return NextResponse.json({ message: error, success: false });
        // res.status(500).send('Error sending email');

    }
}

export async function GET(req, res) {
    return NextResponse.json(res)

};