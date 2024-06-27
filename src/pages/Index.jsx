import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function Index() {
  const metrics = [
    { title: "Revenue", value: "$120,000", badge: "Monthly" },
    { title: "Expenses", value: "$80,000", badge: "Monthly" },
    { title: "Profit", value: "$40,000", badge: "Monthly" },
    { title: "Cash Flow", value: "$15,000", badge: "Monthly" },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-2xl font-bold">Financial Dashboard</h1>
      <Separator />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{metric.value}</p>
              <Badge>{metric.badge}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Index;