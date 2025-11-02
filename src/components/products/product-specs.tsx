import SpecsTable from "./specs-table";

export default function ProductSpecs({
  physicalSpecs,
  physicalSpecs2,
  chemicalSpecs,
  nutritionalSpecs,
}: {
  physicalSpecs?: { parameter: string; value: string }[];
  physicalSpecs2?: { parameter: string; value: string }[];
  chemicalSpecs?: { parameter: string; value: string }[];
  nutritionalSpecs?: { parameter: string; value: string }[];
}) {
  if (!physicalSpecs && !chemicalSpecs && !nutritionalSpecs && !physicalSpecs2)
    return null;

  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1140px] mt-10 space-y-8">
      {physicalSpecs && (
        <SpecsTable title="Physical Specifications" rows={physicalSpecs} />
      )}
      {physicalSpecs2 && (
        <SpecsTable title="Physical Specifications" rows={physicalSpecs2} />
      )}
      {chemicalSpecs && (
        <SpecsTable title="Chemical Specifications" rows={chemicalSpecs} />
      )}
      {nutritionalSpecs && (
        <SpecsTable
          title="Nutritional Specifications"
          rows={nutritionalSpecs}
        />
      )}
    </div>
  );
}
