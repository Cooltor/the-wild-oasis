import { useSearchParams } from "react-router-dom";

import { useCabins } from "./useCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams, setSearchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (cabins.length === 0) {
    return <Empty resource="cabins" />;
  }

  // 1. Get the filter value from the URL
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  //2. Get the sort value from the URL
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const sortedCabins = filteredCabins.sort((a, b) => {
    if (direction === "asc") return a[field] - b[field];
    if (direction === "desc") return b[field] - a[field];
  });

  return (
    <Menus>
      <Table columns=" 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
