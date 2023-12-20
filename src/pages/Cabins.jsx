import { getCabins } from "../services/apiCabins";
import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://iekdghddmldcabtztgai.supabase.co/storage/v1/object/public/cabin-images/cabin-005.jpg"
        alt="cabin"
      />
    </Row>
  );
}

export default Cabins;
