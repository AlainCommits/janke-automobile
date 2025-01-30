//Users/alonondanse/janke-auto/app/api/purchase/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { PurchaseEmailTemplate } from '@/components/emails/PurchaseEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = await resend.emails.send({
      from: 'Janke Automobile <noreply@janke-automobile.de>',
      to: ['janke-automobile@hotmail.de'],
      subject: 'Neue Fahrzeug-Ankaufanfrage',
      react: PurchaseEmailTemplate(body),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}