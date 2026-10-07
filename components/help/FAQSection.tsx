const faqs = [
  {
    question: "Where does the movie information come from?",
    answer:
      "Movie data is provided by The Movie Database (TMDB) API.",
  },
  {
    question: "Are favorites saved?",
    answer:
      "Yes. Favorites are stored locally in your browser.",
  },
  {
    question: "Is my watchlist saved?",
    answer:
      "Yes. Your watchlist is stored locally in your browser.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. Movie Explorer can be used without creating an account.",
  },
];

const FAQSection = () => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-foreground">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="mb-2 font-semibold text-foreground">
              {faq.question}
            </h3>

            <p className="text-muted-foreground">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;