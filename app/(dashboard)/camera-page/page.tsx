"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface Camera {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'offline' | 'error' | 'configuring';
  latency: number;
  url: string;
}

export default function CameraConfigPage() {
  const [cameras] = useState<Camera[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusBadge = (status: Camera['status']) => {
    const statusConfig = {
      active: { color: 'bg-green-500', text: 'Connected' },
      offline: { color: 'bg-orange-500', text: 'Offline' },
      error: { color: 'bg-red-500', text: 'Error' },
      configuring: { color: 'bg-blue-500', text: 'Configuring' }
    };

    return (
      <Badge className={`${statusConfig[status].color} text-white`}>
        {statusConfig[status].text}
      </Badge>
    );
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 overflow-auto">
        <div className="container p-8 space-y-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Conexão e processamento de câmeras</h1>
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
                <Button variant="outline">Adicionar Câmera</Button>
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
                        <p className="text-sm text-gray-500">{camera.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {getStatusBadge(camera.status)}
                      <p className="text-sm text-gray-500">Latency: {camera.latency}ms</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {/* Handle test connection */}}
                      >
                        Test Connection
                      </Button>
                    </div>
                  </div>
                ))}

                {cameras.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Nenhuma câmera configurada. Clique em &quot;Adicionar Câmera&quot; para começar.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
