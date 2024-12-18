"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

const organizations = [
  {
    id: 1,
    name: "TechInnovate Solutions",
    logo: "https://source.unsplash.com/random/80x80?tech",
    date: "August 15th, 2024",
    plan: "Enterprise Plan",
    status: "active",
  },
  {
    id: 2,
    name: "Global Systems Integration Corp.",
    logo: "https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "September 3rd, 2024",
    plan: "Intermediate Plan",
    status: "active",
  },
  {
    id: 3,
    name: "DataDriven Analytics",
    logo: "https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "July 22nd, 2024",
    plan: "Basic Plan",
    status: "inactive",
  },
  {
    id: 4,
    name: "CloudNine Technologies",
    logo: "https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "October 5th, 2024",
    plan: "Enterprise Plan",
    status: "active",
  },
  {
    id: 5,
    name: "Quantum Computing Innovations Ltd.",
    logo: "https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "November 18th, 2024",
    plan: "Advanced Plan",
    status: "active",
  },
];

export function OrganizationList() {
  return (
    <TooltipProvider>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org) => (
          <Card key={org.id} className="p-6 flex flex-col h-full">
            <div className="flex items-start justify-between space-x-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 overflow-hidden rounded-md">
                  <Image
                    alt={`${org.name} logo`}
                    className="h-full w-full object-cover"
                    src={org.logo}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h3
                        className="font-semibold truncate max-w-[150px]"
                        title={org.name}
                      >
                        {org.name}
                      </h3>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{org.name}</p>
                    </TooltipContent>
                  </Tooltip>
                  <p className="text-sm text-muted-foreground">{org.date}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 flex flex-col flex-grow">
              <div className="flex-grow">
                {/* Add any additional organization info here if needed */}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Button
                  className="flex-1"
                  variant={org.status === "active" ? "default" : "secondary"}
                >
                  Setup
                </Button>
                <Button
                  className="flex-1"
                  variant="outline"
                  disabled={org.status !== "active"}
                >
                  {org.status === "active"
                    ? "Go To Dashboard"
                    : "Go To Billing"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </TooltipProvider>
  );
}
