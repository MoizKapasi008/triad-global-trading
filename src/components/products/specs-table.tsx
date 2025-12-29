import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

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
    <section className="mt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000" aria-labelledby="specs-table-title">
      <div className="relative mb-8 overflow-hidden py-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-secondary/50" />
          <h3
            id="specs-table-title"
            className="text-3xl font-black text-primary tracking-[0.2em] uppercase"
          >
            {title}
          </h3>
          <div className="h-px w-12 bg-secondary/50" />
        </div>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
      </div>

      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-b from-secondary/10 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-[0_30px_70px_rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary/95 border-none">
                <TableHead className="px-10 py-6 text-left text-secondary font-black text-[10px] tracking-[0.3em] uppercase">
                  Parameter
                </TableHead>
                <TableHead className="px-10 py-6 text-left text-secondary font-black text-[10px] tracking-[0.3em] uppercase">
                  Range / Specification
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={`${row.parameter}-${index}`}
                  className={cn(
                    "group/row transition-colors border-b border-gray-100/50 bg-card",

                  )}
                >
                  <TableCell className="px-6 py-4 font-bold text-primary/80 group-hover/row:text-primary transition-colors text-sm md:text-base">
                    {row.parameter}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-gray-700 font-medium text-sm md:text-base">
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
