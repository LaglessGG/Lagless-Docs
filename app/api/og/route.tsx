import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://docs.lagless.gg';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Lagless.gg Docs';
    const description = searchParams.get('description') || 'Your comprehensive guide to Lagless.gg services';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#09080a',
            fontFamily: 'Nunito, system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Header with Lagless branding */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#1B8675',
                textAlign: 'center',
                marginBottom: '8px',
                fontFamily: 'Nunito, system-ui, -apple-system, sans-serif',
              }}
            >
              Lagless.gg Documentation
            </span>
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#6b7280',
                textAlign: 'center',
                fontFamily: 'Nunito, system-ui, -apple-system, sans-serif',
              }}
            >
              docs.lagless.gg
            </span>
          </div>

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '800px',
              padding: '0 40px',
            }}
          >
            <h1
              style={{
                fontSize: title.length > 50 ? '42px' : '48px',
                fontWeight: '700',
                color: '#ffffff',
                textAlign: 'center',
                lineHeight: 1.2,
                margin: '0 0 16px 0',
                fontFamily: 'Nunito, system-ui, -apple-system, sans-serif',
              }}
            >
              {title}
            </h1>
            
            <p
              style={{
                fontSize: '20px',
                fontWeight: '500',
                color: '#9ca3af',
                textAlign: 'center',
                lineHeight: 1.4,
                margin: '0',
                maxWidth: '600px',
                fontFamily: 'Nunito, system-ui, -apple-system, sans-serif',
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              display: 'flex',
              alignItems: 'center',
              color: '#6b7280',
              fontSize: '16px',
              fontWeight: '500',
              fontFamily: 'Nunito, system-ui, -apple-system, sans-serif',
            }}
          >
            <span>docs.lagless.gg</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
