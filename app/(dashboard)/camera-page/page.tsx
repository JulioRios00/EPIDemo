"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Camera {
  id: string;
  name: string;
  location: string;
  status: "active" | "offline" | "error" | "configuring";
  latency: number;
  url: string;
}

export default function CameraConfigPage() {
  const [cameras] = useState<Camera[]>([
    {
      id: "cam-001",
      name: "Câmera entrada",
      location: "Entrada",
      status: "active",
      latency: 15,
      url: "/images/ex-1.jpg",
    },
    {
      id: "cam-002",
      name: "Câmera sala de máquinas",
      location: "Sala de máquinas",
      status: "offline",
      latency: 0,
      url: "/images/ex-2.jpg",
    },
    {
      id: "cam-003",
      name: "Câmera estoque",
      location: "Estoque",
      status: "configuring",
      latency: 45,
      url: "/images/ex-3.jpg",
    },
    {
      id: "cam-004",
      name: "Câmera Docas",
      location: "Docas",
      status: "error",
      latency: 150,
      url: "/images/ex-4.jpg",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);

  const [isAddCameraOpen, setIsAddCameraOpen] = useState(false);
  const [newCamera, setNewCamera] = useState({
    name: "",
    location: "",
    url: "",
  });

  const handleAddCamera = (e: React.FormEvent) => {
    e.preventDefault();
    // const camera: Camera = {
    //   id: `cam-${Date.now()}`,
    //   name: newCamera.name,
    //   location: newCamera.location,
    //   url: newCamera.url,
    //   status: "configuring",
    //   latency: 0,
    // };
    // Add camera logic here
    setIsAddCameraOpen(false);
    setNewCamera({ name: "", location: "", url: "" });
  };

  const handleTestConnection = (camera: Camera) => {
    setSelectedCamera(camera);
    setIsDrawerOpen(true);
  };

  const getStatusBadge = (status: Camera["status"]) => {
    const statusConfig = {
      active: { color: "bg-green-500", text: "Connected" },
      offline: { color: "bg-orange-500", text: "Offline" },
      error: { color: "bg-red-500", text: "Error" },
      configuring: { color: "bg-blue-500", text: "Configuring" },
    };

    return (
      <Badge className={`${statusConfig[status].color} text-white`}>
        {statusConfig[status].text}
      </Badge>
    );
  };

  const CameraPreview = ({ camera }: { camera: Camera }) => {
    if (camera.status === "offline" || camera.status === "error") {
      return (
        <div className="aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center text-red-500">
          <AlertCircle className="h-8 w-8 mb-2" />
          <p className="text-sm font-medium">
            {camera.status === "offline"
              ? "Camera is offline"
              : "Connection error"}
          </p>
        </div>
      );
    }

    return (
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <Image
          src={camera.url}
          alt={`Live feed from ${camera.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-white">ao vivo</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 overflow-auto">
        <div className="container p-8 space-y-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">
              Conexão e processamento de câmeras
            </h1>
          </div>

          <Card className="bg-background">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search cameras..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsAddCameraOpen(true)}
                >
                  Adicionar Câmera
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Câmeras conectadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cameras.map((camera) => (
                  <div
                    key={camera.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="space-y-1">
                        <p className="font-medium">{camera.name}</p>
                        <p className="text-sm text-gray-500">
                          {camera.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {getStatusBadge(camera.status)}
                      <p className="text-sm text-gray-500">
                        Latência: {camera.latency}ms
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleTestConnection(camera)}
                      >
                        Testar conexão
                      </Button>
                    </div>
                  </div>
                ))}

                {cameras.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Nenhuma câmera configurada. Clique em &quot;Adicionar
                    Câmera&quot; para começar.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          <Dialog open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DialogContent className="md:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>
                  Testando conexão: {selectedCamera?.name}
                </DialogTitle>
                <DialogDescription>
                  URL: {selectedCamera?.url}
                  <br />
                  Estado atual: {selectedCamera?.status}
                  <br />
                  Latência: {selectedCamera?.latency}ms
                </DialogDescription>
              </DialogHeader>
              <div className="p-4">
                <div className="space-y-4">
                  {selectedCamera && <CameraPreview camera={selectedCamera} />}
                  <div className="space-y-2">
                    <h4 className="font-medium">Detalhes da conexão</h4>
                    <p className="text-sm text-gray-500">
                      Localização: {selectedCamera?.location}
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => setIsDrawerOpen(false)}>Fechar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog open={isAddCameraOpen} onOpenChange={setIsAddCameraOpen}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Camera</DialogTitle>
                <DialogDescription>
                  Preencha os campos com os detalhes da câmera
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddCamera}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="name">Nome da câmera</label>
                    <Input
                      id="name"
                      value={newCamera.name}
                      onChange={(e) =>
                        setNewCamera({ ...newCamera, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="location">Localização</label>
                    <Input
                      id="location"
                      value={newCamera.location}
                      onChange={(e) =>
                        setNewCamera({ ...newCamera, location: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="url">URL</label>
                    <Input
                      id="url"
                      value={newCamera.url}
                      onChange={(e) =>
                        setNewCamera({ ...newCamera, url: e.target.value })
                      }
                      placeholder="rtsp://"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddCameraOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Camera</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
