import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SpecsTableRow {
  parameter: string;
  value: string;
}

interface SpecsTableProps {
  title: string;
  rows: SpecsTableRow[];
}

export default function SpecsTable({ title, rows }: SpecsTableProps) {
  if (!rows || rows.length === 0) {
    return null;
  }

  return (
    <section className="mt-10" aria-labelledby="specs-table-title">
      <h3
        id="specs-table-title"
        className="text-center text-2xl font-semibold text-primary mb-4"
      >
        {title}
      </h3>
      <div className="overflow-x-auto rounded-lg border-none border-primary shadow-md">
        <Table className="bg-white">
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary border-b-2 border-primary">
              <TableHead className="px-4 py-3 text-left text-white font-semibold">
                Parameter
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-white font-semibold">
                Range / Specification
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={`${row.parameter}-${index}`}
                className="hover:bg-primary/10 transition-colors border-b border-primary/20"
              >
                <TableCell className="px-4 py-3 font-medium text-foreground">
                  {row.parameter}
                </TableCell>
                <TableCell className="px-4 py-3 text-foreground">
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
