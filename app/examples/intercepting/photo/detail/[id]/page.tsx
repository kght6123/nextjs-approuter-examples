export default async function Home({ params }: { params: { id: string } }) {
  return <main className="container mx-auto">Photo detail {params.id}</main>;
}
