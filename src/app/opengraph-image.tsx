import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = 'Muheeb Ahmed — Full-Stack Web Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#11100E',
          color: '#F3EEE5',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: '#FF4D2E', textTransform: 'uppercase' }}>
          Full-Stack Web Developer
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 96, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>
            {site.name}
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 28, color: '#A59D90' }}>
            React · TypeScript · Node.js · Express · MongoDB
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>{site.brand}</div>
          <div style={{ display: 'flex', color: '#A59D90' }}>{site.location}</div>
        </div>
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 10, background: '#FF4D2E', display: 'flex' }} />
      </div>
    ),
    size,
  );
}
