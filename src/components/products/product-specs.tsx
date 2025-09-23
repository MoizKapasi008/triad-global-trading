import SpecsTable from "./specs-table";

export default function ProductSpecs({
  physicalSpecs,
  chemicalSpecs,
}: {
  physicalSpecs?: { parameter: string; value: string }[];
  chemicalSpecs?: { parameter: string; value: string }[];
}) {
  if (!physicalSpecs && !chemicalSpecs) return null;

  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1140px] mt-10 space-y-8">
      {physicalSpecs && <SpecsTable title="Physical Specifications" rows={physicalSpecs} />}
      {chemicalSpecs && <SpecsTable title="Chemical Specifications" rows={chemicalSpecs} />}
    </div>
  );
}
