import { NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'

export const GET = async () => {
  const wallets = await prisma.wallet.findMany()

  return NextResponse.json(wallets)
}
