'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { OccurrenceRecord } from "./OccurrenceData"
import Link from "next/link"

interface OccurrenceTableProps {
  data: OccurrenceRecord[]
}

export function OccurrenceTable({ data }: OccurrenceTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Hora</TableHead>
          <TableHead>Local</TableHead>
          <TableHead>EPI removido</TableHead>
          <TableHead>Nome</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((record, index) => (
          <TableRow key={index}>
            <TableCell>{record.date}</TableCell>
            <TableCell>{record.time}</TableCell>
            <TableCell>{record.location}</TableCell>
            <TableCell>{record.ppeRemoved.join(", ")}</TableCell>
            <TableCell>{record.personName}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
