"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical, Plus } from "lucide-react";
import Link from "next/link";

interface Admin {
  id: string;
  name: string;
  email: string;
  createdDate: string;
  currentMonthBill: number;
  avatarUrl?: string;
}

const admins: Admin[] = [
  {
    id: "1",
    name: "Ram Kokate",
    email: "k.shantaram0214@gmail.com",
    createdDate: "Sep, 9, 2024",
    currentMonthBill: 1455,
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Swapnil Pabale",
    email: "swapnilpabale2000@gmail.com",
    createdDate: "Sep, 18, 2024",
    currentMonthBill: 1455,
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "3",
    name: "payal shinde",
    email: "payal7shinde@gmail.com",
    createdDate: "Oct, 2, 2024",
    currentMonthBill: 1455,
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Avinash Talole",
    email: "avinash.talole75@gmail.com",
    createdDate: "Sep, 16, 2024",
    currentMonthBill: 1455,
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Afroz Shaikh",
    email: "ambitionstudyroom0786@gmail.com",
    createdDate: "Sep, 13, 2024",
    currentMonthBill: 1455,
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "6",
    name: "Ganesh Pawar",
    email: "aspirantslibrary4325@gmail.com",
    createdDate: "Nov, 23, 2024",
    currentMonthBill: 1455,
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "7",
    name: "Vilas Jadhav",
    email: "atharvil8855@gmail.com",
    createdDate: "Dec, 2, 2024",
    currentMonthBill: 1455,
    avatarUrl: "/placeholder.svg",
  },
];

type Column = {
  accessorKey: keyof Admin;
  header: string;
  cell: (info: Admin) => React.ReactNode;
};

const columns: Column[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => (
      <div className="flex items-center">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={info.avatarUrl} />
          <AvatarFallback>{info.name[0]}</AvatarFallback>
        </Avatar>
        {info.name}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.email,
  },
  {
    accessorKey: "createdDate",
    header: "Created Date",
    cell: (info) => info.createdDate,
  },
  {
    accessorKey: "currentMonthBill",
    header: "Current Month Bill",
    cell: (info) => info.currentMonthBill,
  },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Admins</h1>
        <Link href="/dashboard/super_admin/add_admin">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Admin
          </Button>
        </Link>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.accessorKey}>{column.header}</TableHead>
              ))}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {admins.map((admin) => (
              <TableRow key={admin.id}>
                {columns.map((column) => (
                  <TableCell key={`${admin.id}-${column.accessorKey}`}>
                    {column.cell(admin)}
                  </TableCell>
                ))}
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
