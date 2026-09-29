import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const PPC_LABELS: Record<string, string> = {
  utm_source: "Source",
  utm_medium: "Medium",
  utm_campaign: "Campaign",
  utm_id: "Campaign ID",
  utm_term: "Keyword",
  utm_content: "Ad content",
  gclid: "Google click ID",
  gbraid: "Google gbraid",
  wbraid: "Google wbraid",
  fbclid: "Facebook click ID",
  msclkid: "Microsoft click ID",
  gad_source: "Google ads source",
  landingPage: "Landing page",
  referrer: "Referrer",
  pageUrl: "Form page",
  pagePath: "Form path",
};

export async function POST(request: Request) {
  const body = (await request.json()) as {
    formName?: string;
    fields?: Record<string, unknown>;
    ppc?: Record<string, unknown>;
  };

  const fields = sanitize(body.fields);
  const ppc = sanitize(body.ppc);
  const name = String(fields.fullName || fields.name || "Website lead");
  const email = String(fields.email || "");

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const to = process.env.LEAD_TO || "info@amzselfpub.com";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return NextResponse.json({ error: "Mail is not configured." }, { status: 500 });
  }

  const formName = body.formName || "Website form";
  const text = [
    `Form: ${formName}`,
    "",
    "Lead",
    ...lines(fields),
    "",
    "PPC campaign",
    ...lines(ppc, PPC_LABELS),
  ].join("\n");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"AMZ Self Pub" <${user}>`,
    to,
    replyTo: email,
    subject: `New lead: ${name} — ${formName}`,
    text,
  });

  return NextResponse.json({ ok: true });
}

function sanitize(input: Record<string, unknown> | undefined) {
  const output: Record<string, string> = {};
  if (!input) return output;

  for (const [key, value] of Object.entries(input)) {
    if (key === "consent") continue;
    if (typeof value === "string" && value.trim()) output[key] = value.trim();
  }

  return output;
}

function lines(values: Record<string, string>, labels: Record<string, string> = {}) {
  const entries = Object.entries(values);
  if (entries.length === 0) return ["(none)"];
  return entries.map(([key, value]) => `${labels[key] || key}: ${value}`);
}
