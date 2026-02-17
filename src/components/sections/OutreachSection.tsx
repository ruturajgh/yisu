import { motion } from "framer-motion";
import { MapPin, Users, Building2, Award, TrendingUp } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { outreachStats } from "@/data/constants";

export default function OutreachSection() {
  return (
    <section className="section bg-card">
      <div className="container-narrow">
        <SectionHeader
          title="YISU Outreach Projects"
          subtitle="Impact Beyond Campus"
          description="Reaching out to rural government colleges across Telangana"
          badgeVariant="glass"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* MAJOR Project */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            whileHover={{ scale: 1.01 }}
            className="h-full"
          >
            <div className="bg-card border border-border/40 rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="px-3 py-1.5 bg-primary rounded-lg">
                  <span className="text-base font-bold text-background font-serif">MAJOR</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Manthani</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Manthani Job Opportunities & Readiness
              </p>

              {/* Compact Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                  <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-base font-bold text-foreground">{outreachStats.major.students}</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                  <Building2 className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-base font-bold text-foreground">{outreachStats.major.recruiters}</div>
                  <div className="text-sm text-muted-foreground">Recruiters</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                  <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-base font-bold text-foreground">{outreachStats.major.colleges}</div>
                  <div className="text-sm text-muted-foreground">Colleges</div>
                </div>
              </div>

              {/* Placements */}
              <div className="p-4 bg-foreground/5 border border-border/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-accent">Placements Achieved</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-foreground">{outreachStats.major.placements.logistics}</span>
                    <span className="text-muted-foreground"> Logistics</span>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">{outreachStats.major.placements.banks}</span>
                    <span className="text-muted-foreground"> Banks</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-foreground">
                      {outreachStats.major.placements.logistics + outreachStats.major.placements.banks}
                    </span>
                    <span className="text-muted-foreground"> Total</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VIKTOR Project */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="h-full"
          >
            <div className="bg-card border border-border/40 rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="px-3 py-1.5 bg-primary rounded-lg">
                  <span className="text-base font-bold text-background font-serif">VIKTOR</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Vikarabad</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Vikarakabad Kodangal Training for Opportunities and Readiness
              </p>

              {/* Compact Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                  <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-base font-bold text-foreground">{outreachStats.viktor.students}</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                  <Building2 className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-base font-bold text-foreground">{outreachStats.viktor.recruiters}</div>
                  <div className="text-sm text-muted-foreground">Recruiters</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                  <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-base font-bold text-foreground">{outreachStats.viktor.colleges}</div>
                  <div className="text-sm text-muted-foreground">Colleges</div>
                </div>
              </div>

              {/* Placements */}
              <div className="p-4 bg-foreground/5 border border-border/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-accent">Placements Achieved</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-foreground">{outreachStats.viktor.placements.logistics}</span>
                    <span className="text-muted-foreground"> Logistics</span>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">{outreachStats.viktor.placements.banks}</span>
                    <span className="text-muted-foreground"> Banks</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-foreground">
                      {outreachStats.viktor.placements.logistics + outreachStats.viktor.placements.banks}
                    </span>
                    <span className="text-muted-foreground"> Total</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
