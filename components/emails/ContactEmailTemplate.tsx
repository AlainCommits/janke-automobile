//Users/alonondanse/janke-auto/components/emails/ContactEmailTemplate.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  phone,
}: ContactEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Neue Kontaktanfrage von {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://janke-automobile.de/images/logo.jpg"
          width="150"
          height="75"
          alt="Janke Automobile"
          style={logo}
        />
        <Heading style={heading}>Neue Kontaktanfrage</Heading>
        <Section style={section}>
          <Text style={text}><strong>Name:</strong> {name}</Text>
          <Text style={text}><strong>E-Mail:</strong> {email}</Text>
          <Text style={text}><strong>Telefon:</strong> {phone}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          © {new Date().getFullYear()} Janke Automobile. Alle Rechte vorbehalten.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const logo = {
  margin: '0 auto',
  marginBottom: '24px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
};

const section = {
  padding: '24px',
  backgroundColor: '#f6f6f6',
  borderRadius: '4px',
};

const text = {
  margin: '0 0 10px 0',
  color: '#484848',
  fontSize: '16px',
  lineHeight: '24px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginTop: '20px',
  textAlign: 'center' as const,
};