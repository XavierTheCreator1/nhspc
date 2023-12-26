import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://miro.medium.com/v2/resize:fit:873/1*3z4XRfKCTnqF00xrpzE7oA.jpeg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">hai</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
