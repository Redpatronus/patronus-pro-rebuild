import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Red Patronus'
const NOTIFY_TO = 'info@redpatronus.com'

interface ContactFormNotificationProps {
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
  submittedAt?: string
}

const ContactFormNotificationEmail = ({
  name,
  company,
  email,
  phone,
  message,
  submittedAt,
}: ContactFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact form submission</Heading>
        <Text style={text}>
          You have received a new inquiry through the {SITE_NAME} website.
        </Text>

        <Section style={card}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>

          <Text style={label}>Company</Text>
          <Text style={value}>{company || '—'}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>

          <Text style={label}>Phone</Text>
          <Text style={value}>{phone || '—'}</Text>

          <Hr style={hr} />

          <Text style={label}>Message</Text>
          <Text style={messageStyle}>{message || '—'}</Text>

          {submittedAt ? (
            <>
              <Hr style={hr} />
              <Text style={meta}>Submitted at {submittedAt}</Text>
            </>
          ) : null}
        </Section>

        <Text style={footer}>{SITE_NAME} — Contact form notification</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New contact inquiry${data?.name ? ` from ${data.name}` : ''}${data?.company ? ` (${data.company})` : ''}`,
  to: NOTIFY_TO,
  displayName: 'Contact form notification',
  previewData: {
    name: 'Jane Doe',
    company: 'Acme Corp',
    email: 'jane@acme.com',
    phone: '+1 555 123 4567',
    message: 'Hello, we are interested in your DORA compliance services.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#7a0f1f', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.5', margin: '0 0 20px' }
const card = {
  border: '1px solid #eaeaea',
  borderRadius: '8px',
  padding: '20px',
  backgroundColor: '#fafafa',
}
const label = {
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  color: '#7a7a7a',
  margin: '12px 0 4px',
}
const value = { fontSize: '14px', color: '#1a1a1a', margin: '0' }
const messageStyle = { fontSize: '14px', color: '#1a1a1a', margin: '0', whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#eaeaea', margin: '16px 0' }
const meta = { fontSize: '12px', color: '#999', margin: '0' }
const footer = { fontSize: '12px', color: '#999', margin: '24px 0 0', textAlign: 'center' as const }
