import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Note: ImageResponse only supports TTF/OTF fonts, not WOFF2
  // Using system fonts for better compatibility and performance
  // System serif fonts will provide a similar elegant look matching Playfair Display

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
          background: '#0C0A09', // stone-950 base
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Layer 1: Dark contrast overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
          }}
        />

        {/* Layer 2: Vintage golden gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(120, 53, 15, 0.7) 0%, rgba(146, 64, 14, 0.5) 50%, rgba(12, 10, 9, 0.9) 100%)',
          }}
        />

        {/* Layer 3: Radial gradient overlay for depth */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(20, 15, 10, 0.8) 100%)',
          }}
        />

        {/* Layer 4: Spotlight effect - top left */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60%',
            height: '80%',
            background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
            transform: 'rotate(-25deg)',
          }}
        />

        {/* Layer 5: Spotlight effect - center right */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '50%',
            height: '60%',
            background: 'radial-gradient(ellipse at center, rgba(255, 215, 128, 0.25) 0%, transparent 70%)',
            transform: 'rotate(15deg)',
          }}
        />

        {/* Layer 6: Subtle texture/noise pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Feather/fade transition at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to top, #0C0A09 0%, rgba(12, 10, 9, 0.8) 50%, transparent 100%)',
          }}
        />

        {/* Bahay Kubo silhouette decoration - enhanced */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0.08,
            width: '500px',
            height: '350px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          {/* Roof triangle */}
          <div
            style={{
              position: 'absolute',
              bottom: '140px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '100px solid transparent',
              borderRight: '100px solid transparent',
              borderBottom: '120px solid rgba(252, 211, 77, 0.3)',
            }}
          />
          {/* House body */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '140px',
              backgroundColor: 'rgba(253, 230, 138, 0.2)',
            }}
          />
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 80px',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Brand name */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontSize: '110px',
                fontWeight: 700,
                fontFamily: 'serif',
                color: '#FEF3C7', // amber-100
                letterSpacing: '-3px',
                lineHeight: 1.1,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              Harong
            </span>
            <span
              style={{
                fontSize: '110px',
                fontWeight: 300,
                fontFamily: 'serif',
                fontStyle: 'italic',
                color: '#FCD34D', // amber-300
                margin: '0 12px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              -
            </span>
            <span
              style={{
                fontSize: '110px',
                fontWeight: 700,
                fontFamily: 'serif',
                color: '#FEF3C7', // amber-100
                letterSpacing: '-3px',
                lineHeight: 1.1,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              Habi
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '18px',
              fontWeight: 500,
              color: '#FDE68A', // amber-200
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '32px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              opacity: 0.9,
            }}
          >
            Smart Planning, Smart Homes
          </div>

          {/* Main heading */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '56px',
              fontWeight: 600,
              color: '#FEF3C7', // amber-100
              textAlign: 'center',
              maxWidth: '1000px',
              lineHeight: 1.2,
              marginBottom: '24px',
              fontFamily: 'serif',
              letterSpacing: '-1px',
            }}
          >
            <div style={{ marginBottom: '8px' }}>Plan Your Dream Home</div>
            <div
              style={{
                fontStyle: 'italic',
                color: '#FCD34D', // amber-300
                fontWeight: 400,
                letterSpacing: '-0.06em',
              }}
            >
              Within Your Budget
            </div>
          </div>

          {/* Main quote */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 400,
              color: 'rgba(254, 243, 199, 0.8)', // amber-100 with opacity
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
              marginTop: '16px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            Empowering Filipino families in building smarter, safer, and more affordable homes.
          </div>

          {/* Decorative line */}
          <div
            style={{
              width: '240px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(252, 211, 77, 0.6) 50%, transparent 100%)',
              marginTop: '40px',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, rgba(217, 119, 6, 0.8) 0%, rgba(252, 211, 77, 0.6) 50%, rgba(217, 119, 6, 0.8) 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
