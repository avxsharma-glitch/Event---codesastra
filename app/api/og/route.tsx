import { ImageResponse } from "next/og";

// Decryption helper
function decryptLanyardData(
  encrypted: string
): { username: string; variant: "dark" | "light" } | null {
  const OBFUSCATION_KEY = "v0gdl";

  if (!encrypted) return null;
  try {
    let base64 = encrypted.replace(/-/g, "+").replace(/_/g, "/");
    const padding = (4 - (base64.length % 4)) % 4;
    base64 += "=".repeat(padding);

    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);

    if (decoded.startsWith(`${OBFUSCATION_KEY}:`)) {
      const withoutKey = decoded.slice(OBFUSCATION_KEY.length + 1);
      const colonIndex = withoutKey.indexOf(":");
      if (colonIndex === -1) return null;

      const variant = withoutKey.slice(0, colonIndex) as "dark" | "light";
      const username = withoutKey.slice(colonIndex + 1);

      if (variant !== "dark" && variant !== "light") return null;

      return { username, variant };
    }
    return null;
  } catch {
    return null;
  }
}

async function loadGoogleFont (font: string, text: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`
    const css = await (await fetch(url)).text()
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

    if (resource) {
        const response = await fetch(resource[1])

        if (response.status == 200) {
            return await response.arrayBuffer()
        }
    }

    throw new Error('failed to load font data')
}

export async function GET(request: Request) {
  try {

      // Confirmed event details
      const TITLE = 'CODESASTRA';
      const SUBTITLE = 'Think. Code. Debug. Compete.';
      const EVENT_DETAILS = 'Event details announced by the organizers';

    const { searchParams } = new URL(request.url);
    const encrypted = searchParams.get("u");
    const format = searchParams.get("format") || "og"; // og, twitter, linkedin, square

    const data = encrypted ? decryptLanyardData(encrypted) : null;
    const userName = data?.username || "Attendee";
    const variant = data?.variant || "dark";

    // Format dimensions
    const dimensions = {
      og: { width: 1200, height: 630 }, // Facebook, LinkedIn, Discord
      twitter: { width: 1200, height: 600 }, // Twitter summary_large_image
      linkedin: { width: 1200, height: 627 }, // LinkedIn optimal
      square: { width: 1200, height: 1200 }, // Instagram, WhatsApp
    };

    const { width, height } = dimensions[format as keyof typeof dimensions] || dimensions.og;

    // Colors based on variant
    const isDark = variant === "dark";
    const bgColor = isDark ? "#000000" : "#ffffff";
    const textColor = isDark ? "#ffffff" : "#000000";
    const accentColor = "#878787";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: bgColor,
              fontFamily: 'Geist',
              fontSize: 48,
            padding: "60px",
          }}
        >
          <div style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center'
          }}>
            <svg
              height="80"
              width="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke={textColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
              <div style={{
                  display: 'flex',
                  flexDirection: 'column',
              }}>
                <span style={{
                    color: textColor,
                    textTransform: 'uppercase',
                    fontSize: '28px',
                    lineHeight: '36px',
                    letterSpacing: '1px',
                }}>CODE SASTRA</span>
                <span style={{
                    color: accentColor,
                    fontSize: '20px',
                    lineHeight: '28px'
                }}>{EVENT_DETAILS}</span>
              </div>
          </div>
            <div style={{
                display: 'flex',
                gap: '36px',
                marginBottom: '16px',
                marginTop: '24px'
            }}>
                <span style={{
                    color: textColor,
                    fontSize: '110px',
                    lineHeight: '105px',
                    fontWeight: 700,
                }}>
                    {TITLE}
                </span>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
            }}>
                <span style={{
                    color: textColor,
                    fontSize: '36px',
                    lineHeight: '44px',
                }}>
                    {SUBTITLE}
                </span>
                <span style={{
                    color: accentColor,
                    lineHeight: '44px',
                    fontSize: '32px',
                    textTransform: 'uppercase'
                }}>
                    Attendee: {userName}
                </span>
            </div>
        </div>
      ),
      {
        width,
        height,
          fonts: [
              {
                  name: 'Geist',
                  data: await loadGoogleFont('Geist', `Code Sastra Think. Debug. Compete. Attendee: Event details announced by the organizers ${userName}`),
                  style: 'normal',
              },
          ],
      }
    );
  } catch (e) {
    console.log(`OG Image Generation Error: ${e}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
