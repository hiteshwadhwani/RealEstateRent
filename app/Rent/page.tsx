import { getProperties } from "@/actions/getProperties";
import Search from "@/components/Search";
import PropertyCard from "@/components/ui/PropertyCard";

export interface IsearchParams {
  country?: string;
  date?: string;
  type?: string;
  from?: string;
  to?: string;
  test?: string;
}

export default async function Rent({
  searchParams,
}: {
  searchParams: IsearchParams;
}) {
  const properties = await getProperties(searchParams);
  return (
    <div>
      <Search />

      {properties ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 w-[90vw] mx-auto mt-12">
          {properties.map((item) => (
            <PropertyCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="text-neutral-600 flex items-center justify-center h-[80vh] w-full">
          No Property Available
        </div>
      )}
    </div>
  );
}
