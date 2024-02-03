import { formatMoney } from "@/lib/utils";
import { Job } from "@prisma/client";
import {
  Banknote,
  Briefcase,
  ExternalLink,
  Globe2,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Markdown from "./Markdown";

interface JobPageProps {
  job: Job;
}
const JobPage = ({
  job: {
    title,
    description,
    companyLogoUrl,
    companyName,
    applicationUrl,
    type,
    location,
    locationType,
    salary,
  },
}: JobPageProps) => {
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt={`${companyName} logo`}
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}

        <div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>

            <p className="font-semibold">
              {applicationUrl ? (
                <a
                  href={new URL(applicationUrl).origin}
                  target="_blank"
                  className="flex text-green-500 hover:underline"
                >
                  {companyName}
                  <ExternalLink size={12} className="ml-0.5" />
                </a>
              ) : (
                <span>{companyName}</span>
              )}
            </p>
          </div>

          <div className="mt-2 text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <Briefcase size={16} className="shrink-0" />
              {type}
            </p>

            <p className="flex items-center gap-1.5">
              <MapPin size={16} className="shrink-0" />
              {locationType}
            </p>

            <p className="flex items-center gap-1.5">
              <Globe2 size={16} className="shrink-0" />
              {location || "Anywhere"}
            </p>

            <p className="flex items-center gap-1.5">
              <Banknote size={16} className="shrink-0" />
              {formatMoney(salary)}
            </p>
          </div>
        </div>
      </div>

      <div>{description && <Markdown>{description}</Markdown>}</div>
    </section>
  );
};

export default JobPage;
