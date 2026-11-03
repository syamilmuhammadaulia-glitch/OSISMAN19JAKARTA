import { ExternalLink } from "lucide-react";

interface DriveCardProps {
  title: string;
  date: Date | string;
  driveLink: string;
  category: string;
}

export default function DriveCard({
  title,
  date,
  driveLink,
  category,
}: DriveCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-2xs border border-slate-200/90 hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-200/80">
            {category.toUpperCase()}
          </span>
          <span className="text-slate-400 text-xs">
            {new Date(date).toLocaleDateString("id-ID")}
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
          {title}
        </h3>
      </div>
      <a
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-800 mt-3 pt-3 border-t border-slate-100 transition-colors"
      >
        <span>Buka Folder Dokumentasi</span>
        <ExternalLink size={15} />
      </a>
    </div>
  );
}

