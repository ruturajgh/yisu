import { Bell, Calendar, FileText } from "lucide-react";

const notices = [
  { icon: Bell, title: "Admissions Open for Academic Year 2025-26", date: "Feb 10, 2026", tag: "Admissions" },
  { icon: Calendar, title: "Last Date for Application Submission — March 31, 2026", date: "Feb 5, 2026", tag: "Deadline" },
  { icon: FileText, title: "Government Notification: YISU Recognition Gazette Published", date: "Jan 28, 2026", tag: "Government" },
  { icon: Bell, title: "Industry Workshop on AI & Automation — March 15, 2026", date: "Jan 20, 2026", tag: "Event" },
];

const NoticesSection = () => {
  return (
    <section className="bg-light-blue section-padding">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title text-foreground mb-2">
              Notices & <span className="text-primary">Updates</span>
            </h2>
            <p className="text-muted-foreground">Latest announcements and important notifications.</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm text-primary hover:text-royal font-semibold underline underline-offset-4">
            View All →
          </a>
        </div>
        <div className="space-y-3">
          {notices.map((notice) => (
            <div
              key={notice.title}
              className="bg-card border border-border rounded-md p-4 flex items-start gap-4 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <notice.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{notice.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{notice.date}</p>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-muted text-muted-foreground px-2 py-1 rounded-sm flex-shrink-0">
                {notice.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;
