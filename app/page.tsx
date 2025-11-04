import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/classroom.webp"
        alt="Classroom"
        fill
        priority
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="animate-fade-in text-center">
          <h1 className="font-roboto text-4xl font-bold tracking-wide text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl lg:tracking-wider">
            Noor Plus
          </h1>
          <div className="mx-auto my-6 h-0.5 w-24 bg-white/60 sm:my-8 md:w-32" />
          <p className="font-roboto text-lg font-normal tracking-wide text-white/90 sm:text-xl md:text-2xl">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}
