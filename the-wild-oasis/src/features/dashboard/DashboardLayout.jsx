import styled from "styled-components";
import Stats from "./Stats";

import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import { useCabins } from "../../features/cabins/useCabins.js";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    numDays,
    isLoading: isLoading2,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) {
    return <Spinner />;
  }

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div className="">Todays activity</div>
      <div className="">Chart stay durations</div>
      <div className="">Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
