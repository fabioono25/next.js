import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne /> {/* overcoming the issue of Module not found: Can't resolve 'fs' */}
      </ClientComponentOne>
    </>
  );
}
