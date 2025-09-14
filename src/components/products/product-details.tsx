import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProductDetails({
  detailSections,
  badges,
}: {
  detailSections?: { title: string; items: string[] }[];
  badges?: string[];
}) {
  return (
    <div>
      {detailSections?.map((group) => (
        <Card key={group.title} className="mb-4">
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-foreground text-sm sm:text-base leading-relaxed">
              {group.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}

      {/* Badges */}
      {badges?.length ? (
        <div className="flex flex-wrap gap-2 py-2">
          {badges.map((b) => (
            <Badge key={b} variant="secondary">
              {b}
            </Badge>
          ))}
        </div>
      ) : null}

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 pt-3">
        <Button className="rounded-full">INQUIRY NOW</Button>
        <Button variant="outline" className="rounded-full">
          DOWNLOAD SPECIFICATIONS
        </Button>
      </div>
    </div>
  );
}
