//Users/alonondanse/janke-auto/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/emails/ContactEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    const data = await resend.emails.send({
      from: 'Janke Automobile <noreply@janke-automobile.de>',
      to: ['janke-automobile@hotmail.de'],
      subject: 'Neue Kontaktanfrage',
      react: ContactEmailTemplate({
        name,
        email,
        phone,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}