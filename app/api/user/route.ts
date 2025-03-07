import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  console.log('test satu dua tiga')
  const body = await request.json()
  console.log(body)
  return NextResponse.json({ message: 'Hello World!' })
}
