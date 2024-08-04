"use client";
import dynamic from "next/dynamic";

export default function Map() {
  const DynamicMapScreen = dynamic(
    async () => (await import("@/features")).MapScreen,
    {
      ssr: false,
    }
  );
  return (
    <>
      <div className="h-[calc(100vh-6em)] w-screen">
        <DynamicMapScreen />
      </div>
    </>
  );
}
