import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type QuotePayload = {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  serviceLocation: string;
  cleaningType: string;
  preferredSchedule?: string;
  message?: string;

  // Honeypot
  website?: string;
};

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const body = (await request.json()) as QuotePayload;

    /*
      Honeypot spam protection.
      Real visitors will never fill this field.
    */
    if (body.website) {
      return NextResponse.json({
        success: true,
        message: "Quote request received.",
      });
    }

    if (
      !body.companyName ||
      !body.contactName ||
      !body.phone ||
      !body.email ||
      !body.serviceLocation ||
      !body.cleaningType
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    const cleaningEmail = process.env.CLEANING_EMAIL || "info@himac.us";

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Texian Cleaning <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,

      to: cleaningEmail,

      /*
        If the company clicks Reply in their email,
        the reply goes directly to the person who submitted the form.
      */
      replyTo: body.email,

      subject: `New Cleaning Quote Request - ${body.companyName}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 700px;
            margin: 0 auto;
            color: #17212b;
            line-height: 1.6;
          "
        >
          <div
            style="
              background: #071d30;
              color: #ffffff;
              padding: 30px;
              border-radius: 14px 14px 0 0;
            "
          >
            <div
              style="
                color: #e8ad35;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
              "
            >
              Texian Cleaning
            </div>

            <h1
              style="
                margin: 6px 0 0;
                font-size: 26px;
              "
            >
              New Cleaning Quote Request
            </h1>

            <p
              style="
                margin: 8px 0 0;
                color: #d9e7ef;
              "
            >
              A new quote request was submitted through
              texiancleaning.com.
            </p>
          </div>

          <div
            style="
              border: 1px solid #dde6eb;
              border-top: 0;
              padding: 30px;
              border-radius: 0 0 14px 14px;
            "
          >
            <table
              style="
                width: 100%;
                border-collapse: collapse;
              "
            >
              <tbody>
                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      width: 38%;
                      color: #667581;
                    "
                  >
                    Company
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      font-weight: 700;
                    "
                  >
                    ${escapeHtml(body.companyName)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #667581;
                    "
                  >
                    Contact Name
                  </td>

                  <td style="padding: 10px 0;">
                    ${escapeHtml(body.contactName)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #667581;
                    "
                  >
                    Phone
                  </td>

                  <td style="padding: 10px 0;">
                    ${escapeHtml(body.phone)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #667581;
                    "
                  >
                    Email
                  </td>

                  <td style="padding: 10px 0;">
                    <a
                      href="mailto:${escapeHtml(body.email)}"
                      style="color: #1477ad;"
                    >
                      ${escapeHtml(body.email)}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #667581;
                    "
                  >
                    Service Location
                  </td>

                  <td style="padding: 10px 0;">
                    ${escapeHtml(body.serviceLocation)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #667581;
                    "
                  >
                    Cleaning Service
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      font-weight: 700;
                    "
                  >
                    ${escapeHtml(body.cleaningType)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #667581;
                    "
                  >
                    Preferred Schedule
                  </td>

                  <td style="padding: 10px 0;">
                    ${escapeHtml(body.preferredSchedule || "Not provided")}
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              style="
                margin-top: 24px;
                padding-top: 22px;
                border-top: 1px solid #dde6eb;
              "
            >
              <div
                style="
                  color: #667581;
                  font-size: 12px;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 0.8px;
                "
              >
                Message / Additional Details
              </div>

              <p
                style="
                  margin: 9px 0 0;
                  color: #344653;
                "
              >
                ${escapeHtml(
                  body.message || "No additional message provided.",
                ).replaceAll("\n", "<br />")}
              </p>
            </div>

            <div
              style="
                margin-top: 28px;
                padding: 16px;
                background: #f5f8fa;
                border-radius: 10px;
                color: #667581;
                font-size: 13px;
              "
            >
              You can reply directly to this email to contact
              ${escapeHtml(body.contactName)} at
              ${escapeHtml(body.email)}.
            </div>

            <p
              style="
                margin-top: 28px;
                color: #84919b;
                font-size: 12px;
              "
            >
              Texian Cleaning — A Business Service of HI mac USA Inc.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend quote email error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "We could not send your quote request. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your quote request has been received. Our team will review your cleaning requirements and contact you.",
    });
  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your request. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
