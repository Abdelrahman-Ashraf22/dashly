"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideMenu from "../components/SideMenu/SideMenu";
import { useTheme } from "@mui/system";
import { useSession } from "next-auth/react";
import Home from "../page";

const TermsAndConditions: React.FC = () => {
  const router = usePathname();
  router.startsWith("/terms");

  const theme = useTheme();

  const { data: session } = useSession();
  const newdate = new Date();
  return (
    <>
      {session ? (
        <>
          <Header />
          <SideMenu />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <main
              style={{
                flex: 1,
                padding: "60px 40px",
                maxWidth: "900px",
                margin: "0 auto",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                backgroundColor: theme.palette.background.primary,
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <h1
                style={{
                  fontSize: "2.5rem",

                  marginBottom: "10px",
                  textAlign: "center",
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                  paddingBottom: "10px",
                  color: theme.palette.info.main,
                }}
              >
                Terms and Conditions
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                <strong>Last Updated:</strong> [{newdate.getUTCFullYear()}]
              </p>

              <section style={{ marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    borderLeft: "4px solid #3498db",
                    paddingLeft: "10px",
                    color: theme.palette.info.main,
                  }}
                >
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using this dashboard, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section style={{ marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    borderLeft: "4px solid #3498db",
                    paddingLeft: "10px",
                    color: theme.palette.info.main,
                  }}
                >
                  2. Use License
                </h2>
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials on this dashboard for personal, non-commercial
                  transitory viewing only.
                </p>
              </section>

              <section style={{ marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    borderLeft: "4px solid #3498db",
                    paddingLeft: "10px",
                    color: theme.palette.info.main,
                  }}
                >
                  3. Disclaimer
                </h2>
                <p>
                  The materials on this dashboard are provided on an 'as is'
                  basis. This dashboard makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other warranties
                  including without limitation, implied warranties or conditions
                  of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </section>

              <section style={{ marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    borderLeft: "4px solid #3498db",
                    paddingLeft: "10px",
                    color: theme.palette.info.main,
                  }}
                >
                  4. Limitations
                </h2>
                <p>
                  In no event shall this dashboard or its suppliers be liable
                  for any damages (including, without limitation, damages for
                  loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  this dashboard, even if this dashboard or a this dashboard
                  authorized representative has been notified orally or in
                  writing of the possibility of such damage.
                </p>
              </section>

              <section style={{ marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    borderLeft: "4px solid #3498db",
                    paddingLeft: "10px",
                    color: theme.palette.info.main,
                  }}
                >
                  5. Accuracy of Materials
                </h2>
                <p>
                  The materials appearing on this dashboard could include
                  technical, typographical, or photographic errors. This
                  dashboard does not warrant that any of the materials on its
                  dashboard are accurate, complete, or current.
                </p>
              </section>

              <section style={{ marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    borderLeft: "4px solid #3498db",
                    paddingLeft: "10px",
                    color: theme.palette.info.main,
                  }}
                >
                  6. Links
                </h2>
                <p>
                  This dashboard has not reviewed all of the sites linked to its
                  dashboard and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by this dashboard of the site.
                </p>
              </section>

              <section style={{ marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    borderLeft: "4px solid #3498db",
                    paddingLeft: "10px",
                    color: theme.palette.info.main,
                  }}
                >
                  7. Modifications
                </h2>
                <p>
                  This dashboard may revise these terms of service for its
                  dashboard at any time without notice. By using this dashboard
                  you are agreeing to be bound by the then current version of
                  these terms of service.
                </p>
              </section>

              <section style={{ marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    borderLeft: "4px solid #3498db",
                    paddingLeft: "10px",
                    color: theme.palette.info.main,
                  }}
                >
                  8. Governing Law
                </h2>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of [Your Jurisdiction], and you
                  irrevocably submit to the exclusive jurisdiction of the courts
                  in that state or location.
                </p>
              </section>

              <p
                style={{
                  fontSize: "1rem",
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
                If you have any questions about these Terms and Conditions,
                please contact us at [Your Contact Information].
              </p>
            </main>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Home />
        </>
      )}
    </>
  );
};

export default TermsAndConditions;
