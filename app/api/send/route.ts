import { EmailTemplate } from '@/components/email';
import { Resend } from 'resend';

// Instanz von Resend erstellen
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Warten, bis das React-Template korrekt gerendert wurde
    const emailContent = await EmailTemplate({ firstName: 'John' });

    // Senden der E-Mail
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: emailContent, // Hier geben wir das gerenderte ReactNode weiter
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
