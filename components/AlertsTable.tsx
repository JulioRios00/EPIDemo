"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import Image from "next/image";

interface Alert {
  id: string;
  timestamp: string;
  type: "no_ppe" | "low_confidence" | "unauthorized";
  camera: string;
  status: "pending" | "confirmed" | "false_positive";
  thumbnail: string;
  comments: string;
  equipmentRemoved: string[];
}

const STATUS_TRANSLATIONS = {
  pending: "Pendente",
  confirmed: "Confirmado",
  false_positive: "Falso positivo",
};

const ALERT_TRANSLATIONS = {
  no_ppe: "SEM EPI",
  low_confidence: "BAIXA CONFIANÇA",
  unauthorized: "NÃO AUTORIZADO",
} as const;

export function AlertsTable() {
  const [alerts] = useState<Alert[]>([
    {
      id: "1",
      timestamp: "2024-01-20 10:23",
      type: "no_ppe",
      camera: "Câmera 1",
      status: "pending",
      thumbnail: "/images/ex-2.jpg",
      comments: "",
      equipmentRemoved: ["Capacete", "Luvas"],
    },
    {
      id: "2",
      timestamp: "2024-01-20 11:34",
      type: "unauthorized",
      camera: "Câmera 3",
      status: "pending",
      thumbnail: "/images/ex-1.jpg",
      comments: "",
      equipmentRemoved: ["Colete"],
    },
    {
      id: "3",
      timestamp: "2024-01-20 16:43",
      type: "low_confidence",
      camera: "Câmera 2",
      status: "pending",
      thumbnail: "/images/ex-3.jpg",
      comments: "",
      equipmentRemoved: ["Capacete", "Colete", "Luvas"],
    },
  ]);

  const getAlertBadge = (type: Alert["type"]) => {
    const styles = {
      no_ppe: "bg-red-500",
      low_confidence: "bg-yellow-500",
      unauthorized: "bg-orange-500",
    };

    return <Badge className={styles[type]}>{ALERT_TRANSLATIONS[type]}</Badge>;
  };

  return (
    <Table className="bg-background">
      <TableHeader>
        <TableRow>
          <TableHead>Horário</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Câmera</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Miniatura</TableHead>
          <TableHead>Ações</TableHead>
          <TableHead>EPI Removido</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alerts.map((alert) => (
          <TableRow key={alert.id}>
            <TableCell>{alert.timestamp}</TableCell>
            <TableCell>{getAlertBadge(alert.type)}</TableCell>
            <TableCell>{alert.camera}</TableCell>
            <TableCell>{STATUS_TRANSLATIONS[alert.status]}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                {alert.equipmentRemoved.map((equipment, index) => (
                  <Badge key={index} variant="outline">
                    {equipment}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <Drawer>
                <DrawerTrigger asChild>
                  <div className="relative w-16 h-16">
                    <Image
                      src={alert.thumbnail}
                      alt="Alert thumbnail"
                      fill
                      className="object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Alerta de {alert.camera}</DrawerTitle>
                  </DrawerHeader>
                  <div className="p-6">
                    <div className="relative w-full max-w-3xl h-[500px] mx-auto">
                      <Image
                        src={alert.thumbnail}
                        alt="Alert full view"
                        fill
                        className="rounded-lg object-contain"
                      />
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Confirmar
                </Button>
                <Button size="sm" variant="outline">
                  Auditoria
                </Button>
                <Button size="sm" variant="outline">
                  Adicionar comentário
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
