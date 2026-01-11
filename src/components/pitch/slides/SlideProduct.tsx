import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import PhoneMock from "../PhoneMock";
import { MapPin, Calendar, MessageSquare, Shield, Users, Sparkles } from "lucide-react";

interface SlideProductProps {
  isVisible: boolean;
}

const SlideProduct = ({ isVisible }: SlideProductProps) => {
  const layers = [
    { icon: Users, name: "People", description: "Discover verified users by intent", range: "4 km" },
    { icon: Calendar, name: "Events", description: "Find and create meetups", range: "30 km" },
    { icon: MessageSquare, name: "Niice Now", description: "Local Q&A and real-time threads", range: "Hyper-local" },
  ];

  const secretSauce = [
    { icon: Shield, title: "Location fuzzing", text: "100m–4km random offset. Exact location never stored or shared — even we can't see it" },
    { icon: Users, title: "Post-event matching", text: "Connections unlock only after verified attendance" },
    { icon: Sparkles, title: "Behavioral AI", text: "Recommendations improve with every event attended, compounding switching costs" },
  ];

  return (
    <SlideWrapper index={4} id="product" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-display-sm md:text-display font-bold text-white">
              Three layers. <span className="text-niice-purple-light">One map.</span> <span className="text-niice-green">Real outcomes.</span>
            </h2>

            {/* Layers Table */}
            <GlassCard>
              <table className="pitch-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Function</th>
                    <th className="text-right">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {layers.map((layer) => (
                    <tr key={layer.name}>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                            <layer.icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="font-medium text-white">{layer.name}</span>
                        </div>
                      </td>
                      <td className="text-muted-foreground">{layer.description}</td>
                      <td className="text-right">
                        <span className="pill-badge text-xs">{layer.range}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>

            {/* Secret Sauce */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Secret Sauce</h3>
              <div className="space-y-3">
                {secretSauce.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-niice-green/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-niice-green" />
                    </div>
                    <div>
                      <span className="font-medium text-white">{item.title}:</span>
                      <span className="text-muted-foreground ml-1 text-sm">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Three Stacked Phone Mocks */}
          <div className="flex items-center justify-center">
            <div className="relative flex gap-4 md:gap-6">
              {/* People Phone */}
              <div className="transform -rotate-6 translate-y-4">
                <PhoneMock label="People" className="scale-[0.85]">
                  <div className="w-full h-full bg-niice-dark p-3 pt-8">
                    <div className="h-full rounded-xl bg-niice-dark-purple overflow-hidden relative">
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <circle key={i} cx={20 + (i % 3) * 30} cy={20 + Math.floor(i / 3) * 40} r="8" fill="none" stroke="white" strokeWidth="0.5" />
                          ))}
                        </svg>
                      </div>
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-wrap gap-3 justify-center">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-primary/20 border-2 border-primary/30" />
                        ))}
                      </div>
                      <div className="absolute bottom-4 left-3 right-3 p-2 rounded-lg bg-white/10 text-center">
                        <p className="text-xs text-white">6 verified nearby</p>
                      </div>
                    </div>
                  </div>
                </PhoneMock>
              </div>

              {/* Events Phone */}
              <div className="z-10">
                <PhoneMock label="Events" className="scale-[0.9]">
                  <div className="w-full h-full bg-niice-dark p-3 pt-8">
                    <div className="h-full rounded-xl bg-niice-dark-purple overflow-hidden relative p-3">
                      <div className="space-y-2">
                        {[
                          { title: "Coffee & Code", time: "Today, 4 PM", going: 8 },
                          { title: "Sunset Picnic", time: "Tomorrow, 6 PM", going: 12 },
                          { title: "Language Exchange", time: "Sat, 3 PM", going: 15 },
                        ].map((event, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-xs font-medium text-white">{event.title}</p>
                            <div className="flex justify-between mt-1">
                              <span className="text-[10px] text-muted-foreground">{event.time}</span>
                              <span className="text-[10px] text-niice-green">{event.going} going</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </PhoneMock>
              </div>

              {/* Niice Now Phone */}
              <div className="transform rotate-6 translate-y-4">
                <PhoneMock label="Niice Now" className="scale-[0.85]">
                  <div className="w-full h-full bg-niice-dark p-3 pt-8">
                    <div className="h-full rounded-xl bg-niice-dark-purple overflow-hidden relative p-3">
                      <div className="space-y-2">
                        {[
                          { q: "Best coffee spot near Erasmus?", replies: 4 },
                          { q: "Anyone up for volleyball?", replies: 7 },
                          { q: "Study group for finals?", replies: 12 },
                        ].map((thread, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-xs text-white">{thread.q}</p>
                            <p className="text-[10px] text-accent mt-1">{thread.replies} replies</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </PhoneMock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideProduct;
