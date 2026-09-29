const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  fullName: "Full name",
  phone: "Phone",
  email: "Email",
  message: "Message",
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

export function leadEmail(input: {
  formName: string;
  fields: Record<string, string>;
  ppc: Record<string, string>;
}) {
  const name = input.fields.fullName || input.fields.name || "Website lead";
  const email = input.fields.email || "";
  const subject = `New lead: ${name} — ${input.formName}`;
  const text = [
    `New lead from ${input.formName}`,
    "",
    ...Object.entries(input.fields).map(([key, value]) => `${label(key)}: ${value}`),
    "",
    "PPC campaign",
    ...(Object.keys(input.ppc).length
      ? Object.entries(input.ppc).map(([key, value]) => `${label(key)}: ${value}`)
      : ["No campaign parameters were captured."]),
  ].join("\n");

  return { subject, text, html: html(input, name, email) };
}

function html(
  input: { formName: string; fields: Record<string, string>; ppc: Record<string, string> },
  name: string,
  email: string,
) {
  const reply = email
    ? `<a href="mailto:${escapeAttr(email)}" style="display:inline-block;background:#05a59d;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;line-height:44px;padding:0 22px;border-radius:10px;">Reply to ${escapeHtml(name)}</a>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#eef6f4;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef6f4;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;">
          <tr>
            <td style="background:#053f7e;padding:28px 32px 24px;">
              <img src="cid:logo" width="56" height="48" alt="AMZ Self Pub" style="display:block;border:0;height:48px;width:auto;" />
              <p style="margin:18px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#ffffff;">New publishing lead</p>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#d7ece9;">${escapeHtml(input.formName)}</p>
            </td>
          </tr>
          <tr>
            <td style="height:6px;background:#05a59d;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#05a59d;font-weight:700;">Lead details</p>
              ${rows(input.fields)}
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;">
              <p style="margin:18px 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#053f7e;font-weight:700;">PPC campaign</p>
              ${
                Object.keys(input.ppc).length
                  ? rows(input.ppc)
                  : `<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#66707a;">No campaign parameters were captured on this visit.</p>`
              }
              <div style="margin-top:24px;">${reply}</div>
            </td>
          </tr>
          <tr>
            <td style="background:#f6fbf9;padding:18px 32px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#66707a;">
              AMZ Self Pub · info@amzselfpub.com<br />
              Get an idea. Get published. Get fame.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function rows(values: Record<string, string>) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 8px;">
    ${Object.entries(values)
      .map(
        ([key, value]) => `<tr>
          <td style="width:140px;padding:12px 14px;background:#f6fbf9;border-radius:10px 0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#053f7e;vertical-align:top;">${escapeHtml(label(key))}</td>
          <td style="padding:12px 14px;background:#f6fbf9;border-radius:0 10px 10px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#212b27;">${escapeHtml(value)}</td>
        </tr>`,
      )
      .join("")}
  </table>`;
}

function label(key: string) {
  return FIELD_LABELS[key] || key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value: string) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}
