import dynamic from "next/dynamic";

// const DynamicMapScreen = dynamic(
//   async () => (await import("@/features")).MapScreen,
//   {
//     ssr: false,
//   }
// );

export default function Map() {
  return (
    <>
      <div className="h-[calc(100vh-6em)] w-screen">
        {/* <DynamicMapScreen /> */}
      </div>
    </>
  );
}
