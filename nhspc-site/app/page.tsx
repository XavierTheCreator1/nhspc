import Link from 'next/link';
import Footer from '@/app/ui/home/Footer';
import Welcome from '@/app/ui/home/Welcome';

export default function HomePage() {
  return (
    <>
      <main>
        <nav className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              NHSPC
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/join">Join Now</Link>
              </li>
              <li>
                <Link href="/login">Sign In</Link>
              </li>
              <li>
                <details>
                  <summary>Club Info</summary>
                  <ul className="rounded-t-none bg-base-100 p-2">
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/curriculum " className="link-hover link">
                        Curriculum
                      </Link>
                    </li>
                    <li>
                      <Link href="/team">The Team</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="link-hover link">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/law" className="link-hover link">
                        Constitution
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/api">API</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Welcome />
      </main>
      <Footer />
    </>
  );
}
