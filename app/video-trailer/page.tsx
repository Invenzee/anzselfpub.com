import { ServicePageView, serviceMetadata } from "@/components/service-page";
import { getService } from "@/lib/services";

const service = getService("video-trailer");

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePageView service={service} />;
}
