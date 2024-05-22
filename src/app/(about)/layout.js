import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
     "We are the best blog creator in the market",
     "We post latest TECH blogs on our website"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
