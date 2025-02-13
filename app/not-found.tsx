import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-5">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          A página que você procura não foi encontrada
        </p>
        <div className="bt-3">
          <Link href="/dash">
            <Button>Voltar a Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
