import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Mountain, Flame, Rocket } from "lucide-react";

export default function App() {
  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Anson Moorey</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Adventurer & Mechanical Engineer | Building rocket engines at UORocketry
      </p>

      <Tabs defaultValue="adventures" className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-4">
          <TabsTrigger value="adventures">
            <Mountain className="w-4 h-4 mr-1" /> Adventures
          </TabsTrigger>
          <TabsTrigger value="engineering">
            <Rocket className="w-4 h-4 mr-1" /> Engineering
          </TabsTrigger>
        </TabsList>

        <TabsContent value="adventures">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">80km Ultramarathon</h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Ran 80km through rugged terrain on July 5, 2025. A test of willpower, pacing, and persistence.
                </p>
                <Badge variant="outline">Trail Running</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Remote Fjord Hike</h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Explored the Saguenay Fjord backcountry with breathtaking views, solitude, and wildlife.
                </p>
                <Badge variant="outline">Backpacking</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engineering">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Hybrid Rocket Engine Design</h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Leading design and testing of hybrid rocket engines for UORocketry, pushing performance and safety.
                </p>
                <Badge variant="outline">Propulsion</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Thermodynamics Research</h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Applying heat transfer and fluid dynamics to optimize cooling in high-performance aerospace systems.
                </p>
                <Badge variant="outline">Mechanical Design</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <footer className="mt-10 text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Anson Moorey | Contact: anson@email.com
      </footer>
    </main>
  );
}
