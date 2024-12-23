import Link from "next/link";

export default function SideNav() {
  return (
    <div className="flex h-screen">
      <div className="flex w-72 flex-col bg-gray-200">
        <nav>
          <ul>
            <li>
              <a href="">Content</a>
            </li>
            <li>
              <Link
                href="/content-type"
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                Content Type
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
