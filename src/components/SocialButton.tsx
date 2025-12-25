import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  description: string;
  color: string;
}

const SocialButton = ({ href, icon, label, description, color }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 md:p-8 rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
        {label}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </a>
  );
};

export default SocialButton;
