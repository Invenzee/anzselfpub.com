import { ServicePageView, serviceMetadata } from "@/components/service-page";
import { getService } from "@/lib/services";

const service = getService("audio-book-narration");

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePageView service={service} />;
}
