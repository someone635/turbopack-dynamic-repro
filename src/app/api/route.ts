import { DynamicComponent } from "@/lib/dynamic";

export async function GET() {
  const test = DynamicComponent;
  return new Response("OK", { status: 200 });
}
