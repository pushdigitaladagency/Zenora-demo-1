import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header } from "@/components/site/chrome";
import { PHONE_DISPLAY, PHONE_TEL, RERA } from "@/components/site/content";
import { Reveal, RevealText, SplitWords } from "@/components/site/motion";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Zenora by Zenvistas" },
      {
        name: "description",
        content: "How visit requests for Zenora by Zenvistas are handled, and the project disclaimer.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Header solid />
      <main className="bg-ivory px-5 pt-32 pb-20 lg:px-10">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow">Privacy</p>
          </Reveal>
          <h1 className="mt-4 font-serif text-display text-balance">
            <SplitWords text="A short, plain account." />
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal">
            <p>
              <RevealText text="This page presents published information about Zenora by Zenvistas at Goldwins, Coimbatore. It is not the official builder website." />
            </p>
            <p>
              <RevealText text="The private-visit form checks that your name, phone number, email, and consent are present. It does not save those details on a server or in this browser. When you continue, a WhatsApp message to the published project number is prepared for you to send yourself." />
            </p>
            <Reveal as="p">
              You can also call{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-olive underline">
                {PHONE_DISPLAY}
              </a>
              .
            </Reveal>
            <p>
              <RevealText
                text={`Project RERA number as published with the source material: ${RERA}. Prices, areas, and distances are shown only where the source states them, and they can change. Confirm them before you decide.`}
              />
            </p>
            <Reveal as="p" delay={40}>
              <Link to="/" className="text-olive underline">
                Return to Zenora
              </Link>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
