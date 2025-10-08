import { FileText, CreditCard, Plane, MapPin, Check } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

export default function DocumentsRequired() {
  return (
    <Section
      //   id="documents-required"
      className="bg-gradient-to-br from-off-white to-soft-grey/30"
    >
      <SectionHeader
        title="Documents Required"
        subtitle="Simple requirements to get you on the road"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg border border-soft-grey/20 overflow-hidden">
          <div className="bg-gradient-to-r from-site-accent to-slate-teal p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                For UAE Residents
              </h3>
            </div>
            <p className="text-white/80 text-sm">
              If you live and work in the UAE
            </p>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-site-accent/5 rounded-xl border border-site-accent/20">
              <div className="w-10 h-10 rounded-lg bg-site-accent/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-site-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-dark-base">Emirates ID</h4>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-success/10 rounded-full">
                    <Check className="w-3 h-3 text-success" />
                    <span className="text-xs text-success font-semibold">
                      Required
                    </span>
                  </div>
                </div>
                <p className="text-sm text-grey">
                  Valid UAE Emirates ID (front and back)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-site-accent/5 rounded-xl border border-site-accent/20">
              <div className="w-10 h-10 rounded-lg bg-site-accent/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-site-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-dark-base">
                    UAE Driving License
                  </h4>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-success/10 rounded-full">
                    <Check className="w-3 h-3 text-success" />
                    <span className="text-xs text-success font-semibold">
                      Required
                    </span>
                  </div>
                </div>
                <p className="text-sm text-grey">Valid UAE driving license</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-soft-grey/10 rounded-xl border border-soft-grey/20">
              <div className="w-10 h-10 rounded-lg bg-soft-grey/30 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-grey" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-dark-base">Passport Copy</h4>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-grey/10 rounded-full">
                    <span className="text-xs text-grey font-semibold">
                      Optional
                    </span>
                  </div>
                </div>
                <p className="text-sm text-grey">
                  May be requested for verification
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-site-accent/5 border border-site-accent/20 rounded-xl">
              <p className="text-xs text-grey">
                <strong className="text-dark-base">Note:</strong> All documents
                must be valid and not expired. Digital copies are accepted
                during booking.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-soft-grey/20 overflow-hidden">
          <div className="bg-gradient-to-r from-site-secondary to-site-accent p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Tourists</h3>
            </div>
            <p className="text-white/80 text-sm">
              {"If you're visiting the UAE"}
            </p>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-site-secondary/5 rounded-xl border border-site-secondary/20">
              <div className="w-10 h-10 rounded-lg bg-site-secondary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-site-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-dark-base">Passport</h4>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-success/10 rounded-full">
                    <Check className="w-3 h-3 text-success" />
                    <span className="text-xs text-success font-semibold">
                      Required
                    </span>
                  </div>
                </div>
                <p className="text-sm text-grey">
                  Valid passport with entry stamp
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-site-secondary/5 rounded-xl border border-site-secondary/20">
              <div className="w-10 h-10 rounded-lg bg-site-secondary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-site-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-dark-base">Visit Visa</h4>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-success/10 rounded-full">
                    <Check className="w-3 h-3 text-success" />
                    <span className="text-xs text-success font-semibold">
                      Required
                    </span>
                  </div>
                </div>
                <p className="text-sm text-grey">
                  Valid UAE visit visa or visa on arrival
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-site-secondary/5 rounded-xl border border-site-secondary/20">
              <div className="w-10 h-10 rounded-lg bg-site-secondary/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-site-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-dark-base">
                    International Driving License
                  </h4>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-success/10 rounded-full">
                    <Check className="w-3 h-3 text-success" />
                    <span className="text-xs text-success font-semibold">
                      Required
                    </span>
                  </div>
                </div>
                <p className="text-sm text-grey">
                  Valid IDP or home country license
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-warning/5 border border-warning/20 rounded-xl">
              <p className="text-xs text-grey">
                <strong className="text-dark-base">Important:</strong> Your home
                country driving license must be valid. Some countries require an
                International Driving Permit (IDP) along with their license.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center p-6 bg-white rounded-2xl shadow-md border border-soft-grey/20">
        <p className="text-grey mb-4">
          <strong className="text-dark-base">Need Help?</strong> Our team is
          here to assist you with any questions about document requirements.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-site-accent to-slate-teal text-white font-semibold rounded-xl hover:shadow-lg transition-all">
          Contact Support
        </button>
      </div>
    </Section>
  );
}
