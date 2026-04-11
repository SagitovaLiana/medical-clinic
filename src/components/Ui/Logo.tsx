import { Stethoscope } from "lucide-react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center gap-3">
        <Stethoscope className="text-accentTextBrown dark:text-white size-8 pb-1 " />
        <h2>Гиппократ</h2>
      </div>
    </Link>
  );
};

export default Logo;
