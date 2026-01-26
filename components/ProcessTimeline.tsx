import { Factory } from "lucide-react"

export default function ProcessTimeline({ steps }: { steps: string[] }) {
  return (
    <div className="space-y-6">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">
            {i + 1}
          </div>
          <p className="text-stone-700">{step}</p>
        </div>
      ))}
    </div>
  )
}
