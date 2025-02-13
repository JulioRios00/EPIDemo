"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const mockSearchData = [
  { 
    id: "1", 
    title: "Alerta: Sem capacete", 
    camera: "Camera 1",
    date: "20 Jan 2024",
    type: "no_ppe" 
  },
  { 
    id: "2", 
    title: "Alerta: Sem luvas", 
    camera: "Camera 2",
    date: "21 Jan 2024",
    type: "no_ppe"
  },
  { 
    id: "3", 
    title: "Alerta: Acesso não autorizado", 
    camera: "Camera 3",
    date: "22 Jan 2024",
    type: "unauthorized"
  },
];

export function AlertSearch({ onSelect }: { onSelect: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const filteredData = mockSearchData.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.camera.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          role="combobox" 
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value || "Buscar alertas..."}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput 
            placeholder="Digite para buscar..." 
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty>Nenhum alerta encontrado.</CommandEmpty>
            <CommandGroup>
              {filteredData.map((alert) => (
                <CommandItem
                  key={alert.id}
                  onSelect={() => {
                    setValue(alert.title);
                    onSelect(alert.id);
                    setOpen(false);
                  }}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{alert.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {alert.camera} • {alert.date}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
