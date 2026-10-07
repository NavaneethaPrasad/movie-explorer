import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="rounded-2xl border border-border bg-card p-8">
      <div className="flex items-center gap-4">
        <Mail className="h-8 w-8 text-primary" />

        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Need More Help?
          </h2>

          <p className="mt-2 text-muted-foreground">
            If you have any questions or feedback, feel free to contact us.
          </p>

          <p className="mt-4 font-medium text-primary">
            support@movieexplorer.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;