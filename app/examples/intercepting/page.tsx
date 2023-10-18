import Link from "next/link";

export default async function Home() {
  return (
    <main className="container mx-auto">
      Intercepting Routes Examples...
      <Link
        href={"/examples/intercepting/photo/999"}
        className="block text-blue-600 underline"
        prefetch={false}
      >
        photo999
      </Link>
      <Link
        href={"/examples/intercepting/photo/detail/999"}
        className="block text-blue-600 underline"
        prefetch={false}
      >
        photoDetail999
      </Link>
    </main>
  );
}
