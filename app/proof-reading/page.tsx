import { ServicePageView, serviceMetadata } from "@/components/service-page";
import { getService } from "@/lib/services";

const service = getService("proof-reading");

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePageView service={service} />;
}
