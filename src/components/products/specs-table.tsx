import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SpecsTable({
  title,
  rows,
}: {
  title: string;
  rows: { parameter: string; value: string }[];
}) {
  return (
    <section className="mt-10">
      <h3 className="text-center text-heading text-primary mb-4">{title}</h3>
      <div className="overflow-x-auto rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="px-4 py-3 text-left text-white">
                Parameter
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-white">
                Range / Specification
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell className="px-4 py-3 font-medium text-foreground">
                  {r.parameter}
                </TableCell>
                <TableCell className="px-4 py-3 text-foreground">{r.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
