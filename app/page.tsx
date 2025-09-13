import AuthButtons from "@/components/containers/auth-buttons";

export default async function Home() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col gap-7 justify-center items-center">
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-6xl font-bold">HYPERFIXATION</p>
          <p className="text-xl">Storing, sorting, and sharing your favourite things</p>
        </div>
        <AuthButtons />
    </div>
  );
}