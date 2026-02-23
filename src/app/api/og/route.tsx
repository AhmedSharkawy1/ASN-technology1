import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
                    backgroundColor: '#0B1120',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        width: '800px',
                        height: '800px',
                        backgroundColor: 'rgba(0, 212, 255, 0.2)',
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                        top: '-200px',
                        left: '-200px',
                    }}
                />
                <h1
                    style={{
                        fontSize: 80,
                        color: '#fff',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    ASN <span style={{ color: '#00D4FF', marginLeft: '20px' }}>Technology</span>
                </h1>
                <p style={{ fontSize: 40, color: 'white', opacity: 0.8 }}>
                    Futuristic Digital Agency
                </p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
