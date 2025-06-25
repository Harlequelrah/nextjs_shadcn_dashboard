import Calendar from "../components/Cards/Calendar"
import { DataTableDemo } from "../components/Cards/DataTable"
import General from "../components/Cards/General"
import Lines from "../components/Cards/Lines"
import { TableDemo } from "../components/Cards/Table"
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function Home() {
  return <div className="grid gap-[32px]">
    <div className="grid xl:grid-cols-2 gap-[32px]">
      <General />
      <div className="grid  gap-[32px]">
        <Calendar />
        <Calendar />
      </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] mb-[32px]">
      <Lines />
      <Card className="overflow-y-scroll">
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>These are the orders of this month.</CardDescription>
        </CardHeader>
        <div className="px-4 max-h-[350px]">
          <TableDemo />
        </div>
      </Card>
      <Card className="overflow-y-scroll">
        <CardHeader>
          <CardTitle>User</CardTitle>
          <CardDescription>These are the users of this month.</CardDescription>
        </CardHeader>
        <div className="px-4">
          <DataTableDemo />
        </div>
      </Card>
    </div>
  </div>
}
